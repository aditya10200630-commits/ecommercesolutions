import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    num: '1',
    title: 'Choose your plan or service',
    desc: 'Select the perfect package for your business needs',
  },
  {
    num: '2',
    title: 'Make payment via secure bank transfer',
    desc: 'Safe and secure payment process',
  },
  {
    num: '3',
    title: 'Onboarding starts within 24 hours',
    desc: 'Get assigned a dedicated account manager immediately',
  },
];

export default function GetStarted() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span
              className={`inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Quick Start Process
            </span>
            <h2
              className={`section-title mb-4 transition-all duration-500 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Get Started in <span className="gradient-text">24 Hours</span>
            </h2>
            <p
              className={`section-subtitle mx-auto transition-all duration-500 delay-200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Simple process to begin your marketplace success journey
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`relative text-center transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: isInView ? `${(idx + 3) * 150}ms` : '0ms' }}
                >
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-600 text-white text-xl font-bold mb-5 shadow-lg shadow-brand-600/30 z-10">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`mt-12 rounded-2xl overflow-hidden transition-all duration-700 delay-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative gradient-bg p-8 md:p-12 text-center">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-400/10 rounded-full blur-2xl" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-brand-200" />
                  <span className="text-brand-200 text-sm font-semibold uppercase tracking-wider">
                    Fast Track Your Success
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
                  Our proven process ensures you start seeing results from day one
                </h3>
                <p className="text-white/70 max-w-xl mx-auto mb-6">
                  With dedicated support and expert guidance, your marketplace journey begins immediately.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent('Hi! I am interested in your Amazon & JioMart seller services. Please provide more details.');
                      window.open(`https://wa.me/919685065927?text=${msg}`, '_blank');
                    }}
                    className="group px-8 py-3.5 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-xl flex items-center gap-2"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Onboarding within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
