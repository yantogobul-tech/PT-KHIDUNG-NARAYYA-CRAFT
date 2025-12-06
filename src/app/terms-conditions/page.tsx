'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, Scale, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsConditions() {
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
            <FileText className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Aturan penggunaan website dan hak kewajiban antara pengguna dan perusahaan
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
                  Selamat datang di website PT KHIDUNG NARAYYA CRAFT. Syarat dan Ketentuan ini mengatur 
                  penggunaan website, layanan, dan produk yang kami sediakan. Dengan mengakses atau menggunakan 
                  website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 text-yellow-500 mr-3" />
                  Definisi
                </h2>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-1">"Perusahaan"</h4>
                    <p className="text-sm text-gray-600">PT KHIDUNG NARAYYA CRAFT, penyedia layanan dan produk</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-1">"Pengguna"</h4>
                    <p className="text-sm text-gray-600">Individu atau entitas yang mengakses atau menggunakan website kami</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-1">"Layanan"</h4>
                    <p className="text-sm text-gray-600">Produk roti, kue, dan layanan terkait yang kami sediakan</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-1">"Website"</h4>
                    <p className="text-sm text-gray-600">Platform online kami di khidungnarayyacraft.com</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-yellow-500 mr-3" />
                  Hak dan Kewajiban Pengguna
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3 text-green-600">Hak Pengguna:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Mengakses informasi produk dan layanan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Melakukan pemesanan produk</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Mendapatkan layanan pelanggan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Memberikan masukan dan testimonial</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3 text-red-600">Kewajiban Pengguna:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Memberikan informasi yang akurat</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Melakukan pembayaran tepat waktu</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Tidak melakukan penyalahgunaan website</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Menghormati hak kekayaan intelektual</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
                  Larangan Penggunaan
                </h2>
                <p className="text-gray-600 mb-4">
                  Pengguna dilarang keras untuk:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Aktivitas Ilegal</h4>
                      <p className="text-sm text-gray-600">Menggunakan website untuk kegiatan yang melanggar hukum</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Pencurian Data</h4>
                      <p className="text-sm text-gray-600">Mencoba mengakses data pengguna lain tanpa izin</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Spam dan Penipuan</h4>
                      <p className="text-sm text-gray-600">Mengirim konten spam atau melakukan penipuan</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Pelanggaran Hak Cipta</h4>
                      <p className="text-sm text-gray-600">Menggunakan konten tanpa izin dari pemilik hak cipta</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Scale className="h-6 w-6 text-yellow-500 mr-3" />
                  Hak dan Kewajiban Perusahaan
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3 text-blue-600">Hak Perusahaan:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Menolak pesanan yang mencurigakan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Mengubah syarat dan ketentuan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Menangguhkan akun pelanggar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Memperbarui harga dan layanan</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3 text-blue-600">Kewajiban Perusahaan:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Menyediakan produk berkualitas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Melindungi data pengguna</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Memberikan layanan pelanggan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Menginformasikan perubahan penting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-yellow-500 mr-3" />
                  Kebijakan Pemesanan dan Pembayaran
                </h2>
                
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Proses Pemesanan</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Pemesanan dapat dilakukan melalui website, telepon, atau langsung</li>
                      <li>• Konfirmasi pemesanan akan dikirim melalui email atau WhatsApp</li>
                      <li>• Perusahaan berhak membatalkan pesanan jika stok tidak tersedia</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Metode Pembayaran</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Transfer bank ke rekening resmi perusahaan</li>
                      <li>• Pembayaran tunai untuk pengambilan langsung</li>
                      <li>• Pembayaran digital (e-wallet) yang tersedia</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Kebijakan Pengembalian</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Pengembalian dana jika produk cacat atau tidak sesuai</li>
                      <li>• Klaim harus diajukan maksimal 24 jam setelah penerimaan</li>
                      <li>• Biaya pengembalian ditanggung perusahaan jika kesalahan dari kami</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kekayaan Intelektual</h2>
                <p className="text-gray-600 mb-4">
                  Semua konten di website ini termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Logo, desain, dan merek dagang PT KHIDUNG NARAYYA CRAFT</li>
                  <li>Foto produk dan konten visual</li>
                  <li>Resep dan formulasi produk</li>
                  <li>Teks, grafik, dan desain website</li>
                  <li>Informasi bisnis dan operasional</li>
                </ul>
                <p className="text-gray-600 mt-4 font-semibold">
                  Dilindungi oleh hukum hak cipta dan tidak dapat digunakan tanpa izin tertulis dari perusahaan.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Batasan Tanggung Jawab</h2>
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-slate-800 mb-2">Perusahaan tidak bertanggung jawab atas:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Kerugian tidak langsung atau konsekuensial</li>
                      <li>• Keterlambatan pengiriman karena faktor eksternal</li>
                      <li>• Gangguan teknis atau maintenance website</li>
                      <li>• Penggunaan website oleh pihak ketiga tidak sah</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Privasi dan Data Pribadi</h2>
                <p className="text-gray-600 mb-4">
                  Perlindungan data pribadi Anda diatur dalam Kebijakan Privasi kami. Dengan menggunakan website ini, 
                  Anda setuju dengan pengumpulan, penggunaan, dan perlindungan data sesuai kebijakan yang berlaku.
                </p>
                <p className="text-gray-600">
                  Kami berkomitmen untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                  <li>Melindungi kerahasiaan data pribadi</li>
                  <li>Tidak menjual data ke pihak ketiga</li>
                  <li>Menggunakan data hanya untuk tujuan yang disepakati</li>
                  <li>Mematuhi regulasi perlindungan data yang berlaku</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-600 mb-4">
                  Perusahaan berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Diinformasikan melalui website</li>
                  <li>Dikirim melalui email untuk pengguna terdaftar</li>
                  <li>Berlaku efektif setelah 7 hari pengumuman</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Pengguna disarankan untuk secara berkala meninjau syarat dan ketentuan ini.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Penyelesaian Sengketa</h2>
                <p className="text-gray-600 mb-4">
                  Segala sengketa yang timbul dari penggunaan website ini akan diselesaikan melalui:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Musyawarah</h4>
                      <p className="text-sm text-gray-600">Upaya damai melalui diskusi dan negosiasi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Mediasi</h4>
                      <p className="text-sm text-gray-600">Melalui mediator netral yang disepakati</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Pengadilan</h4>
                      <p className="text-sm text-gray-600">Pengadilan negeri di Tangerang sebagai yurisdiksi</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kontak Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-semibold text-slate-800 mb-2">PT KHIDUNG NARAYYA CRAFT</p>
                  <p className="text-gray-600">Email: legal@khidungnarayyacraft.com</p>
                  <p className="text-gray-600">Telepon: 0823-8246-6247</p>
                  <p className="text-gray-600">Alamat: Kp Pedurenan RT02 RW 12, Desa/kelurahan Padurenan, 
                  kec. Karang Tengah, Kota Tangerang</p>
                </div>
              </div>

              <div className="text-center pt-8">
                <p className="text-sm text-gray-500">
                  Syarat dan Ketentuan ini berlaku efektif sejak tanggal 1 Januari 2024
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Terakhir diperbarui: 1 Januari 2024
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