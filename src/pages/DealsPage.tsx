import React, { useState, useEffect } from 'react';
import {
  Flame,
  Clock,
  Tag,
  Copy,
  Check,
  Zap,
  ChevronRight,
  ShieldCheck,
  Gift
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { PHONES_DATA } from '../data/phones';
import { ProductCard } from '../components/ProductCard';
import { TRANSLATIONS, formatNumber } from '../i18n/translations';

export const DealsPage: React.FC = () => {
  const { language, navigateTo, showToast } = useStore();
  const t = TRANSLATIONS[language];
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Countdown timer for flash drop
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast(
      language === 'fa'
        ? `کد تخفیف ${code} با موفقیت کپی شد!`
        : `Coupon code ${code} copied to clipboard!`,
      'success'
    );
    setTimeout(() => setCopiedCode(null), 3000);
  };

  // Phones with discounts or onSale
  const discountedPhones = PHONES_DATA.filter((p) => p.onSale || (p.originalPrice && p.originalPrice > p.price));

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20 animate-fade-in">
      {/* Top Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-500">
            <button
              onClick={() => navigateTo('home')}
              className="hover:text-orange-600 font-medium transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'خانه' : 'Home'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 rtl:rotate-180" />
            <span className="font-bold text-gray-900">
              {language === 'fa' ? 'تخفیف‌ها و پیشنهادهای شگفت‌انگیز' : 'Deals & Promotional Offers'}
            </span>
          </div>
          <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded flex items-center gap-1">
            <span>🔥</span>
            <span>{language === 'fa' ? 'فروش ویژه در حال برگزاری است' : 'Flash Sale Active'}</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Flash Drop Hero Banner */}
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 rounded-2xl p-6 sm:p-10 text-white shadow-lg mb-8 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Flame className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>{language === 'fa' ? 'جشنواره تخفیف آخر هفته پرچمداران' : 'Weekend Smartphone Flash Drop'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              {language === 'fa' ? 'تا ۲۰۰ دلار تخفیف نقدی روی پرچمداران' : 'Up to $200 Off Flagships'}
            </h1>
            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed max-w-xl">
              {language === 'fa'
                ? 'فرصت استثنایی خرید جدیدترین گوشی‌های آنلاک فابریک اپل، سامسونگ، گوگل و وان‌پلاس با تخفیف‌های مستقیم، ارسال فوری ۲ روزه و ضمانت ۲ ساله شرکتی.'
                : 'Take advantage of limited-quantity pricing on factory unlocked models from Apple, Samsung, Google, and OnePlus. Stackable with free 2-day delivery and full 2-year warranty!'}
            </p>
          </div>

          {/* Flash Timer Widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shrink-0 w-full sm:w-auto relative z-10">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-orange-200 mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'زمان باقی‌مانده تا پایان پیشنهاد' : 'OFFER ENDS IN'}</span>
            </div>
            <div className="flex items-center justify-center gap-2 font-mono" dir="ltr">
              <div className="bg-black/40 rounded-xl px-3 py-2 text-center min-w-[54px]">
                <span className="text-2xl font-black text-white block">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase font-bold text-gray-300">
                  {language === 'fa' ? 'ساعت' : 'Hours'}
                </span>
              </div>
              <span className="text-2xl font-black text-white">:</span>
              <div className="bg-black/40 rounded-xl px-3 py-2 text-center min-w-[54px]">
                <span className="text-2xl font-black text-white block">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase font-bold text-gray-300">
                  {language === 'fa' ? 'دقیقه' : 'Mins'}
                </span>
              </div>
              <span className="text-2xl font-black text-white">:</span>
              <div className="bg-black/40 rounded-xl px-3 py-2 text-center min-w-[54px]">
                <span className="text-2xl font-black text-amber-300 block">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase font-bold text-gray-300">
                  {language === 'fa' ? 'ثانیه' : 'Secs'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Promo Codes Cards */}
        <div className="mb-10">
          <h2 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Tag className="w-4 h-4 text-orange-500" />
            <span>{language === 'fa' ? 'کدهای تخفیف فعال و قابل استفاده' : 'Active Discount Promo Codes'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Promo 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold text-orange-600 block">
                  {language === 'fa' ? '۵۰ دلار تخفیف کلیه پرچمداران' : '$50 OFF ALL FLAGSHIPS'}
                </span>
                <span className="text-[11px] text-gray-500">
                  {language === 'fa' ? 'حداقل خرید ۷۹۹ دلار • سراسری' : 'Min. order $799 • Valid sitewide'}
                </span>
              </div>
              <button
                onClick={() => handleCopyCode('FLAGSHIP50')}
                className="flex items-center gap-1.5 bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-gray-800 font-mono text-xs font-bold px-3 py-2 rounded-lg border border-gray-200 transition-colors cursor-pointer"
                dir="ltr"
              >
                {copiedCode === 'FLAGSHIP50' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'fa' ? 'کپی شد' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>FLAGSHIP50</span>
                  </>
                )}
              </button>
            </div>

            {/* Promo 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold text-orange-600 block">
                  {language === 'fa' ? '۱۰۰ دلار تخفیف خرید بالای ۱۲۰۰ دلار' : '$100 OFF ORDERS OVER $1,200'}
                </span>
                <span className="text-[11px] text-gray-500">
                  {language === 'fa' ? 'شامل مدل‌های Pro Max و Ultra' : 'Includes Ultra & Pro Max tiers'}
                </span>
              </div>
              <button
                onClick={() => handleCopyCode('SAVE100')}
                className="flex items-center gap-1.5 bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-gray-800 font-mono text-xs font-bold px-3 py-2 rounded-lg border border-gray-200 transition-colors cursor-pointer"
                dir="ltr"
              >
                {copiedCode === 'SAVE100' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'fa' ? 'کپی شد' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>SAVE100</span>
                  </>
                )}
              </button>
            </div>

            {/* Promo 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold text-orange-600 block">
                  {language === 'fa' ? '۲۵٪ تخفیف کلیه لوازم جانبی' : '25% OFF ACCESSORIES'}
                </span>
                <span className="text-[11px] text-gray-500">
                  {language === 'fa' ? 'شارژرها، قاب‌ها، هدفون و پاوربانک' : 'Chargers, cases, audio & mounts'}
                </span>
              </div>
              <button
                onClick={() => handleCopyCode('BUNDLE25')}
                className="flex items-center gap-1.5 bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-gray-800 font-mono text-xs font-bold px-3 py-2 rounded-lg border border-gray-200 transition-colors cursor-pointer"
                dir="ltr"
              >
                {copiedCode === 'BUNDLE25' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'fa' ? 'کپی شد' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>BUNDLE25</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Discounted Phone Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black text-gray-900">
              {language === 'fa' ? 'گوشی‌های پرچمدار با تخفیف ویژه' : 'Featured Discounted Smartphones'}
            </h2>
            <span className="text-xs font-semibold text-gray-500">
              {language === 'fa'
                ? `${formatNumber(discountedPhones.length, language)} پیشنهاد شگفت‌انگیز در دسترس`
                : `${discountedPhones.length} Deals Available`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {discountedPhones.map((phone) => (
              <ProductCard key={phone.id} phone={phone} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
