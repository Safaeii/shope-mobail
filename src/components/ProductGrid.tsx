import React from 'react';
import { SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';
import { PHONES_DATA } from '../data/phones';
import { ProductCard } from './ProductCard';
import { FilterState } from '../types';
import { TRANSLATIONS, formatNumber } from '../i18n/translations';

export const ProductGrid: React.FC = () => {
  const {
    language,
    filters,
    setSortBy,
    toggleBrand,
    toggleStorage,
    toggleNetwork,
    toggleSpecialOffer,
    setSearchQuery,
    resetFilters,
    setIsMobileFilterOpen,
  } = useStore();

  const t = TRANSLATIONS[language];

  // Filter phones
  const filteredPhones = PHONES_DATA.filter((phone) => {
    // Search query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      const matchName = phone.name.toLowerCase().includes(q);
      const matchBrand = phone.brand.toLowerCase().includes(q);
      const matchChip = phone.specs.chip.toLowerCase().includes(q);
      const matchDesc = phone.description.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchChip && !matchDesc) return false;
    }

    // Brands
    if (filters.selectedBrands.length > 0) {
      if (!filters.selectedBrands.includes(phone.brand)) return false;
    }

    // Price range
    if (phone.price < filters.minPrice || phone.price > filters.maxPrice) {
      return false;
    }

    // Storage
    if (filters.selectedStorages.length > 0) {
      const hasStorage = filters.selectedStorages.some((s) =>
        phone.specs.storage.includes(s)
      );
      if (!hasStorage) return false;
    }

    // Network
    if (filters.selectedNetworks.length > 0) {
      const hasNetwork = filters.selectedNetworks.some((n) =>
        phone.specs.network.some((pn) => pn.toLowerCase().includes(n.toLowerCase()))
      );
      if (!hasNetwork) return false;
    }

    // Special Offers
    if (filters.specialOffers.length > 0) {
      if (filters.specialOffers.includes('onSale') && !phone.onSale) return false;
      if (filters.specialOffers.includes('freeShipping') && !phone.hasFreeShipping) return false;
      if (filters.specialOffers.includes('newArrival') && !phone.isNewArrival) return false;
    }

    return true;
  });

  // Sort phones
  const sortedPhones = [...filteredPhones].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      case 'featured':
      default:
        return b.reviewsCount - a.reviewsCount;
    }
  });

  const hasActiveFilters =
    filters.selectedBrands.length > 0 ||
    filters.selectedStorages.length > 0 ||
    filters.selectedNetworks.length > 0 ||
    filters.specialOffers.length > 0 ||
    filters.searchQuery.trim().length > 0 ||
    filters.maxPrice < 2000;

  return (
    <div id="products-grid-section" className="space-y-4">
      {/* Top Toolbar: Count, Mobile filter button, Sort */}
      <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Results Count & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-filter-sort-btn"
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3.5 py-2 rounded-lg transition-colors border border-gray-200 cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-orange-500" />
            <span>{t.filtersTitle}</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            )}
          </button>

          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            {language === 'fa' ? (
              <>
                نمایش <strong className="text-gray-900 font-bold">{formatNumber(sortedPhones.length, 'fa')}</strong> از{' '}
                <span className="text-gray-500">{formatNumber(PHONES_DATA.length, 'fa')} گوشی پرچمدار</span>
              </>
            ) : (
              <>
                Showing <strong className="text-gray-900 font-bold">{sortedPhones.length}</strong> of{' '}
                <span className="text-gray-500">{PHONES_DATA.length} flagship phones</span>
              </>
            )}
          </p>
        </div>

        {/* Right: Sort By Dropdown */}
        <div className="flex items-center gap-2 ml-auto rtl:mr-auto rtl:ml-0">
          <label htmlFor="sort-by-select" className="text-xs font-semibold text-gray-500 hidden sm:inline">
            {t.sortBy}
          </label>
          <div className="relative">
            <select
              id="sort-by-select"
              value={filters.sortBy}
              onChange={(e) => setSortBy(e.target.value as FilterState['sortBy'])}
              className="appearance-none bg-[#f4f4f5] hover:bg-gray-200/70 text-gray-800 text-xs font-bold py-2 pl-3 pr-8 rtl:pr-3 rtl:pl-8 rounded-lg border border-transparent focus:border-orange-500 focus:bg-white focus:outline-none cursor-pointer transition-colors"
            >
              <option value="featured">{t.sortFeatured}</option>
              <option value="price-asc">{t.sortPriceAsc}</option>
              <option value="price-desc">{t.sortPriceDesc}</option>
              <option value="rating">{t.sortRating}</option>
              <option value="newest">{t.sortNewest}</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-500 absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Active Filter Badges */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-gray-400 font-medium text-[11px]">{language === 'fa' ? 'فیلترهای فعال:' : 'Active Filters:'}</span>
          
          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full font-medium">
              {language === 'fa' ? `جستجو: "${filters.searchQuery}"` : `Search: "${filters.searchQuery}"`}
              <X
                className="w-3 h-3 text-gray-500 hover:text-gray-900 cursor-pointer"
                onClick={() => setSearchQuery('')}
              />
            </span>
          )}

          {filters.selectedBrands.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 border border-orange-200 px-2.5 py-1 rounded-full font-semibold"
            >
              {language === 'fa' ? `برند: ${b}` : `Brand: ${b}`}
              <X
                className="w-3 h-3 text-orange-600 hover:text-orange-900 cursor-pointer"
                onClick={() => toggleBrand(b)}
              />
            </span>
          ))}

          {filters.selectedStorages.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full font-medium"
            >
              {language === 'fa' ? `حافظه: ${s}` : `Storage: ${s}`}
              <X
                className="w-3 h-3 text-gray-500 hover:text-gray-900 cursor-pointer"
                onClick={() => toggleStorage(s)}
              />
            </span>
          ))}

          {filters.selectedNetworks.map((n) => (
            <span
              key={n}
              className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full font-medium"
            >
              {n}
              <X
                className="w-3 h-3 text-gray-500 hover:text-gray-900 cursor-pointer"
                onClick={() => toggleNetwork(n)}
              />
            </span>
          ))}

          {filters.specialOffers.map((o) => (
            <span
              key={o}
              className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold"
            >
              {o === 'onSale' ? t.onSaleOffer : o === 'freeShipping' ? t.freeShippingOffer : t.newArrivalOffer}
              <X
                className="w-3 h-3 text-emerald-600 hover:text-emerald-900 cursor-pointer"
                onClick={() => toggleSpecialOffer(o)}
              />
            </span>
          ))}

          <button
            onClick={resetFilters}
            className="text-[11px] text-gray-500 hover:text-orange-600 underline font-semibold ml-1 rtl:mr-1 cursor-pointer"
          >
            {t.clearAll}
          </button>
        </div>
      )}

      {/* Grid of Products */}
      {sortedPhones.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {sortedPhones.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            {language === 'fa' ? 'هیچ محصولی با فیلترهای انتخابی شما یافت نشد' : 'No phones match your selected filters'}
          </h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            {language === 'fa' 
              ? 'لطفاً فیلترهای اعمال‌شده را تغییر دهید یا بازنشانی کنید تا تمام گوشی‌های هوشمند موجود نمایش داده شوند.' 
              : 'Try loosening your price range or clearing selected brand/storage filters to explore all flagship smartphones.'}
          </p>
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            {t.clearAll}
          </button>
        </div>
      )}
    </div>
  );
};

