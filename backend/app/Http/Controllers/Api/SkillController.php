<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class SkillController extends Controller
{
    public function index()
    {
        return response()->json([
            [
                'category' => 'Full-Stack & Web Engineering',
                'description' => 'Pengembangan web dan sistem manajemen event berskala besar.',
                'items' => [
                    ['name' => 'Laravel & PHP', 'level' => 95, 'icon' => 'Server'],
                    ['name' => 'JavaScript (ES6+) & React', 'level' => 90, 'icon' => 'Code2'],
                    ['name' => 'MySQL & Database Architecture', 'level' => 92, 'icon' => 'Database'],
                    ['name' => 'RESTful API & Server Deployment', 'level' => 90, 'icon' => 'Network'],
                ]
            ],
            [
                'category' => 'Mobile Application Development',
                'description' => 'Pengembangan aplikasi mobile native & cross-platform.',
                'items' => [
                    ['name' => 'Flutter & Dart', 'level' => 92, 'icon' => 'Zap'],
                    ['name' => 'Kotlin & Android Studio', 'level' => 88, 'icon' => 'Cpu'],
                    ['name' => 'Hive Local Database & Dynamic UI', 'level' => 90, 'icon' => 'FileCode2'],
                    ['name' => 'Mobile UI/UX Optimization', 'level' => 88, 'icon' => 'Palette'],
                ]
            ],
            [
                'category' => 'AI, Computer Vision & Cloud',
                'description' => 'Teknologi AI cerdas dan infrastruktur cloud modern.',
                'items' => [
                    ['name' => 'YOLOv8 & Computer Vision', 'level' => 88, 'icon' => 'Container'],
                    ['name' => 'AWS Cloud Practitioner Essentials', 'level' => 85, 'icon' => 'Package'],
                    ['name' => 'Microsoft Fabric Data Science', 'level' => 82, 'icon' => 'CheckCircle2'],
                    ['name' => 'Hardware Integration (Fargo Printers)', 'level' => 85, 'icon' => 'GitBranch'],
                ]
            ]
        ]);
    }
}
