<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class PortfolioController extends Controller
{
    /**
     * Get portfolio information
     */
    public function show()
    {
        return response()->json([
            'name' => 'Muhammad Raja Kautsar',
            'title' => 'Full-Stack Developer',
            'bio' => 'Passionate developer with expertise in React, Laravel, and modern web technologies.',
            'email' => 'raja@example.com',
            'location' => 'Depok, West Java, Indonesia',
            'social' => [
                'github' => 'https://github.com/username',
                'linkedin' => 'https://linkedin.com/in/username',
                'instagram' => 'https://instagram.com/username'
            ]
        ]);
    }
}
