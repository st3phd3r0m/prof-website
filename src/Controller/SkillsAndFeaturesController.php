<?php

namespace App\Controller;

use App\Entity\SkillsAndFeatures;
use App\Form\SkillsAndFeaturesType;
use App\Repository\SkillsAndFeaturesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/skills/and/features")
 */
class SkillsAndFeaturesController extends AbstractController
{
    /**
     * @Route("/", name="skills_and_features_index", methods={"GET"})
     */
    public function index(SkillsAndFeaturesRepository $skillsAndFeaturesRepository): Response
    {
        return $this->render('skills_and_features/index.html.twig', [
            'skills_and_features' => $skillsAndFeaturesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="skills_and_features_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $skillsAndFeature = new SkillsAndFeatures();
        $form = $this->createForm(SkillsAndFeaturesType::class, $skillsAndFeature);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //Récupération des mots-clés en tant que chaine de caractères et séparation en array avec un délimiteur "#"
            $keywords = $form->get("keywords")->getData();
            $keywords = explode("#", $keywords);
            $keywords = array_filter($keywords);
            $skillsAndFeature->setKeywords($keywords);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($skillsAndFeature);
            $entityManager->flush();

            return $this->redirectToRoute('skills_and_features_index');
        }

        return $this->render('skills_and_features/new.html.twig', [
            'skills_and_feature' => $skillsAndFeature,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="skills_and_features_show", methods={"GET"})
     */
    public function show(SkillsAndFeatures $skillsAndFeature): Response
    {
        return $this->render('skills_and_features/show.html.twig', [
            'skills_and_feature' => $skillsAndFeature,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="skills_and_features_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, SkillsAndFeatures $skillsAndFeature): Response
    {
        $form = $this->createForm(SkillsAndFeaturesType::class, $skillsAndFeature);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //Récupération des mots-clés en tant que chaine de caractères et séparation en array avec un délimiteur "#"
            $keywords = $form->get("keywords")->getData();
            $keywords = explode("#", $keywords);
            $keywords = array_filter($keywords);
            $skillsAndFeature->setKeywords($keywords);

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('skills_and_features_index');
        }

        return $this->render('skills_and_features/edit.html.twig', [
            'skills_and_feature' => $skillsAndFeature,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="skills_and_features_delete", methods={"DELETE"})
     */
    public function delete(Request $request, SkillsAndFeatures $skillsAndFeature): Response
    {
        if ($this->isCsrfTokenValid('delete'.$skillsAndFeature->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($skillsAndFeature);
            $entityManager->flush();
        }

        return $this->redirectToRoute('skills_and_features_index');
    }
}
