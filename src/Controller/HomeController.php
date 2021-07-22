<?php

namespace App\Controller;

use App\Entity\Courriels;
use App\Form\CourrielsType;
use App\Repository\ExperiencesAndEducationsRepository;
use App\Repository\PublicationsRepository;
use App\Repository\SkillsAndFeaturesRepository;
use App\Repository\SocialNetworksRepository;
use App\Repository\UserImagesRepository;
use App\Repository\UserRepository;
use App\Repository\WebSitesRepository;
use Mpdf\Config\ConfigVariables;
use Mpdf\Config\FontVariables;
use Mpdf\HTMLParserMode;
use Mpdf\Mpdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;

class HomeController extends AbstractController
{
    private MailerInterface $mailer;
    private UserRepository $userRepository;
    private UserImagesRepository $userImagesRepository;
    private EntrypointLookupInterface $entrypointLookup;

    public function __construct(MailerInterface $mailer, UserRepository $userRepository, UserImagesRepository $userImagesRepository, EntrypointLookupInterface $entrypointLookup)
    {
        $this->mailer = $mailer;
        $this->userRepository = $userRepository;
        $this->userImagesRepository = $userImagesRepository;
        $this->entrypointLookup = $entrypointLookup;
    }

    /**
     * @Route("/", name="home", methods={"GET","POST"})
     */
    public function index(
        SkillsAndFeaturesRepository $skillsAndFeaturesRepository,
        ExperiencesAndEducationsRepository $experiencesAndEducationsRepository,
        PublicationsRepository $publicationsRepository,
        WebSitesRepository $webSitesRepository,
        SocialNetworksRepository $socialNetworksRepository,
        Request $request
    ): Response {
        //Instanciation de Messages, création formulaire de contact
        $message = new Courriels();
        $formContact = $this->createForm(CourrielsType::class, $message);
        $formContact->handleRequest($request);

        //Soumission formulaire réservation/contact
        if ($formContact->isSubmitted() && $formContact->isValid()) {
            $message->setSentAt(new \DateTime('now'));

            //Enregistrement du message en bdd
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($message);
            $entityManager->flush();

            //Expedition du message
            $this->sendEmails($message);

            //Envoi d'un message utilisateur
            $this->addFlash('success', 'Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.');

            return $this->redirectToRoute('home');
        } elseif ($formContact->isSubmitted() && !$formContact->isValid()) {
            //Envoi d'un message utilisateur
            $this->addFlash('fail', 'Votre message n\'a pas pu être envoyé. Formulaire incomplet ou invalide.');

            return $this->redirectToRoute('home');
        }

        $user = $this->userRepository->findOneBy(['firstname' => 'Stéphane', 'lastname' => 'Derom']);
        $photo = $this->userImagesRepository->findAll()[0];

        return $this->render('home/index.html.twig', [
            'skillsAndFeatures' => $skillsAndFeaturesRepository->findAll(),
            'experiencesAndEducations' => $experiencesAndEducationsRepository->findAll(),
            'publications' => $publicationsRepository->findAll(),
            'websites' => $webSitesRepository->findAll(),
            'socialNetworks' => $socialNetworksRepository->findAll(),
            'me' => $user->getFirstname().' '.$user->getLastname(),
            'Adress' => $user->getLocation(),
            'Email' => $user->getEmail(),
            'occupation' => $user->getOccupation(),
            'photo' => $photo->getName(),
            'photoAlt' => $photo->getAlt(),
            'age' => date_diff(new \DateTime('now'), $user->getBornAt())->format('%Y'),
            'content' => $user->getContent(),
            'form' => $formContact->createView(),
        ]);
    }

    private function sendEmails(Courriels $courriel): void
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

        // $this->mailer->send($email);

        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
        }
    }

    /**
     * @Route("/calculator", name="calculator", methods={"GET"})
     */
    public function calculator(): Response
    {
        return $this->render('home/lacalculatrice.html.twig');
    }

    /**
     * @Route("/download/cv", name="download_cv", methods={"GET"})
     */
    public function cvDownload(
        SkillsAndFeaturesRepository $skillsAndFeaturesRepository,
        ExperiencesAndEducationsRepository $experiencesAndEducationsRepository,
        WebSitesRepository $webSitesRepository,
        SocialNetworksRepository $socialNetworksRepository
    ) {
        $userImage = $this->userImagesRepository->findAll()[0];

        $path = 'images/'.str_replace('webp', 'jpg', $userImage->getName());
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $photo = 'data:image/'.$type.';base64,'.base64_encode($data);

        $user = $this->userRepository->findOneBy(['firstname' => 'Stéphane', 'lastname' => 'Derom']);

        $data = [
            'skillsAndFeatures' => $skillsAndFeaturesRepository->findAll(),
            'experiencesAndEducations' => $experiencesAndEducationsRepository->findAll(),
            'websites' => $webSitesRepository->findAll(),
            'socialNetworks' => $socialNetworksRepository->findAll(),
            'me' => $user->getFirstname().' '.$user->getLastname(),
            'Adress' => $user->getLocation(),
            'Email' => $user->getEmail(),
            'Phone' => $user->getPhone(),
            'occupation' => $user->getOccupation(),
            'photo' => $photo,
            'photoAlt' => $userImage->getAlt(),
            'age' => date_diff(new \DateTime('now'), $user->getBornAt())->format('%Y'),
            'content' => $user->getContent(),
        ];

        // Retrieve the HTML generated in our twig file
        $html = $this->renderView('home/cv.html.twig', $data);

        $defaultConfig = (new ConfigVariables())->getDefaults();
        $fontDirs = $defaultConfig['fontDir'];

        $defaultFontConfig = (new FontVariables())->getDefaults();
        $fontData = $defaultFontConfig['fontdata'];

        $mpdf = new Mpdf([
            'fontDir' => array_merge($fontDirs, [
                dirname(__DIR__, 2).'/assets/css/',
            ]),
            'fontdata' => $fontData + [
                'fontawesome' => [
                    'R' => 'fontawesome-webfont.ttf',
                ],
            ],
            'margin_top' => 5,
            'margin_left' => 5,
            'margin_right' => 2,
            'mirrorMargins' => true,
        ]);
        $mpdf->allow_charset_conversion = true;
        foreach ($this->entrypointLookup->getCssFiles('pdf') as $value) {
            $stylesheet = file_get_contents('../public/'.$value);
            $mpdf->WriteHTML($stylesheet, HTMLParserMode::HEADER_CSS);
        }

        $mpdf->WriteHTML($html, HTMLParserMode::DEFAULT_MODE);

        $filename = 'CV_'.$user->getOccupation().'_'.$user->getLastname().'_'.$user->getFirstname().'.pdf';
        $filename = str_replace('/', ' ', $filename);
        $mpdf->Output($filename, '');

        return new BinaryFileResponse($filename);
    }
}
