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
            new TwigFunction('fileGetContents', [$this, 'fileGetContents']),
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

    public function fileGetContents(string $file): string
    {
        return file_get_contents($file);
    }
}
