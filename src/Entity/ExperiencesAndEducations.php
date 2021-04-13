<?php

namespace App\Entity;

use App\Repository\ExperiencesAndEducationsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ExperiencesAndEducationsRepository::class)
 */
class ExperiencesAndEducations
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $what;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $work_place;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $hyperlink_work_place;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $start_date;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $end_date;

    /**
     * @ORM\Column(type="integer")
     */
    private $position_order;

    /**
     * @ORM\Column(type="integer")
     */
    private $xpOrEducation;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWhat(): ?string
    {
        return $this->what;
    }

    public function setWhat(string $what): self
    {
        $this->what = $what;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getWorkPlace(): ?string
    {
        return $this->work_place;
    }

    public function setWorkPlace(?string $work_place): self
    {
        $this->work_place = $work_place;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getHyperlinkWorkPlace(): ?string
    {
        return $this->hyperlink_work_place;
    }

    public function setHyperlinkWorkPlace(?string $hyperlink_work_place): self
    {
        $this->hyperlink_work_place = $hyperlink_work_place;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->start_date;
    }

    public function setStartDate(?\DateTimeInterface $start_date): self
    {
        $this->start_date = $start_date;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->end_date;
    }

    public function setEndDate(?\DateTimeInterface $end_date): self
    {
        $this->end_date = $end_date;

        return $this;
    }

    public function getPositionOrder(): ?int
    {
        return $this->position_order;
    }

    public function setPositionOrder(int $position_order): self
    {
        $this->position_order = $position_order;

        return $this;
    }

    public function getXpOrEducation(): ?int
    {
        return $this->xpOrEducation;
    }

    public function setXpOrEducation(int $xpOrEducation): self
    {
        $this->xpOrEducation = $xpOrEducation;

        return $this;
    }
}
