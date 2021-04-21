<?php

namespace App\Entity;

use App\Repository\SkillsAndFeaturesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SkillsAndFeaturesRepository::class)
 */
class SkillsAndFeatures
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
    private $what;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $whatmore;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @var int
     */
    private $rate;

    /**
     * @ORM\Column(type="json", nullable=true)
     * @var array<int, string>
     */
    private $keywords = [];

    /**
     * @ORM\Column(type="integer")
     * @var int
     */
    private $skill_or_feature;

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

    public function getWhatmore(): ?string
    {
        return $this->whatmore;
    }

    public function setWhatmore(?string $whatmore): self
    {
        $this->whatmore = $whatmore;

        return $this;
    }

    public function getRate(): ?int
    {
        return $this->rate;
    }

    public function setRate(?int $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    /**
     * Undocumented function
     *
     * @return array<int, string>|null
     */
    public function getKeywords(): ?array
    {
        return $this->keywords;
    }

    /**
     * Undocumented function
     *
     * @param array<int, string>|null $keywords
     * @return self
     */
    public function setKeywords(?array $keywords): self
    {
        $this->keywords = $keywords;

        return $this;
    }

    public function getSkillOrFeature(): ?int
    {
        return $this->skill_or_feature;
    }

    public function setSkillOrFeature(int $skill_or_feature): self
    {
        $this->skill_or_feature = $skill_or_feature;

        return $this;
    }
}
