<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class PortfolioController extends Controller
{
    public function show()
    {
        return response()->json([
            'name' => 'Muhammad Raja Kautsar',
            'title' => 'Information Technology Specialist & Full-Stack Developer',
            'bio' => 'Lulusan Sistem Informasi Universitas Gunadarma (IPK 3.71) berpengalaman memimpin pengembangan platform manajemen event berskala nasional berbasis QR Code (5.800+ peserta), integrasi Computer Vision YOLOv8, serta pengembangan aplikasi mobile di Kementerian Luar Negeri RI.',
            'email' => 'rajakautsar@gmail.com',
            'location' => 'Jakarta / Depok, Indonesia',
            'photo' => '/foto.png',
            'education' => [
                'degree' => 'S1 Sistem Informasi',
                'institution' => 'Universitas Gunadarma',
                'period' => 'Sep 2021 – Aug 2025',
                'gpa' => '3.71 / 4.00'
            ],
            'social' => [
                'github' => 'https://github.com/rajakautsar',
                'linkedin' => 'https://www.linkedin.com/in/muhammad-raja-kautsar-69a06534a/',
                'instagram' => 'https://instagram.com/ohinisar',
            ],
            'stats' => [
                ['label' => 'Event Attendees Handled', 'value' => '5,800+'],
                ['label' => 'Gunadarma GPA', 'value' => '3.71'],
                ['label' => 'National Events Support', 'value' => '5+']
            ]
        ]);
    }
}
