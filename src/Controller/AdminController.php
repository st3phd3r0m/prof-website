<?php

namespace App\Controller;

use App\Repository\CourrielsRepository;
use App\Repository\ExperiencesAndEducationsRepository;
use App\Repository\PublicationsRepository;
use App\Repository\SkillsAndFeaturesRepository;
use App\Repository\SocialNetworksRepository;
use App\Repository\UserRepository;
use App\Repository\WebSitesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(CourrielsRepository $courrielsRepository, UserRepository $userRepository, SkillsAndFeaturesRepository $skillsAndFeaturesRepository, ExperiencesAndEducationsRepository $experiencesAndEducationsRepository, PublicationsRepository $publicationsRepository, WebSitesRepository $webSitesRepository, SocialNetworksRepository $socialNetworksRepository)
    {
        return $this->render('admin/index.html.twig', [
            'nbrCourriels' => count($courrielsRepository->findAll()),
            'nbrUsers' => count($userRepository->findAll()),
            'nbrSkills' => count($skillsAndFeaturesRepository->findAll()),
            'nbrXps' => count($experiencesAndEducationsRepository->findAll()),
            'nbrPublications' => count($publicationsRepository->findAll()),
            'nbrWebSites' => count($webSitesRepository->findAll()),
            'nbrSocNet' => count($socialNetworksRepository->findAll()),
        ]);
    }
}
