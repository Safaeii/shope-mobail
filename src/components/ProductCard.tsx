import React, { useState } from 'react';
import { Heart, Star, Check, Eye } from 'lucide-react';
import { Phone } from '../types';
import { useStore } from '../store/useStore';
import { TRANSLATIONS, formatPrice, formatNumber, getTranslatedColor } from '../i18n/translations';

interface ProductCardProps {
  phone: Phone;
}

export const ProductCard: React.FC<ProductCardProps> = ({ phone }) => {
  const {
    language,
    addToCart,
    wishlist,
    toggleWishlist,
    isInCompare,
    toggleCompare,
    navigateTo,
  } = useStore();

  const t = TRANSLATIONS[language];
  const isFavorited = wishlist.includes(phone.id);
  const isComparing = isInCompare(phone.id);
  const [selectedColor, setSelectedColor] = useState(phone.colors[0]?.name || '');
  const [selectedStorage, setSelectedStorage] = useState(phone.specs.storage[0] || '128GB');
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const handleGoToDetail = () => {
    navigateTo('product-detail', { phoneId: phone.id });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(phone, selectedColor, selectedStorage, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1600);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(phone.id);
  };

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleCompare(phone);
  };

  return (
    <div 
      id={`product-card-${phone.id}`}
      className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col p-4 relative"
    >
      {/* Top action row: Badges and Wishlist */}
      <div className="flex items-center justify-between gap-2 mb-2 z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          {phone.onSale && (
            <span className="text-[10px] font-extrabold uppercase bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded">
              {language === 'fa' ? 'تخفیف ویژه' : 'Sale'}
            </span>
          )}
          {phone.isNewArrival && (
            <span className="text-[10px] font-extrabold uppercase bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 rounded">
              {language === 'fa' ? 'جدید' : 'New'}
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          id={`wishlist-btn-${phone.id}`}
          onClick={handleToggleWishlist}
          aria-label={t.wishlist}
          className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isFavorited ? 'fill-red-500 text-red-500' : 'stroke-[2]'
            }`}
          />
        </button>
      </div>

      {/* Image Area with Quick View overlay */}
      <div
        onClick={handleGoToDetail}
        className="relative w-full aspect-square bg-[#fbfbfb] rounded-lg overflow-hidden flex items-center justify-center p-3 mb-3 cursor-pointer group-hover:bg-[#f6f6f6] transition-colors"
      >
        <img
          src={phone.image}
          alt={phone.name}
          className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 text-gray-900 text-xs font-bold py-1.5 px-3 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            {t.quickSpecs}
          </span>
        </div>
      </div>

      {/* Color Swatches */}
      <div className="flex items-center gap-1.5 mb-2.5">
        {phone.colors.slice(0, 4).map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedColor(c.name);
            }}
            title={getTranslatedColor(c.name, language)}
            className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${c.bgClass} ${
              selectedColor === c.name
                ? 'ring-2 ring-orange-500 ring-offset-1 scale-110'
                : 'border-black/20 hover:scale-110'
            }`}
          />
        ))}
        {phone.colors.length > 4 && (
          <span className="text-[10px] text-gray-400 font-semibold ml-0.5">
            +{phone.colors.length - 4}
          </span>
        )}
      </div>

      {/* Title & Subtitle */}
      <div className="flex-1">
        <h3
          onClick={handleGoToDetail}
          className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors cursor-pointer line-clamp-1"
        >
          {phone.name}
        </h3>
        <p className="text-[11px] text-gray-500 font-medium mt-0.5 mb-1.5">
          {phone.subtitle}
        </p>

        {/* Ratings */}
        <div className="flex items-center gap-1 text-xs mb-2">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(phone.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-gray-700">
            {phone.rating.toFixed(1)}
          </span>
          <span className="text-[11px] text-gray-400">
            ({formatNumber(phone.reviewsCount, language)})
          </span>
        </div>

        {/* Price display */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base sm:text-lg font-black text-gray-900 font-mono tracking-tight">
            {formatPrice(phone.price, language)}
          </span>
          {phone.originalPrice && (
            <span className="text-xs text-gray-400 line-through font-mono">
              ${phone.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Compare Checkbox */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-between mb-3 text-xs">
        <label
          onClick={handleToggleCompare}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer select-none group/comp"
        >
          <div
            className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-colors ${
              isComparing
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'border-gray-300 bg-white group-hover/comp:border-gray-400'
            }`}
          >
            {isComparing && <Check className="w-2.5 h-2.5 stroke-[3]" />}
          </div>
          <span className="text-[11px] font-medium">{t.compare}</span>
        </label>
        <span className="text-[10px] text-emerald-600 font-semibold">
          {t.inStock}
        </span>
      </div>

      {/* Orange ADD TO CART Button */}
      <button
        id={`add-to-cart-btn-${phone.id}`}
        type="button"
        onClick={handleAddToCart}
        className={`w-full py-2.5 px-3 rounded-md text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer ${
          isAddedRecently
            ? 'bg-emerald-600 text-white'
            : 'bg-orange-500 hover:bg-orange-600 active:scale-98 text-white shadow-orange-500/20'
        }`}
      >
        {isAddedRecently ? (
          <>
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>{t.added}</span>
          </>
        ) : (
          <span>{t.addToCart}</span>
        )}
      </button>
    </div>
  );
};

