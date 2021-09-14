<?php

namespace App\Services;

use App\Exceptions\Http\NotFoundException;
use Barryvdh\DomPDF\PDF;
use InvalidArgumentException;

class PDFService
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PDF $pdf)
    {
        $this->pdf = $pdf;
    }

    /**
     * Generates PDF file by the given template and data.
     *
     * @param string $template
     * @param array $data
     *
     * @return \Illuminate\Http\Response
     */
    public function generate(string $template, array $data)
    {
        try {
            $this->pdf->loadView($template, $data);
            return $this->pdf->stream();
        } catch (InvalidArgumentException $e) {
            throw new NotFoundException("PDF template wasn't found");
        }
    }
}
