<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class ExperienceController extends Controller
{
    public function index()
    {
        return response()->json([
            [
                'role' => 'Information Technology Specialist',
                'company' => 'Dyandra Event Solutions',
                'location' => 'Jakarta Pusat (On-site)',
                'period' => 'Nov 2025 - May 2026 (7 mos)',
                'isCurrent' => true,
                'description' => 'Memimpin pengembangan platform manajemen event berskala nasional, sistem registrasi QR Code (5.800+ peserta), monitoring dashboard real-time, serta sistem counting person berbasis Computer Vision YOLOv8.',
                'highlights' => [
                    'Sistem registrasi & manajemen peserta QR Code untuk BPA Fair 2026 (5.000 peserta), Imlek Nasional 2026 (700 peserta), dan Pembekalan PDI Perjuangan (120 peserta).',
                    'Mengembangkan BPA Fair System (Registrasi, E-Catalog, Auction System, Visitor Monitoring, Bulk Import/Export PDF).',
                    'Mengembangkan website Screenverse dari perencanaan UI/UX hingga backend.',
                    'Sistem E-Invitation VIP & VVIP berbasis QR Code & integrasi printer ID Card Fargo DTC1000.',
                    'Tim IT Support di lapangan untuk event nasional: BPA Fair 2026, DXI 2026, Imlek Nasional 2026, Pertamina Employee Gathering.'
                ],
                'technologies' => ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'YOLOv8', 'Computer Vision', 'Hostinger', 'Fargo DTC1000']
            ],
            [
                'role' => 'Mobile App Developer Intern',
                'company' => 'Kementerian Luar Negeri Republik Indonesia (PUSTIK KP)',
                'location' => 'Jakarta (On-site)',
                'period' => 'Apr 2025 - Jul 2025 (4 mos)',
                'isCurrent' => false,
                'description' => 'Pengembangan aplikasi mobile Office Management System (OMS) internal kementerian berbasis Android Native (Kotlin) dan Flutter Multiplatform.',
                'highlights' => [
                    'Mengembangkan aplikasi OMS native dengan Kotlin di Android Studio.',
                    'Migrasi & pengembangan multiplatform menggunakan Flutter & Dart (Android & iOS).',
                    'Implementasi fitur Dynamic Menu role admin tanpa perlu re-compile kode.',
                    'Manajemen penyimpanan offline & integrasi data lokal menggunakan Hive database.'
                ],
                'technologies' => ['Flutter', 'Dart', 'Kotlin', 'Android Studio', 'Hive DB', 'Git', 'UI/UX Design']
            ]
        ]);
    }
}
