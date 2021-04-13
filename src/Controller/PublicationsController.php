<?php

namespace App\Controller;

use App\Entity\Publications;
use App\Form\PublicationsType;
use App\Repository\PublicationsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/publications")
 */
class PublicationsController extends AbstractController
{
    /**
     * @Route("/", name="publications_index", methods={"GET"})
     */
    public function index(PublicationsRepository $publicationsRepository): Response
    {
        return $this->render('publications/index.html.twig', [
            'publications' => $publicationsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="publications_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $publication = new Publications();
        $form = $this->createForm(PublicationsType::class, $publication);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $publication->setUpdatedAt(new \DateTime('now'));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($publication);
            $entityManager->flush();

            return $this->redirectToRoute('publications_index');
        }

        return $this->render('publications/new.html.twig', [
            'publication' => $publication,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="publications_show", methods={"GET"})
     */
    public function show(Publications $publication): Response
    {
        return $this->render('publications/show.html.twig', [
            'publication' => $publication,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="publications_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Publications $publication, Filesystem $filesystem): Response
    {
        //Récupération des noms de fichiers images pour suppression ultérieure des miniatures
        $oldImage = $publication->getImage();

        $form = $this->createForm(PublicationsType::class, $publication);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // $authors = $form->getData()->getAuthors()->toArray();

            // foreach ($authors as $value) {
            //     $form->getData()->getAuthors()->removeElement($value);
            // }

            $publication->setUpdatedAt(new \DateTime('now'));
            
            $this->getDoctrine()->getManager()->flush();

            // foreach ($authors as $value) {
            //     $publication->addAuthor($value);
            //     $entityManager = $this->getDoctrine()->getManager();
            //     $entityManager->persist($publication);
            //     $entityManager->flush();
            // }

            $miniature = '../public/media/cache/miniatures/images/' . $oldImage;
            //On supprime la miniature correspondante à l'image
            if ($filesystem->exists($miniature)) {
                //Alors on supprime la miniature correspondante
                $filesystem->remove($miniature);
            }

            return $this->redirectToRoute('publications_index');
        }

        return $this->render('publications/edit.html.twig', [
            'publication' => $publication,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="publications_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Publications $publication): Response
    {
        if ($this->isCsrfTokenValid('delete'.$publication->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($publication);
            $entityManager->flush();
        }

        return $this->redirectToRoute('publications_index');
    }
}
