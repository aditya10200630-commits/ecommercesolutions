import { MessageCircle, ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: [
    'Amazon Account Management',
    'JioMart Seller Services',
    'Product Listing Optimization',
    'Brand Store Setup',
    'PPC Campaign Management',
  ],
  Locations: [
    'Delhi & Mumbai',
    'Bangalore & Hyderabad',
    'Pune & Chennai',
    'Indore & Ahmedabad',
    'Pan-India Coverage',
  ],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Hi! I am interested in your Amazon & JioMart seller services. Please provide more details.');
    window.open(`https://wa.me/919685065927?text=${msg}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-400 relative">
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg p-1">
                <img src="/Group_2.png" alt="E-commerce Solution logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight leading-tight">
                E-commerce Solution
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner for Amazon and JioMart marketplace success across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Locations</h4>
            <ul className="space-y-2.5">
              {footerLinks.Locations.map((link) => (
                <li key={link}>
                  <a href="#locations" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2.5 text-sm">
              <p>ecommercesolution.co.in@gmail.com</p>
              <p>www.ecommercesolution.co.in</p>
              <p>+91 96850 65927</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} E-commerce Solution. All rights reserved. Empowering Indian sellers on Amazon & JioMart marketplaces.
            </p>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </footer>
  );
}
