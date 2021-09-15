<?php

use App\Http\Controllers\ResumesController;
use App\Http\Controllers\ResumesGenerateController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(["prefix" => "/resumes"], function () {
    Route::get("/", [ResumesController::class, "index"]);
    Route::post("/", [ResumesController::class, "store"]);

    Route::post("/generate/{id}", [ResumesGenerateController::class, "store"]);
});
