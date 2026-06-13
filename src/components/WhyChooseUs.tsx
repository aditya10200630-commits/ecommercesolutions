import { ShieldCheck, BarChart3, Target, HeadphonesIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  {
    icon: Target,
    title: 'India-Focused Expertise',
    desc: 'We know Indian marketplaces, tax & compliance, and consumer trends inside-out.',
    img: 'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: BarChart3,
    title: 'Tailored Growth Plans',
    desc: 'No one-size-fits-all, we build strategies specific to your products and market.',
    img: 'https://images.pexels.com/photos/7682184/pexels-photo-7682184.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Management',
    desc: 'From account setup to brand building & PPC ads, everything handled for you.',
    img: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: HeadphonesIcon,
    title: 'Transparent Reporting',
    desc: 'Weekly reports, clear communication, and dedicated account managers.',
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Why Choose Us
          </span>
          <h2
            className={`section-title mb-4 transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Why Choose <span className="gradient-text">E-commerce Solution?</span>
          </h2>
          <p
            className={`section-subtitle mx-auto transition-all duration-500 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We're your trusted partner for scaling on Amazon India and JioMart Marketplace with proven strategies and dedicated support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-gray-100 card-hover transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? `${(idx + 3) * 100}ms` : '0ms' }}
            >
              {/* Card image header */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <reason.icon className="w-5 h-5 text-brand-600" />
                  </div>
                </div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
