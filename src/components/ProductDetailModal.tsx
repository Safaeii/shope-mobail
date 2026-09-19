import React, { useState } from 'react';
import { X, Star, Heart, Check, Truck, ShieldCheck, ShoppingBag, Zap, Share2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Phone } from '../types';

interface ProductDetailContentProps {
  phone: Phone;
  onClose: () => void;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ phone, onClose }) => {
  const {
    addToCart,
    wishlist,
    toggleWishlist,
    setIsCheckoutOpen,
    showToast,
  } = useStore();

  const isFavorited = wishlist.includes(phone.id);

  const [selectedImage, setSelectedImage] = useState(phone.gallery[0] || phone.image);
  const [selectedColor, setSelectedColor] = useState(phone.colors[0]?.name || '');
  const [selectedStorage, setSelectedStorage] = useState(phone.specs.storage[0] || '128GB');
  const [quantity, setQuantity] = useState(1);

  // Dynamic price adjustment based on storage tier
  const getAdjustedPrice = () => {
    let base = phone.price;
    if (selectedStorage === '256GB') base += 100;
    else if (selectedStorage === '512GB') base += 200;
    else if (selectedStorage === '1TB') base += 400;
    return base;
  };

  const currentPrice = getAdjustedPrice();

  const handleAddToCart = () => {
    addToCart(phone, selectedColor, selectedStorage, quantity);
  };

  const handleBuyNow = () => {
    addToCart(phone, selectedColor, selectedStorage, quantity);
    onClose();
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 animate-fade-in border border-gray-100">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
            {/* Left: Gallery & Image Display */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square bg-[#fbfbfb] rounded-xl overflow-hidden border border-gray-100 p-6 flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt={phone.name}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                />

                {phone.onSale && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black uppercase px-2.5 py-1 rounded-md shadow-xs">
                    Special Offer
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {phone.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {phone.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 h-16 rounded-lg border p-1 shrink-0 transition-all ${
                        selectedImage === img
                          ? 'border-orange-500 ring-2 ring-orange-500/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Assurances */}
              <div className="bg-gray-50 rounded-xl p-3.5 space-y-2 border border-gray-100 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Free Express Delivery (2-3 Business Days)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2-Year Full Hardware & Battery Warranty</span>
                </div>
              </div>
            </div>

            {/* Right: Info, Specs & Actions */}
            <div className="flex flex-col">
              {/* Brand & Category */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-0.5 rounded">
                  {phone.brand} Flagship
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    title="Share phone"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleWishlist(phone.id)}
                    className="p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-gray-100"
                    title="Toggle wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {phone.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 mb-4">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(phone.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-800">
                  {phone.rating}
                </span>
                <span className="text-xs text-gray-400">
                  ({phone.reviewsCount} customer reviews)
                </span>
                <span className="text-xs text-emerald-600 font-semibold ml-auto flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Verified In Stock
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pb-4 border-b border-gray-100">
                <span className="text-3xl font-black text-gray-900 font-mono">
                  ${currentPrice.toLocaleString()}
                </span>
                {phone.originalPrice && (
                  <span className="text-sm text-gray-400 line-through font-mono">
                    ${(phone.originalPrice + (currentPrice - phone.price)).toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-gray-500 font-medium">
                  or ${(currentPrice / 24).toFixed(2)}/mo. for 24 mo. with 0% APR
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 mt-3 mb-4 leading-relaxed">
                {phone.description}
              </p>

              {/* Color Selection */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Color: <strong className="text-orange-600">{selectedColor}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {phone.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${c.bgClass} ${
                        selectedColor === c.name
                          ? 'ring-2 ring-orange-500 ring-offset-2 scale-110 border-white'
                          : 'border-black/20 hover:scale-105'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Storage Selection */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Storage Capacity
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {phone.specs.storage.map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedStorage(st)}
                      className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all border ${
                        selectedStorage === st
                          ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specifications snippet table */}
              <div className="bg-gray-50 rounded-xl p-3.5 mb-5 border border-gray-100 text-xs space-y-1.5">
                <div className="flex justify-between py-0.5 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium">Display</span>
                  <span className="font-semibold text-gray-800 text-right">{phone.specs.display}</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium">Processor</span>
                  <span className="font-semibold text-gray-800 text-right">{phone.specs.chip}</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium">Main Camera</span>
                  <span className="font-semibold text-gray-800 text-right">{phone.specs.camera}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-gray-500 font-medium">Battery & Charging</span>
                  <span className="font-semibold text-gray-800 text-right">{phone.specs.battery}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="modal-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="w-full sm:flex-1 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  id="modal-buy-now-btn"
                  onClick={handleBuyNow}
                  className="w-full sm:flex-1 bg-gray-900 hover:bg-black active:scale-98 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span>Buy Now</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useStore();

  if (!selectedProduct) return null;

  return (
    <ProductDetailContent
      key={selectedProduct.id}
      phone={selectedProduct}
      onClose={() => setSelectedProduct(null)}
    />
  );
};
