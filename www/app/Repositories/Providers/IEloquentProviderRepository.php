<?php

namespace App\Repositories\Providers;

use Illuminate\Database\Eloquent\Model;

interface IEloquentProviderRepository
{
    /**
     * @param array $attributes
     * @return Model
     */
    public function store(array $attributes): Model;

    /**
     * @param $id
     * @return Model
     */
    public function find(int $id): ?Model;
}
