<?php

namespace App\Controller;

use App\Entity\Courriels;
use App\Form\CourrielsType;
use App\Repository\CourrielsRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class ApiCourrielsController extends AbstractController
{
    private $mailer;
    private $userRepository;
    private CourrielsRepository $courrielsRepository;

    public function __construct(CourrielsRepository $courrielsRepository, MailerInterface $mailer, UserRepository $userRepository)
    {
        $this->courrielsRepository = $courrielsRepository;
        $this->mailer = $mailer;
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/api/courriels/", name="courriels_create_api", methods={"POST"} )
     */
    public function createAction(Request $request): JsonResponse
    {
        if ($request->isXmlHttpRequest()) {
            $token = $request->headers->get('authorization');
            if (!$this->isCsrfTokenValid('courriels', $token)) {
                return new JsonResponse('Unauthorized', 401);
            }
            $data = (array) json_decode($request->getContent());
            $courriel = new Courriels();
            $form = $this->createForm(CourrielsType::class, $courriel);
            $form->submit($data);
            if ($form->isSubmitted() && $form->isValid()) {
                $courriel->setSentAt(new \DateTime('now', new \DateTimeZone('Europe/Paris')));
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($courriel);
                $entityManager->flush();

                $this->sendEmails($courriel);

                return new JsonResponse('Created', 201);
            }

            return new JsonResponse('Unvalid form', Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return new JsonResponse('Method Not Allowed', 405);
    }

    /**
     * @Route("/admin/api/courriels/{id}", name="courriels_delete_api", methods={"DELETE"})
     */
    public function deleteAction(int $id, Request $request): JsonResponse
    {
        if ($request->isXmlHttpRequest()) {
            $token = $request->headers->get('authorization');
            $courriel = $this->courrielsRepository->find($id);
            if (!$this->isCsrfTokenValid('delete'.$id, $token)) {
                return new JsonResponse('Unauthorized', 401);
            } elseif (null == $courriel) {
                return new JsonResponse('Not found', 404);
            } else {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($courriel);
                $entityManager->flush();

                return new JsonResponse('OK', 200);
            }
        }

        return new JsonResponse('Method Not Allowed', 405);
    }

    private function sendEmails(Courriels $courriel)
    {
        //On récupère les emails de tous les administrateurs du site
        $admin_emails = [];
        foreach ($this->userRepository->findAll() as $user) {
            $role = $user->getRoles();
            if (in_array('ROLE_ADMIN', $role)) {
                $admin_emails[] = $user->getEmail();
            }
        }

        $email = (new Email())
            ->from($courriel->getMailFrom())
            ->to($admin_emails[0])
            //->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject($courriel->getSubject())
            ->text($courriel->getMessage());
        // ->html('<p>See Twig integration for better HTML integration!</p>');

        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
        }
    }
}
