import { ArrowRight, TrendingUp, HeadphonesIcon, MapPin, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { icon: TrendingUp, label: 'Proven ROI', desc: 'Direct sales boost through optimized listings' },
  { icon: HeadphonesIcon, label: 'Expert Support', desc: 'Dedicated account managers for your success' },
  { icon: MapPin, label: 'India Focused', desc: 'Deep understanding of Indian marketplaces' },
  { icon: Globe, label: 'Pan India', desc: 'Serving sellers across all major cities' },
];

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-400/10 rounded-full blur-3xl animate-float-slow animate-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Hero image - decorative e-commerce illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] opacity-10 lg:opacity-15 pointer-events-none hidden md:block">
        <img
          src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-auto rounded-3xl"
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
            <span className="text-white/90 text-sm font-medium">
              Amazon & JioMart E-Commerce Growth Services in India
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Scale Your Business on{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-200 via-blue-100 to-brand-300 bg-clip-text text-transparent">
                Amazon & JioMart
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-500/30 rounded-full blur-sm" />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Empower your brand with ROI-driven strategies, SEO-optimized product listings, and end-to-end account management that deliver measurable results across India.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => scrollTo('#pricing')}
              className="group px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 flex items-center gap-2 text-base"
            >
              Start Growing Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="px-8 py-4 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-base"
            >
              View Our Services
            </button>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-brand-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-sm md:text-base mb-1">{stat.label}</h3>
                <p className="text-white/60 text-xs md:text-sm leading-snug">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
