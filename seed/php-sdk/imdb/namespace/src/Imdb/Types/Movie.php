<?php

namespace Fern\Imdb\Types;

use Fern\Core\Json\JsonSerializableType;
use Fern\Core\Json\JsonProperty;

class Movie extends JsonSerializableType
{
    /**
     * @var string $id
     */
    #[JsonProperty('id')]
    public string $id;

    /**
     * @var string $title
     */
    #[JsonProperty('title')]
    public string $title;

    /**
     * @var float $rating The rating scale is one to five stars
     */
    #[JsonProperty('rating')]
    public float $rating;

    /**
     * @param array{
     *   id: string,
     *   title: string,
     *   rating: float,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->id = $values['id'];
        $this->title = $values['title'];
        $this->rating = $values['rating'];
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->toJson();
    }
}
