<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TrackingsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TrackingsRepository::class)]
#[ApiResource]
class Trackings
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $user_id = null;

    #[ORM\Column]
    private ?int $game_id = null;

    #[ORM\Column(type: Types::OBJECT, nullable: true)]
    private ?object $record = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(int $user_id): static
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getGameId(): ?int
    {
        return $this->game_id;
    }

    public function setGameId(int $game_id): static
    {
        $this->game_id = $game_id;

        return $this;
    }

    public function getRecord(): ?object
    {
        return $this->record;
    }

    public function setRecord(?object $record): static
    {
        $this->record = $record;

        return $this;
    }
}
