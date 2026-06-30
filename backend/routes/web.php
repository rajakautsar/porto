<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\ContactController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/portfolio', [PortfolioController::class, 'show']);
Route::get('/api/skills', [SkillController::class, 'index']);
Route::get('/api/experience', [ExperienceController::class, 'index']);
Route::get('/api/projects', [ProjectController::class, 'index']);
Route::get('/api/blog', [BlogController::class, 'index']);
Route::get('/api/blog/{slug}', [BlogController::class, 'show']);
Route::post('/api/contact', [ContactController::class, 'store']);
