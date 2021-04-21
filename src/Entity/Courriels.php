<?php

namespace App\Entity;

use App\Repository\CourrielsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CourrielsRepository::class)
 */
class Courriels
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
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $mail_from;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $subject;

    /**
     * @ORM\Column(type="text")
     * @var string
     */
    private $message;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTimeInterface
     */
    private $sent_at;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getMailFrom(): ?string
    {
        return $this->mail_from;
    }

    public function setMailFrom(string $mail_from): self
    {
        $this->mail_from = $mail_from;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getSentAt(): ?\DateTimeInterface
    {
        return $this->sent_at;
    }

    public function setSentAt(\DateTimeInterface $sent_at): self
    {
        $this->sent_at = $sent_at;

        return $this;
    }
}
