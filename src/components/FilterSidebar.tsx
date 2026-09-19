import React from 'react';
import { SlidersHorizontal, RotateCcw, ChevronDown, Check } from 'lucide-react';
import { useStore } from '../store/useStore';
import { PHONES_DATA } from '../data/phones';
import { TRANSLATIONS, formatPrice } from '../i18n/translations';

interface FilterSidebarProps {
  isMobile?: boolean;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ isMobile = false }) => {
  const {
    language,
    filters,
    toggleBrand,
    setPriceRange,
    toggleStorage,
    toggleNetwork,
    toggleSpecialOffer,
    resetFilters,
    setIsMobileFilterOpen,
  } = useStore();

  const t = TRANSLATIONS[language];

  const brands = [
    { name: 'Apple', label: language === 'fa' ? 'اپل (Apple)' : 'Apple', count: PHONES_DATA.filter((p) => p.brand === 'Apple').length },
    { name: 'Samsung', label: language === 'fa' ? 'سامسونگ (Samsung)' : 'Samsung', count: PHONES_DATA.filter((p) => p.brand === 'Samsung').length },
    { name: 'Google', label: language === 'fa' ? 'گوگل (Google)' : 'Google', count: PHONES_DATA.filter((p) => p.brand === 'Google').length },
    { name: 'OnePlus', label: language === 'fa' ? 'وان‌پلاس (OnePlus)' : 'OnePlus', count: PHONES_DATA.filter((p) => p.brand === 'OnePlus').length },
    { name: 'Xiaomi', label: language === 'fa' ? 'شیائومی (Xiaomi)' : 'Xiaomi', count: PHONES_DATA.filter((p) => p.brand === 'Xiaomi').length },
  ];

  const storages = ['128GB', '256GB', '512GB', '1TB'];
  const networks = [
    { id: '5G', label: language === 'fa' ? 'شبکه پرسرعت 5G' : '5G Network' },
    { id: 'Unlocked', label: language === 'fa' ? 'آنلاک شرکتی فابریک' : 'Factory Unlocked' },
    { id: 'Dual SIM', label: language === 'fa' ? 'دو سیم‌کارت همزمان' : 'Dual SIM' },
    { id: 'Wi-Fi 7', label: language === 'fa' ? 'وای‌فای ۷ (Wi-Fi 7)' : 'Wi-Fi 7' },
  ];

  const specialOffers = [
    { id: 'onSale', label: t.onSaleOffer },
    { id: 'freeShipping', label: t.freeShippingOffer },
    { id: 'newArrival', label: t.newArrivalOffer },
  ];

  const activeFiltersCount =
    filters.selectedBrands.length +
    filters.selectedStorages.length +
    filters.selectedNetworks.length +
    filters.specialOffers.length +
    (filters.maxPrice < 2000 || filters.minPrice > 400 ? 1 : 0);

  return (
    <aside className={`bg-white rounded-xl border border-gray-200 p-5 ${isMobile ? 'shadow-none border-0' : 'shadow-xs'}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-orange-500" />
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            {t.filtersTitle}
          </h2>
          {activeFiltersCount > 0 && (
            <span className="bg-orange-100 text-orange-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </div>

        {activeFiltersCount > 0 && (
          <button
            id="reset-filters-btn"
            onClick={resetFilters}
            className="text-xs font-semibold text-gray-500 hover:text-orange-600 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{t.clearAll}</span>
          </button>
        )}
      </div>

      <div className="space-y-6 pt-4">
        {/* Brands */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              {t.brands}
            </h3>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="space-y-2">
            {brands.map((brand) => {
              const checked = filters.selectedBrands.includes(brand.name);
              return (
                <label
                  key={brand.name}
                  className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-900 cursor-pointer select-none group py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      onClick={() => toggleBrand(brand.name)}
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        checked
                          ? 'bg-orange-500 border-orange-500 text-white'
                          : 'border-gray-300 bg-white group-hover:border-gray-400'
                      }`}
                    >
                      {checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className={checked ? 'font-semibold text-gray-900' : ''}>
                      {brand.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 bg-gray-100 px-1.5 py-0.2 rounded font-mono">
                    {brand.count}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        {/* Price Range */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              {t.priceRange}
            </h3>
            <span className="text-xs font-bold text-orange-600 font-mono">
              ${filters.minPrice} - ${filters.maxPrice} {language === 'fa' ? 'دلار' : 'USD'}
            </span>
          </div>
          
          <div className="space-y-2 pt-1">
            <input
              id="price-range-slider"
              type="range"
              min="400"
              max="2000"
              step="50"
              value={filters.maxPrice}
              onChange={(e) => setPriceRange(filters.minPrice, Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span>$400</span>
              <span>$1,200</span>
              <span>$2,000+</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        {/* Storage */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              {t.storageCapacity}
            </h3>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {storages.map((storage) => {
              const checked = filters.selectedStorages.includes(storage);
              return (
                <button
                  key={storage}
                  type="button"
                  onClick={() => toggleStorage(storage)}
                  className={`text-xs py-1.5 px-3 rounded-md border text-center font-medium transition-all cursor-pointer ${
                    checked
                      ? 'bg-orange-500 border-orange-500 text-white shadow-xs font-semibold'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  {storage}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        {/* Network & Connectivity */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              {t.connectivityNetwork}
            </h3>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="space-y-2">
            {networks.map((item) => {
              const checked = filters.selectedNetworks.includes(item.id);
              return (
                <label
                  key={item.id}
                  className="flex items-center gap-2.5 text-xs text-gray-700 hover:text-gray-900 cursor-pointer select-none group"
                >
                  <div
                    onClick={() => toggleNetwork(item.id)}
                    className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                      checked
                        ? 'bg-orange-500 border-orange-500 text-white'
                        : 'border-gray-300 bg-white group-hover:border-gray-400'
                    }`}
                  >
                    {checked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className={checked ? 'font-semibold text-gray-900' : ''}>
                    {item.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        {/* Special Offers */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            {t.specialOffers}
          </h3>
          <div className="space-y-2">
            {specialOffers.map((offer) => {
              const checked = filters.specialOffers.includes(offer.id);
              return (
                <label
                  key={offer.id}
                  className="flex items-center gap-2.5 text-xs text-gray-700 hover:text-gray-900 cursor-pointer select-none group"
                >
                  <div
                    onClick={() => toggleSpecialOffer(offer.id)}
                    className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                      checked
                        ? 'bg-orange-500 border-orange-500 text-white'
                        : 'border-gray-300 bg-white group-hover:border-gray-400'
                    }`}
                  >
                    {checked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className={checked ? 'font-semibold text-orange-600' : ''}>
                    {offer.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {isMobile && (
          <div className="pt-4">
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-sm tracking-wider uppercase shadow-md shadow-orange-500/20 cursor-pointer"
            >
              {language === 'fa' ? 'مشاهده نتایج فیلتر' : 'Apply Filters'}
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

