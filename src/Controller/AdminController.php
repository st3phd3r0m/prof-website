<?php

namespace App\Controller;

use App\Repository\CourrielsRepository;
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
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;

class AdminController extends AbstractController
{

    private SkillsAndFeaturesRepository $skillsAndFeaturesRepository;
    private ExperiencesAndEducationsRepository $experiencesAndEducationsRepository;
    private WebSitesRepository $webSitesRepository;
    private SocialNetworksRepository $socialNetworksRepository; 
    private UserImagesRepository $userImagesRepository;
    private EntrypointLookupInterface $entrypointLookup;
    private UserRepository $userRepository;

    public function __construct(EntrypointLookupInterface $entrypointLookup, SkillsAndFeaturesRepository $skillsAndFeaturesRepository, ExperiencesAndEducationsRepository $experiencesAndEducationsRepository,
    WebSitesRepository $webSitesRepository, SocialNetworksRepository $socialNetworksRepository, UserImagesRepository $userImagesRepository, UserRepository $userRepository)
    {
        $this->skillsAndFeaturesRepository = $skillsAndFeaturesRepository;
        $this->experiencesAndEducationsRepository = $experiencesAndEducationsRepository;
        $this->webSitesRepository = $webSitesRepository;
        $this->socialNetworksRepository = $socialNetworksRepository; 
        $this->userImagesRepository = $userImagesRepository;
        $this->entrypointLookup = $entrypointLookup;
        $this->userRepository = $userRepository;
    }
    /**
     * @Route("/admin", name="admin")
     */
    public function index(CourrielsRepository $courrielsRepository, PublicationsRepository $publicationsRepository): Response
    {
        return $this->render('admin/index.html.twig', [
            'nbrCourriels' => count($courrielsRepository->findAll()),
            'nbrUsers' => count($this->userRepository->findAll()),
            'nbrSkills' => count($this->skillsAndFeaturesRepository->findAll()),
            'nbrXps' => count($this->experiencesAndEducationsRepository->findAll()),
            'nbrPublications' => count($publicationsRepository->findAll()),
            'nbrWebSites' => count($this->webSitesRepository->findAll()),
            'nbrSocNet' => count($this->socialNetworksRepository->findAll()),
        ]);
    }

    public function makePdf(): void 
    {
        $userImage = $this->userImagesRepository->findAll()[0];

        $path = 'images/'.str_replace('webp', 'jpg', $userImage->getName());
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $photo = 'data:image/'.$type.';base64,'.base64_encode($data);

        $user = $this->userRepository->findOneBy(['firstname' => 'Stéphane', 'lastname' => 'Derom']);

        $data = [
            'skillsAndFeatures' => $this->skillsAndFeaturesRepository->findAll(),
            'experiencesAndEducations' => $this->experiencesAndEducationsRepository->findAll(),
            'websites' => $this->webSitesRepository->findAll(),
            'socialNetworks' => $this->socialNetworksRepository->findAll(),
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
                dirname(__DIR__, 2).'/public/fonts/',
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
    }
}
