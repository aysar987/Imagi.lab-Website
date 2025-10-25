import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      question: 'Apa jasa yang  tawarkan?',
      answer:
        'Kami mengubah ide Anda menjadi karya digital yang menarik dan profesional — mulai dari pembuatan website, desain visual, hingga editing konten untuk kebutuhan bisnis maupun personal.',
    },
    {
      question: 'Berapa lama satu project website dikerjakan?',
      answer:
        'Waktu pengerjaan proyek bervariasi tergantung pada cakupan dan tingkat kompleksitasnya. Sebuah website sederhana biasanya memakan waktu sekitar 4-5 hari, sedangkan aplikasi web yang lebih kompleks dapat memakan waktu 2–3 pekan. Kami akan memberikan jadwal pengerjaan yang lebih detail pada tahap perencanaan.',
    },
    {
      question: 'Bagaimana proses pelayanan nya?',
      answer:
        'Proses pelayanan kami dimulai dari diskusi kebutuhan dan tujuan proyek. Setelah itu, kami membuat konsep dan perencanaan detail, termasuk desain awal dan jadwal pengerjaan. Selama proses berlangsung, kami selalu berkomunikasi secara rutin untuk memastikan hasil sesuai harapan. Setelah proyek selesai, kami juga menyediakan revisi dan dukungan teknis bila diperlukan.',
    },
    {
      question: 'Apakah Anda menyediakan dukungan setelah proyek selesai?',
      answer:
        'Ya, kami menyediakan layanan dukungan dan pemeliharaan berkelanjutan dalam rentang 6 bulan untuk memastikan hasil proyek Anda tetap optimal. Layanan ini mencakup pembaruan sistem, perbaikan bug, penyesuaian desain, serta pengembangan fitur tambahan sesuai kebutuhan Anda',
    },
    {
      question: 'Bagaimana penentuan biaya untuk setiap proyek?',
      answer:
        'Harga proyek kami disesuaikan berdasarkan tingkat kesulitan, kompleksitas, serta kebutuhan spesifik setiap klien. Kami akan memberikan estimasi biaya yang transparan setelah memahami detail proyek dan ruang lingkup pekerjaannya.',
    },
  ];

  const socialLinks = [
  { icon: <Instagram size={24} />, label: 'Instagram', url: 'https://www.instagram.com/imagilab.id/' },
  { icon: <MessageCircle size={24} />, label: 'WhatsApp', url: '#' },
  { icon: <Linkedin size={24} />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/109692058/' },
];

  return (
    <>
      <section id="faq" className="min-h-screen flex items-center justify-center px-6 py-6">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl md:text-6xl mb-16 text-[#40BFE5] text-center" style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}>
            FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="backdrop-blur-md bg-white/5 border border-[#40BFE5]/30 rounded-lg px-6 data-[state=open]:border-[#40BFE5] hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.4)] transition-all"
              >
                <AccordionTrigger className="text-white hover:text-[#40BFE5] text-left hover:drop-shadow-[0_0_8px_rgba(64,191,229,0.6)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-[#40BFE5]" style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}>
            Connect With Us
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="backdrop-blur-md bg-white/5 border border-[#40BFE5]/30 rounded-full p-3 hover:bg-[#40BFE5] hover:text-black text-[#40BFE5] transition-all hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(64,191,229,0.8)]"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2025 Imaji.lab All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
