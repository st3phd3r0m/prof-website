<?php

namespace App\Controller;

use App\Entity\WebSites;
use App\Form\WebSitesType;
use App\Repository\WebSitesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/web/sites")
 */
class WebSitesController extends AbstractController
{
    /**
     * @Route("/", name="web_sites_index", methods={"GET"})
     */
    public function index(WebSitesRepository $webSitesRepository): Response
    {
        return $this->render('web_sites/index.html.twig', [
            'web_sites' => $webSitesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="web_sites_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $webSite = new WebSites();
        $form = $this->createForm(WebSitesType::class, $webSite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $webSite->setUpdatedAt(new \DateTime('now'));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($webSite);
            $entityManager->flush();

            return $this->redirectToRoute('web_sites_index');
        }

        return $this->render('web_sites/new.html.twig', [
            'web_site' => $webSite,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="web_sites_show", methods={"GET"})
     */
    public function show(WebSites $webSite): Response
    {
        return $this->render('web_sites/show.html.twig', [
            'web_site' => $webSite,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="web_sites_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, WebSites $webSite, Filesystem $filesystem): Response
    {
        //Récupération des noms de fichiers images pour suppression ultérieure des miniatures
        $oldImage = $webSite->getImage();

        $form = $this->createForm(WebSitesType::class, $webSite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $webSite->setUpdatedAt(new \DateTime('now'));

            $this->getDoctrine()->getManager()->flush();

            $miniature = '../public/media/cache/miniatures/images/'.$oldImage;
            //On supprime la miniature correspondante à l'image
            if ($filesystem->exists($miniature)) {
                //Alors on supprime la miniature correspondante
                $filesystem->remove($miniature);
            }

            return $this->redirectToRoute('web_sites_index');
        }

        return $this->render('web_sites/edit.html.twig', [
            'web_site' => $webSite,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="web_sites_delete", methods={"DELETE"})
     */
    public function delete(Request $request, WebSites $webSite): Response
    {
        if ($this->isCsrfTokenValid('delete'.$webSite->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($webSite);
            $entityManager->flush();
        }

        return $this->redirectToRoute('web_sites_index');
    }
}
