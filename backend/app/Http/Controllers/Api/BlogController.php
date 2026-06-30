<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    public function index()
    {
        return response()->json([
            ['slug' => 'hello-world', 'title' => 'Hello World', 'excerpt' => 'Contoh postingan blog.'],
        ]);
    }

    public function show($slug)
    {
        return response()->json([
            'slug' => $slug,
            'title' => 'Hello World',
            'content' => 'Konten contoh untuk blog.',
        ]);
    }
}
