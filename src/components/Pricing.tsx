import {
  Package,
  TrendingUp,
  Flame,
  Crown,
  Check,
  Star,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const amazonPlans = [
  {
    name: '1-Month Starter Plan',
    price: '₹4,500',
    desc: 'Perfect for testing our services',
    icon: Package,
    popular: false,
    features: [
      '50 SEO-optimized product listings',
      'Amazon listing optimization',
      'Order & return management',
      'Product image enhancement',
      'Weekly performance reports',
    ],
    cta: 'Get Started',
  },
  {
    name: '3-Month Growth Plan',
    price: '₹13,500',
    desc: 'Best for consistent growth',
    icon: TrendingUp,
    popular: true,
    features: [
      'Everything from 1-Month Plan',
      'Advanced keyword optimization',
      'Inventory management',
      'PPC ad campaigns setup',
      'Account health monitoring',
    ],
    cta: 'Choose Growth Plan',
  },
  {
    name: 'Amazon Growth Combo',
    price: '₹22,500',
    desc: 'Save ₹7,500',
    icon: Flame,
    popular: false,
    badge: 'Best Value',
    features: [
      'All 3-Month Plan services',
      'Amazon Brand Registry support',
      'Brand Store design & setup',
      '10 A+ listings + Enhanced Content',
      'Complete launch strategy',
    ],
    cta: 'Get Combo Deal',
  },
];

function WhatsAppLink(message: string) {
  const msg = encodeURIComponent(message);
  window.open(`https://wa.me/919685065927?text=${msg}`, '_blank');
}

export default function Pricing() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="pricing" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Pricing
          </span>
          <h2
            className={`section-title mb-4 transition-all duration-500 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Amazon Seller <span className="gradient-text">Account Management</span>
          </h2>
          <p
            className={`section-subtitle mx-auto transition-all duration-500 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Choose the perfect plan for your Amazon business growth
          </p>
        </div>

        {/* Amazon Plans */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {amazonPlans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 md:p-8 transition-all duration-500 ${
                plan.popular
                  ? 'bg-brand-600 text-white shadow-2xl shadow-brand-600/30 scale-[1.02] border-2 border-brand-500'
                  : 'bg-white border-2 border-gray-100 hover:border-brand-200'
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isInView ? `${(idx + 2) * 100}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-3.5 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${plan.popular ? 'bg-white/20' : 'bg-brand-50'}`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-brand-600'}`} />
              </div>

              <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className={`text-3xl md:text-4xl font-extrabold mb-1 ${plan.popular ? 'text-white' : 'text-brand-600'}`}>
                {plan.price}
              </div>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-brand-200' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-700'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => WhatsAppLink(`Hi! I am interested in the ${plan.name} at ${plan.price}. Please provide more details.`)}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-brand-700 hover:bg-brand-50 shadow-lg'
                    : 'bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-600/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Premium Account Manager */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="p-8 md:p-10 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="w-6 h-6 text-amber-400" />
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Premium</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Premium Account Manager</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-brand-400">₹11,250</span>
                  <span className="text-white/60 text-lg">/Month</span>
                </div>
                <p className="text-white/60 text-sm mb-6">For sellers aiming at scaling aggressively</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Dedicated 1-on-1 expert support',
                    'Personalized growth strategies',
                    'Daily monitoring & guidance',
                    'Sales & performance tracking',
                    'Custom launch strategies',
                    'Brand growth assistance',
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => WhatsAppLink('Hi! I am interested in the Premium Account Manager at ₹11,250/Month. Please provide more details.')}
                  className="mt-8 px-8 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-500 transition-all shadow-lg shadow-brand-600/30 flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Get Premium Support
                </button>
              </div>

              {/* Special Offer */}
              <div className="p-8 md:p-10 lg:w-80 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-l border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">Special Offer</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Get 3 Months Premium at just</h4>
                <div className="text-5xl font-extrabold text-amber-400 mb-4">₹33,750!</div>
                <p className="text-white/60 text-sm mb-6">
                  Save significantly with our quarterly premium package. All premium features for 3 full months.
                </p>
                <button
                  onClick={() => WhatsAppLink('Hi! I am interested in the 3 Months Premium Special Offer at ₹33,750. Please provide more details.')}
                  className="w-full py-3 bg-amber-500 text-gray-900 font-bold rounded-lg hover:bg-amber-400 transition-all shadow-lg"
                >
                  Claim Special Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
