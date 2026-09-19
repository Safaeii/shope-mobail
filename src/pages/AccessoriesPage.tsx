import React, { useState } from 'react';
import {
  ChevronRight,
  ShoppingBag,
  Star,
  Zap,
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  Filter
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { ACCESSORIES_DATA } from '../data/accessories';
import { Accessory } from '../types';
import { TRANSLATIONS, formatPrice, formatNumber } from '../i18n/translations';

const CATEGORIES = [
  'All',
  'Cases',
  'Chargers',
  'Audio',
  'Screen Protectors',
  'Mounts & Power'
];

const CATEGORY_NAMES_FA: Record<string, string> = {
  All: 'همه لوازم',
  Cases: 'قاب و کاور',
  Chargers: 'شارژر و آداپتور',
  Audio: 'هندزفری و صوت',
  'Screen Protectors': 'گلس و محافظ صفحه',
  'Mounts & Power': 'پاوربانک و هولدر',
};

export const AccessoriesPage: React.FC = () => {
  const { language, navigateTo, addAccessoryToCart, setIsCartOpen } = useStore();
  const t = TRANSLATIONS[language];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Filter logic
  const filteredItems = ACCESSORIES_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.compatibility.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

  const handleAdd = (item: Accessory) => {
    addAccessoryToCart(item, 1);
  };

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
              {language === 'fa' ? 'لوازم جانبی گوشی هوشمند' : 'Mobile Phone Accessories'}
            </span>
            {selectedCategory !== 'All' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 rtl:rotate-180" />
                <span className="font-bold text-orange-600">
                  {language === 'fa' ? CATEGORY_NAMES_FA[selectedCategory] || selectedCategory : selectedCategory}
                </span>
              </>
            )}
          </div>

          <span className="text-[11px] text-gray-500 hidden sm:inline">
            {language === 'fa' ? (
              <>نمایش <strong>{formatNumber(filteredItems.length, language)}</strong> قلم لوازم جانبی اصلی</>
            ) : (
              <>Showing <strong>{filteredItems.length}</strong> premium accessories</>
            )}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Promotional Hero Banner */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-2xl p-6 sm:p-8 text-white shadow-md mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="bg-white/20 backdrop-blur-xs text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
              {language === 'fa' ? 'تجهیزات و لوازم اورجینال پرچمدار' : 'Official Ecosystem Gear'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              {language === 'fa' ? 'شارژ سریع، صدای شفاف و محافظت کامل' : 'Power, Sound & Protection'}
            </h1>
            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed">
              {language === 'fa'
                ? 'پرچمدار خود را با شارژرهای مگ‌سیف، آداپتورهای قدرتمند GaN، قاب‌های ضدضربه با مقاومت استاندارد نظامی و هدفون‌های باکیفیت استودیویی تجهیز کنید.'
                : 'Equip your flagship with authentic MagSafe chargers, GaN high-speed blocks, military drop-tested cases, and hi-res acoustic buds.'}
            </p>
          </div>

          <div className="bg-white text-gray-900 p-4 rounded-xl shadow-lg shrink-0 text-center max-w-xs w-full">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-orange-600 block">
              {language === 'fa' ? 'تخفیف ویژه خرید گروهی' : 'Bundle Savings Promo'}
            </span>
            <span className="text-lg font-black text-gray-900 block my-1">
              {language === 'fa' ? '۲۵٪ تخفیف اختصاصی' : 'Save 25% Off'}
            </span>
            <p className="text-[11px] text-gray-500 mb-2">
              {language === 'fa' ? 'کد تخفیف در مرحله پرداخت: ' : 'Apply coupon '}
              <code className="bg-gray-100 px-1 py-0.5 rounded font-mono font-bold text-orange-600" dir="ltr">
                BUNDLE25
              </code>
            </p>
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold text-xs py-2 rounded-lg transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'مشاهده سبد خرید من' : 'View My Cart'}
            </button>
          </div>
        </div>

        {/* Category Pills & Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {language === 'fa' ? CATEGORY_NAMES_FA[cat] || cat : cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto w-full md:w-auto">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={language === 'fa' ? 'جستجوی مدل یا لوازم جانبی...' : 'Search accessory or model...'}
              className="bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 w-full md:w-56"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-gray-300 rounded-xl py-2 px-3 text-xs font-semibold text-gray-800 focus:outline-none focus:border-orange-500 shrink-0 cursor-pointer"
            >
              <option value="featured">{t.sortFeatured}</option>
              <option value="price-asc">{t.sortPriceAsc}</option>
              <option value="price-desc">{t.sortPriceDesc}</option>
              <option value="rating">{t.sortRating}</option>
            </select>
          </div>
        </div>

        {/* Accessories Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg hover:border-orange-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-square bg-[#fafafa] rounded-xl p-4 flex items-center justify-center border border-gray-100 mb-3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.originalPrice && (
                    <span className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-2xs">
                      {language === 'fa'
                        ? `تخفیف ${(item.originalPrice - item.price).toFixed(0)} دلاری`
                        : `Save $${(item.originalPrice - item.price).toFixed(0)}`}
                    </span>
                  )}
                  <span className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 bg-white/90 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gray-200">
                    {item.brand}
                  </span>
                </div>

                {/* Info */}
                <div className="mb-3">
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    {language === 'fa' ? CATEGORY_NAMES_FA[item.category] || item.category : item.category}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[11px] text-gray-500 block mt-1 truncate">
                    {language === 'fa' ? 'سازگار با:' : 'Fits:'} {item.compatibility}
                  </span>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mt-2 text-xs">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                    </div>
                    <span className="font-bold text-gray-900">{formatNumber(item.rating, language)}</span>
                    <span className="text-gray-400 text-[11px]">({formatNumber(item.reviewsCount, language)})</span>
                  </div>

                  {/* Feature Highlights */}
                  <ul className="mt-2.5 space-y-1">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="text-[11px] text-gray-600 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[3]" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Add to Cart Button */}
              <div className="pt-3 border-t border-gray-150 flex items-center justify-between gap-2">
                <div>
                  <span className="text-base font-black text-gray-900 font-mono" dir="ltr">
                    {formatPrice(item.price, language)}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xs text-gray-400 line-through font-mono ml-1.5 rtl:mr-1.5 rtl:ml-0" dir="ltr">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleAdd(item)}
                  className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{language === 'fa' ? 'خرید' : 'Add'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Value Prop banner */}
        <div className="mt-14 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-orange-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-gray-900">
                {language === 'fa' ? 'ارسال سریع استاندارد' : 'Fast Standard Shipping'}
              </h4>
              <p className="text-[11px] text-gray-500">
                {language === 'fa' ? 'تحویل رایگان برای خریدهای بالای ۴۵ دلار' : 'Free delivery on accessory orders over $45'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-orange-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-gray-900">
                {language === 'fa' ? '۱ سال ضمانت تعویض لوازم جانبی' : '1-Year Direct Accessory Warranty'}
              </h4>
              <p className="text-[11px] text-gray-500">
                {language === 'fa' ? 'تضمین تعویض بی‌قیدوشرط کابل‌ها و آداپتورها' : 'Hassle-free replacement guarantee on cables & chargers'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-orange-500 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-gray-900">
                {language === 'fa' ? 'سازگاری ۱۰۰٪ تاییدشده' : 'Certified Compatibility'}
              </h4>
              <p className="text-[11px] text-gray-500">
                {language === 'fa' ? 'تطابق کامل با پروتکل‌ها و ولتاژ استاندارد کارخانه' : '100% matched to OEM voltage & charging curves'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
