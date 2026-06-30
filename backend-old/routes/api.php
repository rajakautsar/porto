<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\ContactController;

Route::prefix('api')->group(function () {
    // Public endpoints
    Route::get('/portfolio', [PortfolioController::class, 'show']);
    Route::get('/skills', [SkillController::class, 'index']);
    Route::get('/experience', [ExperienceController::class, 'index']);
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/blog', [BlogController::class, 'index']);
    Route::get('/blog/{slug}', [BlogController::class, 'show']);
    Route::post('/contact', [ContactController::class, 'store']);
});
