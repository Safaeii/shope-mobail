import React from 'react';
import { Home, ShoppingBag, User, Headphones, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../i18n/translations';

export const MobileBottomNav: React.FC = () => {
  const {
    language,
    currentView,
    navigateTo,
    setIsCartOpen,
    setIsAccountOpen,
    getCartTotal,
  } = useStore();

  const t = TRANSLATIONS[language];
  const { itemCount } = getCartTotal();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 py-1.5 px-2 shadow-lg">
      <div className="grid grid-cols-5 items-center">
        {/* Home */}
        <button
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center gap-0.5 py-1 transition-colors cursor-pointer ${
            currentView === 'home' ? 'text-orange-500 font-bold' : 'text-gray-500'
          }`}
        >
          <Home className="w-5 h-5 stroke-[2]" />
          <span className="text-[10px] tracking-tight font-medium">
            {language === 'fa' ? 'گوشی‌ها' : 'Phones'}
          </span>
        </button>

        {/* Brands */}
        <button
          onClick={() => navigateTo('brands', { brand: 'All' })}
          className={`flex flex-col items-center gap-0.5 py-1 transition-colors cursor-pointer ${
            currentView === 'brands' ? 'text-orange-500 font-bold' : 'text-gray-500'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] tracking-tight font-medium">
            {language === 'fa' ? 'برندها' : 'Brands'}
          </span>
        </button>

        {/* Accessories */}
        <button
          onClick={() => navigateTo('accessories')}
          className={`flex flex-col items-center gap-0.5 py-1 transition-colors cursor-pointer ${
            currentView === 'accessories' ? 'text-orange-500 font-bold' : 'text-gray-500'
          }`}
        >
          <Headphones className="w-5 h-5" />
          <span className="text-[10px] tracking-tight font-medium">
            {language === 'fa' ? 'لوازم' : 'Gear'}
          </span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 text-gray-500 hover:text-orange-500 transition-colors relative cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                {itemCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight font-medium">
            {t.cart}
          </span>
        </button>

        {/* Account */}
        <button
          onClick={() => setIsAccountOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] tracking-tight font-medium">
            {language === 'fa' ? 'حساب' : 'Account'}
          </span>
        </button>
      </div>
    </div>
  );
};

