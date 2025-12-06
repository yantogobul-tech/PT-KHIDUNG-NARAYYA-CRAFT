'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="outline" className="mb-8 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          
          <div className="text-center">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Perlindungan data pengguna adalah prioritas utama kami sesuai standar internasional GDPR
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 mb-8">
            <CardContent className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  PT KHIDUNG NARAYYA CRAFT ("kami") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi 
                  informasi pribadi Anda sesuai dengan Peraturan Perlindungan Data Pribadi dan standar internasional GDPR.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 text-yellow-500 mr-3" />
                  Data yang Kami Kumpulkan
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Data Pribadi yang Anda Berikan:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat pengiriman</li>
                      <li>Informasi pembayaran</li>
                      <li>Pesan dan komunikasi</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Data yang Dikumpulkan Secara Otomatis:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Alamat IP dan lokasi geografis</li>
                      <li>Jenis browser dan perangkat</li>
                      <li>Data penggunaan website</li>
                      <li>Cookie dan teknologi pelacakan</li>
                      <li>Informasi sesi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-yellow-500 mr-3" />
                  Penggunaan Data
                </h2>
                <p className="text-gray-600 mb-4">
                  Kami menggunakan data pribadi Anda untuk tujuan berikut:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-800 mb-2">Layanan Pelanggan</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Memproses pesanan</li>
                      <li>• Memberikan dukungan</li>
                      <li>• Mengirimkan notifikasi</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-800 mb-2">Peningkatan Layanan</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Analisis penggunaan</li>
                      <li>• Pengembangan produk</li>
                      <li>• Penelitian pasar</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-800 mb-2">Komunikasi</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Newsletter</li>
                      <li>• Promosi</li>
                      <li>• Informasi produk</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-800 mb-2">Kepatuhan Hukum</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Verifikasi identitas</li>
                      <li>• Pencegahan penipuan</li>
                      <li>• Kewajiban hukum</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-yellow-500 mr-3" />
                  Keamanan Data
                </h2>
                <p className="text-gray-600 mb-4">
                  Kami menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi data Anda:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Enkripsi Data</h4>
                      <p className="text-gray-600 text-sm">Semua data transaksi dan informasi sensitif dienkripsi dengan SSL/TLS</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Akses Terbatas</h4>
                      <p className="text-gray-600 text-sm">Hanya personel berwenang yang dapat mengakses data pribadi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Audit Keamanan</h4>
                      <p className="text-gray-600 text-sm">Pemeriksaan keamanan rutin untuk mencegah pelanggaran</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Backup Data</h4>
                      <p className="text-gray-600 text-sm">Sistem backup otomatis untuk mencegah kehilangan data</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <UserCheck className="h-6 w-6 text-yellow-500 mr-3" />
                  Hak Anda sebagai Pengguna
                </h2>
                <p className="text-gray-600 mb-4">
                  Sesuai GDPR dan regulasi setempat, Anda memiliki hak-hak berikut:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Hak Akses</h4>
                    <p className="text-sm text-gray-600">Mengakses dan mengetahui data pribadi yang kami simpan</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Hak Koreksi</h4>
                    <p className="text-sm text-gray-600">Memperbaiki data yang tidak akurat atau tidak lengkap</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Hak Penghapusan</h4>
                    <p className="text-sm text-gray-600">Meminta penghapusan data pribadi Anda</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Hak Pembatasan</h4>
                    <p className="text-sm text-gray-600">Membatasi pemrosesan data pribadi Anda</p>
                  </Card>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Globe className="h-6 w-6 text-yellow-500 mr-3" />
                  Transfer Data Internasional
                </h2>
                <p className="text-gray-600 mb-4">
                  Data pribadi Anda dapat ditransfer ke dan diproses di negara lain dengan ketentuan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Transfer dilakukan dengan keamanan yang memadai</li>
                  <li>Negara tujuan memiliki standar perlindungan data yang setara</li>
                  <li>Menggunakan klausa kontrak standar Uni Eropa</li>
                  <li>Memperoleh persetujuan eksplisit dari Anda</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kebijakan Cookie</h2>
                <p className="text-gray-600 mb-4">
                  Kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Cookie Esensial</span>
                    <span className="text-sm text-gray-600">Selalu aktif</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Cookie Analitik</span>
                    <span className="text-sm text-gray-600">Opsional</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Cookie Pemasaran</span>
                    <span className="text-sm text-gray-600">Opsional</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Perubahan Kebijakan</h2>
                <p className="text-gray-600">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan 
                  melalui website atau email Anda. Penggunaan terus menerus website kami setelah perubahan 
                  menunjukkan persetujuan Anda terhadap kebijakan yang diperbarui.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kontak Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                  silakan hubungi kami:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-semibold text-slate-800 mb-2">PT KHIDUNG NARAYYA CRAFT</p>
                  <p className="text-gray-600">Email: privacy@khidungnarayyacraft.com</p>
                  <p className="text-gray-600">Telepon: 0823-8246-6247</p>
                  <p className="text-gray-600">Alamat: Kp Pedurenan RT02 RW 12, Desa/kelurahan Padurenan, 
                  kec. Karang Tengah, Kota Tangerang</p>
                </div>
              </div>

              <div className="text-center pt-8">
                <p className="text-sm text-gray-500">
                  Kebijakan Privasi ini berlaku efektif sejak tanggal 1 Januari 2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 PT KHIDUNG NARAYYA CRAFT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}