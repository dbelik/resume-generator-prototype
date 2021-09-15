<?php

namespace App\Repositories;

use App\Repositories\Providers\IEloquentProviderRepository;
use Illuminate\Database\Eloquent\Model;

class BaseRepository implements IEloquentProviderRepository
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $attributes
     *
     * @return Model
     */
    public function store(array $attributes): Model
    {
        return $this->model->create($attributes);
    }

    /**
     * @param int $id
     *
     * @return Model|null
     */
    public function find(int $id): ?Model
    {
        return $this->model->find($id);
    }
}
