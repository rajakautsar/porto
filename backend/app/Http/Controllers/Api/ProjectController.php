<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function index()
    {
        return response()->json([
            [
                'id' => 1,
                'title' => 'BPA Fair 2026 Enterprise Event System',
                'category' => 'Event Management Platform',
                'desc' => 'Sistem registrasi & manajemen peserta skala besar (5.000+ peserta) dilengkapi E-Catalog, Auction System, visitor monitoring real-time, bulk import data, dan export PDF.',
                'technologies' => ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'QR Code API'],
                'image' => '/projects/bpafair.png',
                'demoUrl' => 'https://bpafair.com',
                'githubUrl' => '#'
            ],
            [
                'id' => 2,
                'title' => 'Imlek Nasional 2026 VIP E-Invitation System',
                'category' => 'QR Check-in & Hardware Integration',
                'desc' => 'Sistem e-invitation VIP & VVIP berbasis scanning QR Code, dashboard validasi check-in real-time, dan integrasi otomatis pencetakan ID Card Fargo',
                'technologies' => ['Laravel', 'QR Scanner', 'Hardware Integration', 'MySQL'],
                'image' => '/projects/imleknas.png',
                'demoUrl' => 'https://imleknas.destiket.com/',
                'githubUrl' => '#'
            ],
            [
                'id' => 3,
                'title' => 'Screenverse Digital Platform',
                'category' => 'Full-Stack Web Platform',
                'desc' => 'Pengembangan website platform Screenverse dari tahap perancangan UI/UX, arsitektur database, pembuatan frontend responsif, hingga implementasi backend.',
                'technologies' => ['Laravel', 'JavaScript', 'CSS3', 'MySQL'],
                'image' => '/projects/screenverse.png',
                'demoUrl' => 'https://screenverse.id/',
                'githubUrl' => '#'
            ],
            [
                'id' => 4,
                'title' => 'Kemlu RI Office Management System (OMS)',
                'category' => 'Mobile Application (iOS & Android)',
                'desc' => 'Aplikasi mobile manajemen kantor internal Kementerian Luar Negeri RI dengan fitur Dynamic Menu berbasis role admin dan penyimpanan lokal Hive database.',
                'technologies' => ['Flutter', 'Dart', 'Kotlin', 'Hive DB', 'Android Studio'],
                'image' => '/projects/kemlu_oms.png',
                'demoUrl' => '',
                'githubUrl' => '#'
            ],
            [
                'id' => 5,
                'title' => 'YOLOv8 Visitor Counting & Monitoring',
                'category' => 'Computer Vision & AI',
                'desc' => 'Sistem pemantauan dan analisis jumlah pengunjung real-time berbasis objek deteksi Computer Vision YOLOv8 untuk mendukung operasional event skala besar.',
                'technologies' => ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'Laravel API'],
                'image' => '/projects/yolov8_counting.png',
                'demoUrl' => '',
                'githubUrl' => '#'
            ],
            [
                'id' => 6,
                'title' => 'DXI 2026 Underwater Shootout Portal',
                'category' => 'Specialized Registration & Competition Portal',
                'desc' => 'Portal kompetisi foto bawah air nasional untuk pameran bergengsi Deep and Extreme Indonesia (DXI) 2026. Merancang alur registrasi peserta, form submisi galeri beresolusi tinggi, integrasi sistem pembayaran otomatis, serta dasbor monitoring juri untuk penilaian karya secara real-time.',
                'technologies' => ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'TailwindCSS', 'File Storage API'],
                'image' => '/projects/banner_baru.png',
                'demoUrl' => 'https://underwatershootout.deepextremeindonesia.com/',
                'githubUrl' => '#'
            ]
        ]);
    }
}
