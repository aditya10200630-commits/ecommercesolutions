import { Phone, Mail, Globe, MapPin, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 96850 65927', href: 'tel:+919685065927' },
  { icon: Mail, label: 'Email', value: 'ecommercesolution.co.in@gmail.com', href: 'mailto:ecommercesolution.co.in@gmail.com' },
  { icon: Globe, label: 'Website', value: 'www.ecommercesolution.co.in', href: 'https://ecommercesolution.co.in' },
  { icon: MapPin, label: 'Coverage', value: 'Pan-India Service Coverage', href: '#locations' },
];

export default function Contact() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" ref={ref} className="section-padding bg-gray-50 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Contact
          </span>
          <h2
            className={`section-title mb-4 transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Contact <span className="gradient-text">Information</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Company Details</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                      <info.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">{info.label}</p>
                      <p className="text-gray-900 font-medium group-hover:text-brand-600 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <button
                onClick={() => {
                  const msg = encodeURIComponent('Hi! I am interested in your Amazon & JioMart seller services. Please provide more details.');
                  window.open(`https://wa.me/919685065927?text=${msg}`, '_blank');
                }}
                className="mt-8 w-full py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </button>
            </div>
          </div>

          {/* CTA Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="h-full rounded-2xl overflow-hidden gradient-bg p-8 md:p-10 flex flex-col justify-between shadow-xl relative">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-500/20 rounded-full blur-2xl" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Grow?</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Let's scale your brand on Amazon & JioMart marketplaces in India. Get dedicated support and proven strategies for marketplace success.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Amazon Account Management',
                    'JioMart Seller Services',
                    'Product Listing Optimization',
                    'Brand Store Setup',
                    'PPC Campaign Management',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-300 rounded-full" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                <button
                  onClick={() => {
                    const msg = encodeURIComponent('Hi! I am interested in your Amazon & JioMart seller services. Please provide more details.');
                    window.open(`https://wa.me/919685065927?text=${msg}`, '_blank');
                  }}
                  className="w-full py-3.5 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Start Your Journey
                </button>
                <a
                  href="mailto:ecommercesolution.co.in@gmail.com"
                  className="w-full py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
