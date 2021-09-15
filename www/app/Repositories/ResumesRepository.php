<?php

namespace App\Repositories;

use App\Models\Resumes;

class ResumesRepository extends BaseRepository
{
    /**
     * ResumesRepository constructor.
     *
     * @param Resumes $model
     */
    public function __construct(Resumes $model)
    {
        parent::__construct($model);
    }
}
