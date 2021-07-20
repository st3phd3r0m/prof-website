<?php

namespace App\Entity;

use App\Repository\SocialNetworksRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SocialNetworksRepository::class)
 */
class SocialNetworks
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @var string
     */
    private $logo;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $url;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @var int
     */
    private $cv_or_site;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getCvOrSite(): ?int
    {
        return $this->cv_or_site;
    }

    public function setCvOrSite(?int $cv_or_site): self
    {
        $this->cv_or_site = $cv_or_site;

        return $this;
    }
}
