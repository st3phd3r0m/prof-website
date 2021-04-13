<?php
namespace App\Twig;

use App\Repository\WebSitesRepository;
use Doctrine\Common\Collections\Criteria;
use Twig\Extension\AbstractExtension;

use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('showNumberOfWebSites', [$this, 'numberOfWebSites']),
        ];
    }

    protected $webSitesRepository;

    public function __construct(WebSitesRepository $webSitesRepository)
    {
        $this->webSitesRepository = $webSitesRepository;
    }

    public function numberOfWebSites()
    {
        return count($this->webSitesRepository->findAll()); 
    }
}