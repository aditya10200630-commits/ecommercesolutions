import { MapPin, Globe, Building2, Store, Truck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const cities = [
  'Delhi & Mumbai', 'Bangalore & Hyderabad', 'Pune & Chennai', 'Indore & Ahmedabad',
  'Kolkata & Jaipur', 'Lucknow & Bhopal', 'Chandigarh & Kochi', 'Coimbatore & Nagpur',
];

const businessTypes = [
  { icon: Building2, name: 'D2C Brands', desc: 'Direct-to-consumer brands looking to expand their marketplace presence' },
  { icon: Store, name: 'Retailers', desc: 'Traditional retailers moving online to reach wider audiences' },
  { icon: Truck, name: 'Manufacturers', desc: 'Manufacturers seeking direct-to-consumer channels via marketplaces' },
];

export default function Locations() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="locations" ref={ref} className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Service Locations
          </span>
          <h2
            className={`section-title mb-4 transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We proudly serve sellers <span className="gradient-text">across India</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Cities Grid */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-600" />
              Major Cities We Serve
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cities.map((city, idx) => (
                <div
                  key={city}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: isInView ? `${idx * 50}ms` : '0ms' }}
                >
                  <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{city}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-brand-600 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <Globe className="w-5 h-5" />
                <span className="font-bold">Complete Pan-India Coverage</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed relative z-10">
                Amazon & JioMart seller services available across all states and union territories of India
              </p>
            </div>
          </div>

          {/* Who We Serve */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-brand-600" />
              Who We Serve
            </h3>
            <p className="text-gray-600 mb-6">Specialized services for your business type</p>
            <div className="space-y-4">
              {businessTypes.map((type) => (
                <div
                  key={type.name}
                  className="group p-5 bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                      <type.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{type.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual - India coverage */}
            <div className="mt-6 rounded-xl overflow-hidden border border-gray-100">
              <img
                src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="India marketplace growth"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
