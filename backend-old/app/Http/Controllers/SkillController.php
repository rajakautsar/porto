<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class SkillController extends Controller
{
    /**
     * Get all skills
     */
    public function index()
    {
        $skills = [
            [
                'id' => 1,
                'name' => 'React',
                'category' => 'Frontend',
                'level' => 90
            ],
            [
                'id' => 2,
                'name' => 'TypeScript',
                'category' => 'Frontend',
                'level' => 85
            ],
            [
                'id' => 3,
                'name' => 'Tailwind CSS',
                'category' => 'Frontend',
                'level' => 90
            ],
            [
                'id' => 4,
                'name' => 'Laravel',
                'category' => 'Backend',
                'level' => 90
            ],
            [
                'id' => 5,
                'name' => 'PHP',
                'category' => 'Backend',
                'level' => 88
            ],
            [
                'id' => 6,
                'name' => 'MySQL',
                'category' => 'Backend',
                'level' => 85
            ]
        ];

        return response()->json($skills);
    }
}
