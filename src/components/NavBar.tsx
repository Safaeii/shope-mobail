import React, { useState } from 'react';
import { ChevronDown, Tag, ShieldCheck, Headphones, Smartphone, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../i18n/translations';

export const NavBar: React.FC = () => {
  const { language, currentView, navigateTo } = useStore();
  const t = TRANSLATIONS[language];
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handlePhonesMenuClick = () => {
    setActiveDropdown(null);
    navigateTo('home');
  };

  const handleBrandSelect = (brand: string) => {
    setActiveDropdown(null);
    navigateTo('brands', { brand });
  };

  return (
    <nav className="bg-white border-b border-gray-200 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <div className="flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-wider uppercase">
            
            {/* Phones Dropdown */}
            <div 
              className="relative h-11 flex items-center"
              onMouseEnter={() => setActiveDropdown('phones')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                id="nav-phones-dropdown-btn"
                onClick={handlePhonesMenuClick}
                className={`flex items-center gap-1.5 transition-colors py-3 h-full cursor-pointer border-b-2 ${
                  currentView === 'home' || currentView === 'product-detail'
                    ? 'text-orange-600 border-orange-500 font-extrabold'
                    : 'text-gray-800 hover:text-orange-600 border-transparent'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-gray-500" />
                <span>{t.navPhones}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {activeDropdown === 'phones' && (
                <div className={`absolute top-full w-64 bg-white rounded-b-xl shadow-xl border border-gray-100 py-3 z-50 animate-fade-in ${
                  language === 'fa' ? 'right-0' : 'left-0'
                }`}>
                  <div className="px-4 py-1 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
                    {t.browseFlagships}
                  </div>
                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      navigateTo('home');
                    }}
                    className="w-full text-left rtl:text-right px-4 py-2 text-xs font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.allSmartphones}</span>
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">
                      {language === 'fa' ? 'همه' : 'All'}
                    </span>
                  </button>
                  <button
                    onClick={() => handleBrandSelect('Apple')}
                    className="w-full text-left rtl:text-right px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.appleIphones}</span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-normal">iOS 17</span>
                  </button>
                  <button
                    onClick={() => handleBrandSelect('Samsung')}
                    className="w-full text-left rtl:text-right px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.samsungGalaxy}</span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-normal">Galaxy AI</span>
                  </button>
                  <button
                    onClick={() => handleBrandSelect('Google')}
                    className="w-full text-left rtl:text-right px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.googlePixel}</span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-normal">Tensor</span>
                  </button>
                  <button
                    onClick={() => handleBrandSelect('OnePlus')}
                    className="w-full text-left rtl:text-right px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.onePlusFlagships}</span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-normal">80W</span>
                  </button>
                  <button
                    onClick={() => handleBrandSelect('Xiaomi')}
                    className="w-full text-left rtl:text-right px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.xiaomiFlagships}</span>
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-normal">Leica</span>
                  </button>
                </div>
              )}
            </div>

            {/* Brands Dropdown */}
            <div 
              className="relative h-11 flex items-center"
              onMouseEnter={() => setActiveDropdown('brands')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                id="nav-brands-dropdown-btn"
                onClick={() => handleBrandSelect('All')}
                className={`flex items-center gap-1.5 transition-colors py-3 h-full cursor-pointer border-b-2 ${
                  currentView === 'brands'
                    ? 'text-orange-600 border-orange-500 font-extrabold'
                    : 'text-gray-800 hover:text-orange-600 border-transparent'
                }`}
              >
                <span>{t.navBrands}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {activeDropdown === 'brands' && (
                <div className={`absolute top-full w-56 bg-white rounded-b-xl shadow-xl border border-gray-100 py-3 z-50 animate-fade-in ${
                  language === 'fa' ? 'right-0' : 'left-0'
                }`}>
                  <button
                    onClick={() => handleBrandSelect('All')}
                    className="w-full text-left rtl:text-right px-4 py-2 text-xs font-bold text-orange-600 hover:bg-orange-50 flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.allBrandsShowcase}</span>
                    <Sparkles className="w-3 h-3" />
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  {['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'].map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className="w-full text-left rtl:text-right px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 cursor-pointer"
                    >
                      {brand === 'Apple' ? (language === 'fa' ? 'اپل (Apple)' : 'Apple') :
                       brand === 'Samsung' ? (language === 'fa' ? 'سامسونگ (Samsung)' : 'Samsung') :
                       brand === 'Google' ? (language === 'fa' ? 'گوگل (Google)' : 'Google') :
                       brand === 'OnePlus' ? (language === 'fa' ? 'وان‌پلاس (OnePlus)' : 'OnePlus') :
                       (language === 'fa' ? 'شیائومی (Xiaomi)' : 'Xiaomi')}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Accessories Sub-page Link */}
            <button
              id="nav-accessories-btn"
              onClick={() => navigateTo('accessories')}
              className={`flex items-center gap-1.5 transition-colors py-3 h-11 border-b-2 cursor-pointer ${
                currentView === 'accessories'
                  ? 'text-orange-600 border-orange-500 font-extrabold'
                  : 'text-gray-800 hover:text-orange-600 border-transparent'
              }`}
            >
              <Headphones className="w-3.5 h-3.5 text-gray-500" />
              <span>{t.navAccessories}</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded-full lowercase">
                {t.newBadge}
              </span>
            </button>

            {/* Deals & Offers Sub-page Link */}
            <button
              id="nav-deals-btn"
              onClick={() => navigateTo('deals')}
              className={`flex items-center gap-1.5 transition-colors py-3 h-11 border-b-2 cursor-pointer ${
                currentView === 'deals'
                  ? 'text-orange-600 border-orange-500 font-extrabold'
                  : 'text-orange-600 hover:text-orange-700 border-transparent'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{t.navDeals}</span>
              <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.2 rounded-full lowercase">
                {t.hotDeal}
              </span>
            </button>

            {/* Support & Warranty Sub-page Link */}
            <button
              id="nav-support-btn"
              onClick={() => navigateTo('support')}
              className={`flex items-center gap-1.5 transition-colors py-3 h-11 border-b-2 cursor-pointer ${
                currentView === 'support'
                  ? 'text-orange-600 border-orange-500 font-extrabold'
                  : 'text-gray-800 hover:text-orange-600 border-transparent'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gray-500" />
              <span>{t.navSupport}</span>
            </button>

          </div>

          {/* Right Micro text */}
          <div className="text-[11px] text-gray-500 font-medium flex items-center gap-4">
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {language === 'fa' ? 'تمام دستگاه‌ها پلمپ، آنلاک و با اصالت ۱۰۰٪' : 'All Units In-Stock & Verified'}
            </span>
          </div>

        </div>
      </div>
    </nav>
  );
};

