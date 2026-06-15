import { useState } from 'react';
import {
  ShoppingBag,
  Package,
  Crown,
  Check,
  ChevronRight,
  Shield,
  Store,
  FileText,
  Star,
  PenTool,
  UserPlus,
  ListChecks,
  Settings,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Service {
  name: string;
  price: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

const amazonServices: Service[] = [
  { name: 'Amazon Brand Registry', price: '₹2,250', description: 'Protect your brand with Amazon Brand Registry services. Enhance product visibility with trademark-backed brand protection.', icon: Shield },
  { name: 'Amazon Brand Store Setup', price: '₹5,250', description: 'Build a professional Amazon Brand Storefront that boosts customer trust. Custom design to maximize brand visibility.', icon: Store },
  { name: 'A+ Listing (10 Listings)', price: '₹4,500', description: 'Optimize listings with Amazon A+ Content for better conversions. Improve SEO ranking with keyword-rich descriptions.', icon: FileText },
  { name: 'Product Ratings (10)', price: '₹2,250', description: 'Boost credibility with genuine Amazon product reviews and ratings. Improve sales performance with positive feedback.', icon: Star },
  { name: 'Premium A+ Content', price: '₹1,125/listing', description: 'Create Premium Amazon A+ Content with engaging visuals and copywriting. SEO-friendly enhanced brand content (EBC).', icon: PenTool },
  { name: 'Account Creation', price: '₹2,250', description: 'Services for new sellers to create an Amazon seller account without any hassle. Verified marketplace account setup.', icon: UserPlus },
  { name: 'Product Listing (50)', price: '₹2,250', description: 'Bulk Amazon product listing services for 50 products with optimized titles. Keyword-optimized eCommerce listings.', icon: ListChecks },
  { name: 'Monthly Handling', price: '₹3,750', description: 'Complete Amazon account management for sellers. End-to-end eCommerce store handling & growth solutions.', icon: Settings },
];

const jioMartServices = [
  { name: 'Account Creation', price: '₹2,250', description: 'Professional setup with GST, PAN & compliance checks', icon: UserPlus },
  { name: 'Product Listing', price: '₹2,250', description: '50 SEO-optimized products with keyword mapping', icon: ListChecks },
  { name: 'Monthly Handling', price: '₹4,500', description: 'Complete account management & support', icon: Crown },
];

function WhatsAppButton(serviceName: string) {
  const msg = encodeURIComponent(`Hi! I am interested in your ${serviceName} service. Please provide more details.`);
  window.open(`https://wa.me/919685065927?text=${msg}`, '_blank');
}

export default function Services() {
  const [showAllServices, setShowAllServices] = useState(false);
  const { ref, isInView } = useInView(0.05);
  const displayedServices = showAllServices ? amazonServices : amazonServices.slice(0, 4);

  return (
    <section id="services" ref={ref} className="section-padding bg-gray-50 relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-brand-50/50 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Services
          </span>
          <h2
            className={`section-title mb-4 transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Comprehensive solutions for{' '}
            <span className="gradient-text">Amazon & JioMart</span>
          </h2>
        </div>

        {/* Amazon Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Amazon Seller Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedServices.map((service, idx) => (
              <div
                key={service.name}
                className={`group relative bg-white rounded-xl p-6 border border-gray-100 card-hover transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? `${(idx + 2) * 80}ms` : '0ms' }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <service.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-bold text-gray-900 leading-snug pr-2">{service.name}</h4>
                  <span className="text-brand-700 font-bold text-sm whitespace-nowrap bg-brand-50 px-2 py-0.5 rounded">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={() => WhatsAppButton(service.name)}
                  className="text-brand-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Get Service <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {!showAllServices && (
            <div className="text-center mt-8">
              <button onClick={() => setShowAllServices(true)} className="btn-secondary">
                View All Amazon Services
              </button>
            </div>
          )}
        </div>

        {/* JioMart Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-green-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">JioMart Seller Services</h3>
            <span className="text-sm text-gray-500 font-medium hidden sm:inline">
              Expand your reach with JioMart marketplace
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {jioMartServices.map((service, idx) => (
              <div
                key={service.name}
                className={`group bg-white rounded-xl p-7 border border-gray-100 card-hover transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? `${(idx + 6) * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h4>
                <p className="text-brand-700 font-bold text-xl mb-2">{service.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={() => WhatsAppButton(`JioMart ${service.name}`)}
                  className="w-full py-2.5 bg-green-50 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
