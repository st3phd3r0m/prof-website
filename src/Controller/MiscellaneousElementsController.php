<?php

namespace App\Controller;

use App\Entity\MiscellaneousElements;
use App\Form\MiscellaneousElementsType;
use App\Repository\MiscellaneousElementsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/miscellaneous/elements")
 */
class MiscellaneousElementsController extends AbstractController
{
    /**
     * @Route("/", name="miscellaneous_elements_index", methods={"GET"})
     */
    public function index(MiscellaneousElementsRepository $miscellaneousElementsRepository): Response
    {
        return $this->render('miscellaneous_elements/index.html.twig', [
            'miscellaneous_elements' => $miscellaneousElementsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="miscellaneous_elements_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $miscellaneousElement = new MiscellaneousElements();
        $form = $this->createForm(MiscellaneousElementsType::class, $miscellaneousElement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $miscellaneousElement->setUpdateAt(new \DateTime('now'));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($miscellaneousElement);
            $entityManager->flush();

            return $this->redirectToRoute('miscellaneous_elements_index');
        }

        return $this->render('miscellaneous_elements/new.html.twig', [
            'miscellaneous_element' => $miscellaneousElement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="miscellaneous_elements_show", methods={"GET"})
     */
    public function show(MiscellaneousElements $miscellaneousElement): Response
    {
        return $this->render('miscellaneous_elements/show.html.twig', [
            'miscellaneous_element' => $miscellaneousElement,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="miscellaneous_elements_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MiscellaneousElements $miscellaneousElement, Filesystem $filesystem): Response
    {
        //Récupération des noms de fichiers images pour suppression ultérieure des miniatures
        $oldImage = $miscellaneousElement->getImage();

        $form = $this->createForm(MiscellaneousElementsType::class, $miscellaneousElement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $miscellaneousElement->setUpdateAt(new \DateTime('now'));

            $this->getDoctrine()->getManager()->flush();

            $miniature = '../public/media/cache/miniatures/images/'.$oldImage;
            //On supprime la miniature correspondante à l'image
            if ($filesystem->exists($miniature)) {
                //Alors on supprime la miniature correspondante
                $filesystem->remove($miniature);
            }

            return $this->redirectToRoute('miscellaneous_elements_index');
        }

        return $this->render('miscellaneous_elements/edit.html.twig', [
            'miscellaneous_element' => $miscellaneousElement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="miscellaneous_elements_delete", methods={"DELETE"})
     */
    public function delete(Request $request, MiscellaneousElements $miscellaneousElement): Response
    {
        if ($this->isCsrfTokenValid('delete'.$miscellaneousElement->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($miscellaneousElement);
            $entityManager->flush();
        }

        return $this->redirectToRoute('miscellaneous_elements_index');
    }
}
