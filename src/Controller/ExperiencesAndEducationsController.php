<?php

namespace App\Controller;

use App\Entity\ExperiencesAndEducations;
use App\Form\ExperiencesAndEducationsType;
use App\Repository\ExperiencesAndEducationsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/experiences/and/educations")
 */
class ExperiencesAndEducationsController extends AbstractController
{
    /**
     * @Route("/", name="experiences_and_educations_index", methods={"GET"})
     */
    public function index(ExperiencesAndEducationsRepository $experiencesAndEducationsRepository): Response
    {
        return $this->render('experiences_and_educations/index.html.twig', [
            'experiences_and_educations' => $experiencesAndEducationsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="experiences_and_educations_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $experiencesAndEducation = new ExperiencesAndEducations();
        $form = $this->createForm(ExperiencesAndEducationsType::class, $experiencesAndEducation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($experiencesAndEducation);
            $entityManager->flush();

            return $this->redirectToRoute('experiences_and_educations_index');
        }

        return $this->render('experiences_and_educations/new.html.twig', [
            'experiences_and_education' => $experiencesAndEducation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="experiences_and_educations_show", methods={"GET"})
     */
    public function show(ExperiencesAndEducations $experiencesAndEducation): Response
    {
        return $this->render('experiences_and_educations/show.html.twig', [
            'experiences_and_education' => $experiencesAndEducation,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="experiences_and_educations_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ExperiencesAndEducations $experiencesAndEducation): Response
    {
        $form = $this->createForm(ExperiencesAndEducationsType::class, $experiencesAndEducation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('experiences_and_educations_index');
        }

        return $this->render('experiences_and_educations/edit.html.twig', [
            'experiences_and_education' => $experiencesAndEducation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="experiences_and_educations_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ExperiencesAndEducations $experiencesAndEducation): Response
    {
        if ($this->isCsrfTokenValid('delete'.$experiencesAndEducation->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($experiencesAndEducation);
            $entityManager->flush();
        }

        return $this->redirectToRoute('experiences_and_educations_index');
    }
}
