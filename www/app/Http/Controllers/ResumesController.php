<?php

namespace App\Http\Controllers;

use App\Models\Resumes;
use App\Helpers\PDFHelper;
use App\Helpers\TemplateHelper;
use App\Http\Requests\Resumes\ResumesStoreRequest;
use App\Http\Responses\CreatedResponse;
use App\Repositories\ResumesRepository;

use Illuminate\Http\Request;

class ResumesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PDFHelper $pdfHelper, TemplateHelper $templateHelper, ResumesRepository $resumesRepositoty)
    {
        $this->pdfHelper = $pdfHelper;
        $this->templateHelper = $templateHelper;
        $this->resumesRepositoty =  $resumesRepositoty;
    }

    /**
     * Display a listing of the resumes.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Resumes::select(['id', 'title', 'description', 'image'])->paginate();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ResumesStoreRequest $request)
    {
        $this->resumesRepositoty->store(array_merge($request->all(), [
            "template_path" => $this->templateHelper->storeTemplate($request->template)
        ]));
        return new CreatedResponse();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
