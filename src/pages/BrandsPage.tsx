import React from 'react';
import {
  Smartphone,
  ShieldCheck,
  Zap,
  Star,
  Award,
  ChevronRight,
  ArrowUpDown,
  SlidersHorizontal
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { PHONES_DATA } from '../data/phones';
import { ProductCard } from '../components/ProductCard';
import { TRANSLATIONS, BRAND_PHILOSOPHIES_FA, formatNumber } from '../i18n/translations';

interface BrandProfile {
  name: string;
  tagline: string;
  heroColor: string;
  badgeBg: string;
  description: string;
  keyFeatures: string[];
  keyFeaturesFa?: string[];
}

const BRAND_PROFILES: Record<string, BrandProfile> = {
  Apple: {
    name: 'Apple',
    tagline: 'Titanium Engineering & Pro Camera Innovation',
    heroColor: 'from-gray-900 via-neutral-800 to-stone-900',
    badgeBg: 'bg-black text-white',
    description:
      'Apple flagships define mobile excellence with aerospace-grade titanium designs, custom silicon A17 Pro chips, and seamless iOS ecosystem synergy with iCloud and Mac.',
    keyFeatures: ['Aerospace Titanium Rails', 'A17 Pro Ray Tracing Silicon', 'Action Button Customization', 'USB-3 10Gbps High Speed'],
    keyFeaturesFa: ['بدنه تیتانیوم گرید هوافضا', 'تراشه گرافیکی قدرتمند A17 Pro', 'دکمه اکشن باتن قابل برنامه‌ریزی', 'درگاه پرسرعت USB-3 با پهنای باند ۱۰ گیگابیت'],
  },
  Samsung: {
    name: 'Samsung',
    tagline: 'Galaxy AI & Dynamic AMOLED 2X Display Leadership',
    heroColor: 'from-blue-950 via-slate-900 to-indigo-950',
    badgeBg: 'bg-blue-600 text-white',
    description:
      'Samsung Galaxy ultra-flagships lead the Android universe with revolutionary Galaxy AI, flat anti-reflective displays, built-in S-Pen productivity, and 200MP zoom optics.',
    keyFeatures: ['Circle to Search with Google', '200MP Quad Telephoto Zoom', 'Corning Gorilla Armor Glass', 'Integrated Embedded S-Pen'],
    keyFeaturesFa: ['جستجوی هوشمند تصویری با Circle to Search', 'دوربین فوق‌حرفه‌ای ۲۰۰ مگاپیکسلی با زوم ۱۰۰ برابری', 'شیشه ضد انعکاس گوریلا آرمور', 'قلم هوشمند S-Pen داخلی با تاخیر ۲.۸ میلی‌ثانیه'],
  },
  Google: {
    name: 'Google',
    tagline: 'Google Tensor G3 & Computational Photography Royalty',
    heroColor: 'from-emerald-950 via-teal-900 to-stone-900',
    badgeBg: 'bg-emerald-600 text-white',
    description:
      'Engineered directly by Google, Pixel delivers pure Android, instantaneous Day 1 security releases, 7 full years of OS updates, and award-winning Magic Eraser & Best Take.',
    keyFeatures: ['Google Tensor G3 AI Chip', '7 Years of OS & Security Drops', 'Magic Editor & Best Take', 'Super Actua 2400-nit Screen'],
    keyFeaturesFa: ['پردازنده اختصاصی Tensor G3 با هوش مصنوعی گوگل', '۷ سال تضمین آپدیت‌های امنیتی و سیستم‌عامل', 'ویرایشگر جادویی عکس Magic Editor', 'روشنایی خیره‌کننده ۲۴۰۰ نیتی Super Actua'],
  },
  OnePlus: {
    name: 'OnePlus',
    tagline: 'Never Settle: 80W SuperVOOC & Hasselblad Color Science',
    heroColor: 'from-red-950 via-rose-950 to-neutral-900',
    badgeBg: 'bg-red-600 text-white',
    description:
      'Combining extreme performance with hyper-fast 80W wired & 50W wireless charging, paired with 4th-Gen Hasselblad camera calibration for natural color depth.',
    keyFeatures: ['80W SuperVOOC Fast Charge', '4th Gen Hasselblad Camera', 'Snapdragon 8 Gen 3 Platform', 'Dual Cryo-velocity VC Cooling'],
    keyFeaturesFa: ['شارژ فوق سریع ۸۰ واتی SuperVOOC', 'کالیبراسیون نسل ۴ رنگ هاسلبلاد', 'چیپست اسنپدراگون ۸ نسل ۳', 'سیستم خنک‌کننده محفظه بخار دوگانه گیمینگ'],
  },
  Xiaomi: {
    name: 'Xiaomi',
    tagline: 'Leica Summilux Optics & HyperOS Performance',
    heroColor: 'from-amber-950 via-orange-950 to-stone-900',
    badgeBg: 'bg-orange-600 text-white',
    description:
      'Co-engineered with legendary German optics maker Leica, Xiaomi brings 1-inch variable aperture sensors, 120W HyperCharge, and titanium special editions.',
    keyFeatures: ['Leica Summilux Professional Lens', '120W HyperCharge Speed', 'Xiaomi HyperOS Optimization', 'Liquid Display All-Around Curved'],
    keyFeaturesFa: ['لنزهای حرفه‌ای لایکا با دیافراگم متغیر', 'شارژ فوق سریع ۱۲۰ واتی هایپرشارژ', 'رابط کاربری روان و بهینه HyperOS', 'سنسور غول‌پیکر عکاسی ۱ اینچی'],
  },
};

const BRANDS_LIST = ['All', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];

export const BrandsPage: React.FC = () => {
  const { language, selectedBrandTab, navigateTo, filters, setSortBy } = useStore();
  const t = TRANSLATIONS[language];

  const activeBrand = selectedBrandTab || 'All';

  // Filter phones by selected brand
  const filteredPhones = PHONES_DATA.filter((p) => {
    if (activeBrand === 'All') return true;
    return p.brand.toLowerCase() === activeBrand.toLowerCase();
  });

  const profile = activeBrand !== 'All' ? BRAND_PROFILES[activeBrand] : null;
  const brandFa = activeBrand !== 'All' && BRAND_PHILOSOPHIES_FA[activeBrand];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20 animate-fade-in">
      {/* Top Breadcrumb Bar */}
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
              {language === 'fa' ? 'فروشگاه‌های رسمی برندها' : 'Official Brand Boutiques'}
            </span>
            {activeBrand !== 'All' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 rtl:rotate-180" />
                <span className="font-bold text-orange-600">{activeBrand}</span>
              </>
            )}
          </div>

          <span className="text-[11px] text-gray-500 hidden sm:inline">
            {language === 'fa' ? (
              <>نمایش <strong>{formatNumber(filteredPhones.length, language)}</strong> مدل اورجینال</>
            ) : (
              <>Showing <strong>{filteredPhones.length}</strong> certified models</>
            )}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Brand Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {BRANDS_LIST.map((b) => (
            <button
              key={b}
              onClick={() => navigateTo('brands', { brand: b, scrollToTop: false })}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeBrand === b
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {b === 'All'
                ? (language === 'fa' ? 'نمایشگاه همه برندها' : 'All Brands Showcase')
                : b}
            </button>
          ))}
        </div>

        {/* Brand Hero Banner */}
        {profile ? (
          <div
            className={`rounded-2xl p-6 sm:p-10 mb-8 bg-gradient-to-br ${profile.heroColor} text-white shadow-lg relative overflow-hidden`}
          >
            <div className="relative z-10 max-w-3xl">
              <span className="text-orange-400 text-xs font-black uppercase tracking-widest block mb-2">
                {language === 'fa' ? 'عرضه رسمی با ضمانت اصالت فابریک' : 'Certified Authorized Distributor'}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">
                {language === 'fa' ? `گوشی‌های پرچمدار ${profile.name}` : `${profile.name} Smartphones`}
              </h1>
              <p className="text-sm sm:text-base text-gray-200 font-medium mb-4">
                {language === 'fa' && brandFa ? brandFa.title : profile.tagline}
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                {language === 'fa' && brandFa ? brandFa.desc : profile.description}
              </p>

              {/* Key Features Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(language === 'fa' && profile.keyFeaturesFa
                  ? profile.keyFeaturesFa
                  : profile.keyFeatures
                ).map((feat) => (
                  <span
                    key={feat}
                    className="bg-white/10 backdrop-blur-xs border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Background Decorative Icon */}
            <div className="absolute right-4 -bottom-8 opacity-10 pointer-events-none hidden md:block rtl:right-auto rtl:left-4">
              <Smartphone className="w-80 h-80 text-white stroke-[1]" />
            </div>
          </div>
        ) : (
          <div className="bg-[#18181b] rounded-2xl p-6 sm:p-8 mb-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-orange-400 text-xs font-extrabold uppercase tracking-widest block mb-1">
                {language === 'fa' ? 'کلکسیون اختصاصی برندها' : 'Direct Brand Collections'}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {language === 'fa' ? 'برترین برندهای سازنده گوشی هوشمند جهان' : 'World-Class Smartphone Brands'}
              </h1>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                {language === 'fa'
                  ? 'بررسی و مقایسه پرچمداران اپل، سامسونگ، گوگل، وان‌پلاس و شیائومی با تضمین ۱۰۰٪ آنلاک فابریک کارخانه و گارانتی طلایی ۲ ساله.'
                  : 'Explore official flagships from Apple, Samsung, Google, OnePlus, and Xiaomi. Every unit includes 100% factory unlocking and our 2-Year Direct Guarantee.'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#27272a] px-4 py-3 rounded-xl border border-gray-800 text-center">
                <span className="block text-xl font-black text-white">{formatNumber(5, language)}</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  {language === 'fa' ? 'برند برتر' : 'Top Brands'}
                </span>
              </div>
              <div className="bg-[#27272a] px-4 py-3 rounded-xl border border-gray-800 text-center">
                <span className="block text-xl font-black text-white">۱۰۰٪</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  {language === 'fa' ? 'پلمپ شرکتی' : 'Factory Sealed'}
                </span>
              </div>
              <div className="bg-[#27272a] px-4 py-3 rounded-xl border border-gray-800 text-center">
                <span className="block text-xl font-black text-white">
                  {language === 'fa' ? '۲ سال' : '2-Yr'}
                </span>
                <span className="text-[10px] text-gray-400 uppercase font-bold">
                  {language === 'fa' ? 'گارانتی رسمی' : 'Warranty'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Sort & Count Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 flex items-center justify-between gap-4 text-xs">
          <span className="font-semibold text-gray-700">
            {language === 'fa' ? (
              <>
                نمایش <strong>{formatNumber(filteredPhones.length, language)}</strong> گوشی پرچمدار{' '}
                {activeBrand !== 'All' ? activeBrand : ''}
              </>
            ) : (
              <>
                Showing <strong>{filteredPhones.length}</strong> {activeBrand !== 'All' ? activeBrand : ''} smartphones
              </>
            )}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium hidden sm:inline">
              {language === 'fa' ? 'مرتب‌سازی:' : 'Sort:'}
            </span>
            <select
              value={filters.sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-50 border border-gray-300 rounded-lg py-1.5 px-3 font-semibold text-gray-800 focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              <option value="featured">{t.sortFeatured}</option>
              <option value="price-asc">{t.sortPriceAsc}</option>
              <option value="price-desc">{t.sortPriceDesc}</option>
              <option value="rating">{t.sortRating}</option>
            </select>
          </div>
        </div>

        {/* Phones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredPhones.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </div>

        {/* Brand Authenticity Guarantee */}
        <div className="mt-14 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">
                  {language === 'fa' ? 'ضمانت ۱۰۰٪ اصالت کالا' : '100% Guaranteed Authentic'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {language === 'fa'
                    ? 'تمامی دستگاه‌ها به طور مستقیم از کانال‌های رسمی تولیدکننده با پلمپ و جعبه اورجینال تامین می‌گردند.'
                    : 'Every smartphone is sourced directly from certified authorized supply chains in original sealed packaging.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">
                  {language === 'fa' ? 'آنلاک کارخانه بدون محدودیت اپراتور' : 'Factory Unlocked for All Carriers'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {language === 'fa'
                    ? 'پشتیبانی کامل از سیم‌کارت‌های همراه اول، ایرانسل، رایتل و کلیه اپراتورهای بین‌المللی با باندهای 5G جهانی.'
                    : 'Supports Verizon, AT&T, T-Mobile, plus international global eSIM / physical nano-SIM bands.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">
                  {language === 'fa' ? 'ارسال فوری در همان روز' : 'Same-Day Priority Dispatch'}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {language === 'fa'
                    ? 'سفارش‌های ثبت شده تا ساعت ۱۵:۰۰ در همان روز بسته‌بندی شده و تحویل پست اکسپرس هوایی می‌گردد.'
                    : 'Orders placed before 3:00 PM EST ship the same afternoon with express tracked FedEx delivery.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
