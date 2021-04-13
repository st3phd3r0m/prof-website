<?php

namespace App\Controller;

use App\Entity\Courriels;
use App\Form\CourrielsType;
use App\Repository\CourrielsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/courriels")
 */
class CourrielsController extends AbstractController
{
    /**
     * @Route("/", name="courriels_index", methods={"GET"})
     */
    public function index(CourrielsRepository $courrielsRepository): Response
    {
        return $this->render('courriels/index.html.twig', [
            'courriels' => $courrielsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{id}", name="courriels_show", methods={"GET"})
     */
    public function show(Courriels $courriel): Response
    {
        return $this->render('courriels/show.html.twig', [
            'courriel' => $courriel,
        ]);
    }

    /**
     * @Route("/{id}", name="courriels_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Courriels $courriel): Response
    {
        if ($this->isCsrfTokenValid('delete'.$courriel->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($courriel);
            $entityManager->flush();
        }

        return $this->redirectToRoute('courriels_index');
    }
}
