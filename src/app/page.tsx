'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  Users, 
  ChefHat,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Target,
  Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src="/company-logo.png"
                alt="PT KHIDUNG NARAYYA CRAFT Logo"
                className="h-10 w-10 object-contain"
              />
              <div className="text-white font-bold text-xl">
                PT KHIDUNG NARAYYA CRAFT
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About Us</a>
              <a href="#services" className="text-white hover:text-yellow-400 transition-colors">Services</a>
              <a href="#portfolio" className="text-white hover:text-yellow-400 transition-colors">Portfolio</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            PT KHIDUNG NARAYYA CRAFT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-yellow-300"
          >
            Produsen Roti dan Kue Terpercaya dengan Kualitas Premium
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-12 text-gray-200"
          >
            Menghadirkan produk yang dibuat dengan bahan baku pilihan, proses produksi yang higienis, 
            serta standar kualitas yang konsisten untuk memenuhi kebutuhan konsumen, toko, kafe, 
            hingga mitra bisnis
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan yang bergerak di bidang industri pengolahan makanan dengan komitmen terhadap kualitas dan kepuasan pelanggan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Visi Kami</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Menjadi produsen roti dan kue terpercaya yang mampu bersaing di pasar modern dengan 
                mengutamakan rasa, tekstur, dan tampilan produk yang sempurna.
              </p>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-6 mt-8">Misi Kami</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Menyediakan produk roti dan kue berkualitas tinggi dengan bahan baku pilihan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Menerapkan standar kebersihan dan keamanan pangan yang ketat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Berinovasi dalam pengembangan varian produk yang lezat dan fresh</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Membangun kemitraan jangka panjang dengan konsumen dan bisnis</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Sertifikasi</h4>
                <p className="text-gray-600 text-sm">Standar kualitas dan keamanan pangan terjamin</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Tenaga Profesional</h4>
                <p className="text-gray-600 text-sm">Tim ahli berpengalaman di industri bakery</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <ChefHat className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Resep Premium</h4>
                <p className="text-gray-600 text-sm">Formulasi rasa yang telah teruji dan disukai</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Legalitas Lengkap</h4>
                <p className="text-gray-600 text-sm">Perusahaan resmi dengan izin usaha lengkap</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami menjadi produsen roti dan kue terpercaya yang mampu bersaing di pasar modern
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <Target className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Produksi Roti dan Kue Berkualitas</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Didukung oleh tenaga profesional dan fasilitas produksi yang memadai, kami terus berinovasi 
                  menciptakan varian produk yang lezat, fresh, dan aman dikonsumsi. Setiap produk dibuat dengan 
                  bahan baku pilihan, proses produksi yang higienis, serta standar kualitas yang konsisten.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Dibuat dengan Cinta</h4>
                    <p className="text-gray-600 text-sm mt-1">Setiap produk dibuat dengan passion dan perhatian detail</p>
                  </div>
                  <div className="text-center">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Kualitas Premium</h4>
                    <p className="text-gray-600 text-sm mt-1">Hanya menggunakan bahan berkualitas tinggi</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Fresh Setiap Saat</h4>
                    <p className="text-gray-600 text-sm mt-1">Produksi harian untuk kesegaran maksimal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Portfolio Produk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koleksi produk unggulan kami yang telah memenuhi standar kualitas tertinggi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Roti Manis Premium",
                description: "Roti dengan tekstur lembut dan rasa manis yang sempurna, ideal untuk sarapan dan camilan",
                category: "Roti",
                icon: "🍞"
              },
              {
                title: "Kue Tradisional Modern",
                description: "Perpaduan resep tradisional dengan sentuhan modern yang menghasilkan cita rasa istimewa",
                category: "Kue",
                icon: "🧁"
              },
              {
                title: "Pastry International",
                description: "Berbagai jenis pastry khas internasional dengan kualitas bintang lima",
                category: "Pastry",
                icon: "🥐"
              },
              {
                title: "Cake Kustom",
                description: "Kue ulang tahun dan acara spesial dengan desain kustom sesuai permintaan",
                category: "Cake",
                icon: "🎂"
              },
              {
                title: "Roti Gandum Sehat",
                description: "Pilihan roti sehat dengan gandum pilihan untuk gaya hidup seimbang",
                category: "Healthy",
                icon: "🌾"
              },
              {
                title: "Paket Bisnis",
                description: "Paket khusus untuk supply toko, kafe, dan mitra bisnis dengan harga kompetitif",
                category: "B2B",
                icon: "📦"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-yellow-100 text-yellow-800">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap melayani kebutuhan roti dan kue berkualitas untuk Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telepon
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xx-xxxx-xxxx"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tuliskan pesan Anda..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Alamat</h4>
                      <p className="text-gray-600">
                        Kp Pedurenan RT02 RW 12, Desa/kelurahan Padurenan, 
                        kec. Karang Tengah, Kota Tangerang
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Telepon</h4>
                      <p className="text-gray-600">0823-8246-6247</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-gray-600">info@khidungnarayyacraft.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Senin - Sabtu: 06:00 - 20:00<br />
                        Minggu: 07:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                <h3 className="text-xl font-bold mb-4">Mitra Bisnis</h3>
                <p className="text-gray-200 mb-4">
                  Kami membuka peluang kemitraan untuk toko, kafe, dan bisnis lainnya yang membutuhkan 
                  supply roti dan kue berkualitas dengan harga kompetitif.
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
                  Menjadi Mitra
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">PT KHIDUNG NARAYYA CRAFT</h3>
              <p className="text-gray-300">
                Produsen roti dan kue terpercaya dengan kualitas premium untuk memenuhi kebutuhan Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Follow Us</h4>
              <div className="flex space-x-4">
                <Globe className="h-6 w-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer" />
                <Mail className="h-6 w-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer" />
                <Phone className="h-6 w-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img
                src="/company-logo.png"
                alt="PT KHIDUNG NARAYYA CRAFT Logo"
                className="h-8 w-8 object-contain"
              />
              <p>&copy; 2024 PT KHIDUNG NARAYYA CRAFT. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}