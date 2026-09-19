import React from 'react';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../i18n/translations';

export const HeroBanner: React.FC = () => {
  const { language, toggleSpecialOffer, setSortBy } = useStore();
  const t = TRANSLATIONS[language];

  const handleShopNewArrivals = () => {
    toggleSpecialOffer('newArrival');
    setSortBy('newest');
    const element = document.getElementById('products-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
      <div 
        id="hero-banner"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1c1d22] via-[#2a2725] to-[#1e1c1b] text-white shadow-xl min-h-[300px] sm:min-h-[340px] flex flex-col justify-between p-6 sm:p-10"
      >
        {/* Subtle background ambient glow and textures */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-orange-400 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'نسل جدید تلفن‌های همراه ۲۰۲۶' : 'Next-Gen Mobile Generation 2026'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.25] text-white">
              {language === 'fa' 
                ? 'موبی‌تک دایرکت: مرجع تخصصی گوشی‌های پرچمدار' 
                : 'MobiTech Direct: Your Hub for Flagship Phones'}
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed">
              {language === 'fa'
                ? 'تجربه اوج مهندسی موبایل با فریم‌های تیتانیومی، دوربین‌های پریسکوپی و تراشه‌های ۳ نانومتری خارق‌العاده. کاملاً آنلاک، با اصالت ۱۰۰٪ تضمین‌شده و ۲ سال گارانتی شرکتی.'
                : 'Experience the latest Titanium designs, periscope zoom cameras, and lightning-fast processors. Unlocked, certified authentic, and backed by a comprehensive 2-year warranty.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-shop-arrivals-btn"
                onClick={handleShopNewArrivals}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-lg shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
              >
                <span>{language === 'fa' ? 'خرید جدیدترین پرچمداران' : 'Shop New Arrivals'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('products-grid-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-semibold text-gray-300 hover:text-white px-4 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-colors cursor-pointer"
              >
                {language === 'fa' ? 'مشاهده تمام مدل‌ها' : 'Browse All Models'}
              </button>
            </div>
          </div>

          {/* Right Image Showcase with Flagship Devices */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md h-56 sm:h-64 flex items-center justify-center">
              {/* iPhone preview mockup */}
              <div className="absolute left-4 sm:left-6 w-36 sm:w-44 h-52 sm:h-60 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#3c3935] -rotate-6 transform hover:rotate-0 transition-transform duration-500 bg-gray-900 z-10">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80"
                  alt="iPhone 15 Pro Titanium"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md text-[10px] text-center font-bold py-1 rounded-md text-white">
                  {language === 'fa' ? 'آیفون ۱۵ پرو تیتانیوم' : 'iPhone 15 Pro'}
                </div>
              </div>

              {/* Samsung preview mockup */}
              <div className="absolute right-4 sm:right-6 w-36 sm:w-44 h-52 sm:h-60 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#4a4742] rotate-6 transform hover:rotate-0 transition-transform duration-500 bg-gray-900 z-20">
                <img
                  src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=400&q=80"
                  alt="Galaxy S24 Ultra Titanium"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md text-[10px] text-center font-bold py-1 rounded-md text-white">
                  {language === 'fa' ? 'گلکسی اس ۲۴ اولترا' : 'Galaxy S24 Ultra'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust/Guarantee Bar */}
        <div className="mt-8 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left rtl:sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-gray-200">
            <div className="p-1.5 rounded-md bg-orange-500/20 text-orange-400 shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block">{language === 'fa' ? 'ارسال رایگان اکسپرس' : 'FREE Shipping'}</strong>
              <span className="text-gray-400 text-[11px]">{language === 'fa' ? 'برای سفارش‌های بالای ۵۰۰ دلار' : 'On all orders over $500'}</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-gray-200">
            <div className="p-1.5 rounded-md bg-orange-500/20 text-orange-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block">{language === 'fa' ? '۲ سال گارانتی شرکتی' : '2-Year Warranty'}</strong>
              <span className="text-gray-400 text-[11px]">{language === 'fa' ? 'تعویض کامل قطعات و نمایشگر' : 'Full manufacturer coverage'}</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-gray-200">
            <div className="p-1.5 rounded-md bg-orange-500/20 text-orange-400 shrink-0">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block">{language === 'fa' ? '۳۰ روز ضمانت بازگشت وجه' : 'Easy Returns'}</strong>
              <span className="text-gray-400 text-[11px]">{language === 'fa' ? 'امکان بازگشت کالا بدون قید و شرط' : '30-day hassle-free policy'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

