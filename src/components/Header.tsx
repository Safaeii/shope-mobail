import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Smartphone, X, Globe, PhoneCall } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../i18n/translations';

export const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    currentView,
    navigateTo,
    filters,
    setSearchQuery,
    wishlist,
    setIsWishlistOpen,
    setIsCartOpen,
    setIsAccountOpen,
    getCartTotal,
  } = useStore();

  const t = TRANSLATIONS[language];
  const { itemCount } = getCartTotal();
  const [searchInput, setSearchInput] = useState(filters.searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    if (currentView !== 'home') {
      navigateTo('home');
    }
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearchQuery('');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fa' ? 'en' : 'fa');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* Top micro banner */}
      <div className="bg-[#18181b] text-white text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] text-gray-300">
            <span>
              <strong className="text-orange-400 font-bold">{language === 'fa' ? 'پیشنهاد محدود:' : 'Limited Time:'}</strong>{' '}
              {t.freeExpressDelivery} • {t.officialWarranty}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-300">
            <span className="hidden md:flex items-center gap-1.5 text-gray-300">
              <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
              <span>{t.hotline}</span>
            </span>
            <button
              onClick={() => navigateTo('support')}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              {t.trackOrder}
            </button>
            <div className="h-3 w-px bg-gray-700" />
            <button
              id="lang-toggle-top-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-orange-300 hover:text-white font-bold transition-colors cursor-pointer px-1.5 py-0.5 rounded hover:bg-white/10"
              title="Change Language / تغییر زبان"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'English (EN)' : 'فارسی (FA)'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-4">
          
          {/* Logo */}
          <div 
            id="brand-logo"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <Smartphone className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 leading-none">
                {language === 'fa' ? 'موبی' : 'Mobi'}<span className="text-orange-500">{language === 'fa' ? 'تک' : 'Tech'}</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 tracking-wider uppercase mt-0.5">
                {language === 'fa' ? 'دایرکت | مرجع پرچمداران' : 'Direct | Flagship Hub'}
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <form 
            id="header-search-form"
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-2xl relative items-center mx-2 lg:mx-4"
          >
            <div className="relative w-full">
              <input
                id="search-input"
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setSearchQuery(e.target.value);
                }}
                placeholder={t.searchPlaceholder}
                className={`w-full bg-[#f4f4f5] text-gray-900 text-sm rounded-lg py-2.5 border border-transparent focus:border-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-gray-400 ${
                  language === 'fa' ? 'pr-11 pl-10 text-right' : 'pl-11 pr-10 text-left'
                }`}
              />
              <Search className={`w-4 h-4 text-gray-400 absolute top-1/2 -translate-y-1/2 pointer-events-none ${
                language === 'fa' ? 'right-3.5' : 'left-3.5'
              }`} />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className={`absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 cursor-pointer ${
                    language === 'fa' ? 'left-3' : 'right-3'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>

          {/* User Utilities */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 shrink-0">
            {/* Language Switch Button in Header */}
            <button
              id="header-lang-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-gray-200 hover:border-orange-400 bg-gray-50 hover:bg-orange-50/50 text-gray-700 hover:text-orange-600 transition-colors text-xs font-bold cursor-pointer"
              title="تغییر زبان / Change Language"
            >
              <Globe className="w-4 h-4 text-orange-500" />
              <span>{language === 'fa' ? 'English' : 'فارسی'}</span>
            </button>

            {/* Account */}
            <button
              id="header-account-btn"
              onClick={() => setIsAccountOpen(true)}
              className="flex items-center gap-1.5 text-gray-700 hover:text-orange-600 py-1.5 px-2 rounded-lg transition-colors group cursor-pointer"
              title={t.vipAccount}
            >
              <User className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
              <span className="text-xs font-semibold hidden lg:inline">{t.vipAccount}</span>
            </button>

            {/* Wishlist */}
            <button
              id="header-wishlist-btn"
              onClick={() => setIsWishlistOpen(true)}
              className="flex items-center gap-1.5 text-gray-700 hover:text-orange-600 py-1.5 px-2 rounded-lg transition-colors group relative cursor-pointer"
              title={t.wishlist}
            >
              <div className="relative">
                <Heart className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold hidden lg:inline">{t.wishlist}</span>
            </button>

            {/* Cart with Orange Badge */}
            <button
              id="header-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 text-gray-700 hover:text-orange-600 py-1.5 px-2.5 rounded-lg transition-colors group relative bg-orange-50/70 hover:bg-orange-100/80 border border-orange-200/70 cursor-pointer"
              title={t.cart}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-orange-600" />
                {itemCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-orange-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-scale">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-gray-800 hidden sm:inline">
                {t.cart}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              id="search-input-mobile"
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setSearchQuery(e.target.value);
              }}
              placeholder={t.searchPlaceholder}
              className={`w-full bg-[#f4f4f5] text-gray-900 text-sm rounded-lg py-2 border border-transparent focus:border-orange-500 focus:bg-white focus:outline-none ${
                language === 'fa' ? 'pr-10 pl-9 text-right' : 'pl-10 pr-9 text-left'
              }`}
            />
            <Search className={`w-4 h-4 text-gray-400 absolute top-1/2 -translate-y-1/2 ${
              language === 'fa' ? 'right-3' : 'left-3'
            }`} />
            {searchInput && (
              <button
                type="button"
                onClick={handleClearSearch}
                className={`absolute top-1/2 -translate-y-1/2 text-gray-400 p-1 ${
                  language === 'fa' ? 'left-2.5' : 'right-2.5'
                }`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

