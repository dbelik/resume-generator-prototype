<?php

namespace App\Http\Controllers;

use App\Helpers\PDFHelper;
use App\Repositories\ResumesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ResumesGenerateController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PDFHelper $pdfHelper, ResumesRepository $resumesRepository)
    {
        $this->pdfHelper = $pdfHelper;
        $this->resumesRepository = $resumesRepository;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $resume = $this->resumesRepository->find($request->id);
        return $this->pdfHelper->generate($resume->template_path, $request->all());
    }
}
