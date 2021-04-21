<?php

namespace App\Twig;

use App\Repository\WebSitesRepository;
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

    protected WebSitesRepository $webSitesRepository;

    public function __construct(WebSitesRepository $webSitesRepository)
    {
        $this->webSitesRepository = $webSitesRepository;
    }

    public function numberOfWebSites(): int
    {
        return count($this->webSitesRepository->findAll());
    }
}
