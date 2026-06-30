<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class ExperienceController extends Controller
{
    /**
     * Get all experiences
     */
    public function index()
    {
        $experiences = [
            [
                'id' => 1,
                'period' => '2024 - Present',
                'title' => 'Senior Full-Stack Developer',
                'company' => 'Tech Company',
                'description' => 'Leading development of modern web applications using React and Laravel'
            ],
            [
                'id' => 2,
                'period' => '2022 - 2024',
                'title' => 'Full-Stack Developer',
                'company' => 'Web Agency',
                'description' => 'Built and maintained multiple client projects with focus on performance and UX'
            ],
            [
                'id' => 3,
                'period' => '2021 - 2022',
                'title' => 'Frontend Developer',
                'company' => 'Startup',
                'description' => 'Developed responsive web interfaces and improved user experience'
            ]
        ];

        return response()->json($experiences);
    }
}
