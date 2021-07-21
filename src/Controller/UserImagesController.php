<?php

namespace App\Controller;

use App\Entity\UserImages;
use App\Form\UserImagesType;
use App\Repository\UserImagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/userImages")
 */
class UserImagesController extends AbstractController
{
    /**
     * @Route("/", name="user_images_index", methods={"GET"})
     */
    public function index(UserImagesRepository $userImagesRepository): Response
    {
        return $this->render('user_images/index.html.twig', [
            'user_images' => $userImagesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="user_images_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $userImage = new UserImages();
        $form = $this->createForm(UserImagesType::class, $userImage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userImage->getUpdatedAt(new \DateTime('now'));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($userImage);
            $entityManager->flush();

            $image = imagecreatefromwebp('images/'.$userImage->getName());
            imagejpeg($image, 'images/'.str_replace('webp','jpg', $userImage->getName()), 100);

            return $this->redirectToRoute('user_images_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user_images/new.html.twig', [
            'user_image' => $userImage,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_images_show", methods={"GET"})
     */
    public function show(UserImages $userImage): Response
    {
        return $this->render('user_images/show.html.twig', [
            'user_image' => $userImage,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="user_images_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, UserImages $userImage, Filesystem $filesystem): Response
    {
        // Récupération des noms de fichiers images pour suppression ultérieure des miniatures
        $oldImage = $userImage->getName();

        $form = $this->createForm(UserImagesType::class, $userImage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userImage->getUpdatedAt(new \DateTime('now'));


            $this->getDoctrine()->getManager()->flush();

            $image = imagecreatefromwebp('images/'.$userImage->getName());
            imagejpeg($image, 'images/'.str_replace('webp','jpg', $userImage->getName()), 100);

            $oldImage = '../public/images/'.str_replace('webp','jpg', $oldImage);

            //On supprime la miniature correspondante à l'image
            if ($filesystem->exists($oldImage)) {
                //Alors on supprime la miniature correspondante
                $filesystem->remove($oldImage);
            }

            //On supprime la miniature correspondante à l'image
            if ($filesystem->exists('../public/media/cache')) {
                //Alors on supprime la miniature correspondante
                $filesystem->remove('../public/media/cache');
            }

            return $this->redirectToRoute('user_images_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user_images/edit.html.twig', [
            'user_image' => $userImage,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_images_delete", methods={"POST"})
     */
    public function delete(Request $request, UserImages $userImage, Filesystem $filesystem): Response
    {
        if ($this->isCsrfTokenValid('delete'.$userImage->getId(), $request->request->get('_token'))) {

            $oldImage = '../public/images/'.str_replace('webp','jpg', $userImage->getName());

            //On supprime la miniature correspondante à l'image
            if ($filesystem->exists($oldImage)) {
                //Alors on supprime la miniature correspondante
                $filesystem->remove($oldImage);
            }

            //On supprime la miniature correspondante à l'image
            if ($filesystem->exists('../public/media/cache')) {
                //Alors on supprime la miniature correspondante
                $filesystem->remove('../public/media/cache');
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($userImage);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_images_index', [], Response::HTTP_SEE_OTHER);
    }
}
