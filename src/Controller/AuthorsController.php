<?php

namespace App\Controller;

use App\Entity\Authors;
use App\Form\AuthorsType;
use App\Repository\AuthorsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/authors")
 */
class AuthorsController extends AbstractController
{
    /**
     * @Route("/", name="authors_index", methods={"GET"})
     */
    public function index(AuthorsRepository $authorsRepository): Response
    {
        return $this->render('authors/index.html.twig', [
            'authors' => $authorsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="authors_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $author = new Authors();
        $form = $this->createForm(AuthorsType::class, $author);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($author);
            $entityManager->flush();

            return $this->redirectToRoute('authors_index');
        }

        return $this->render('authors/new.html.twig', [
            'author' => $author,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="authors_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Authors $author): Response
    {
        $form = $this->createForm(AuthorsType::class, $author);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('authors_index');
        }

        return $this->render('authors/edit.html.twig', [
            'author' => $author,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="authors_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Authors $author): Response
    {
        if ($this->isCsrfTokenValid('delete'.$author->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($author);
            $entityManager->flush();
        }

        return $this->redirectToRoute('authors_index');
    }
}
