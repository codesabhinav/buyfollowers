<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $value = $this->value;

        if ($this->key === 'logo') {
            $value = getSiteLogo();
        }

        return [
            'id' => $this->id,
            'key' => $this->key,
            'value' => $value,
        ];
    }
}
