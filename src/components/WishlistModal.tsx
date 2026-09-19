import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { PHONES_DATA } from '../data/phones';

export const WishlistModal: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setSelectedProduct,
  } = useStore();

  if (!isWishlistOpen) return null;

  const savedPhones = PHONES_DATA.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 animate-fade-in border border-gray-100 flex flex-col max-h-[85vh]">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#fafafa]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-red-500" />
              </div>
              <h2 className="text-base font-bold text-gray-900">
                My Saved Wishlist ({savedPhones.length})
              </h2>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {savedPhones.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-red-50 text-red-400 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-gray-800">
                  No phones saved yet
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Click the heart icon on any smartphone card to save items you want to monitor or buy later.
                </p>
              </div>
            ) : (
              savedPhones.map((phone) => (
                <div
                  key={phone.id}
                  className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors"
                >
                  <div
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setSelectedProduct(phone);
                    }}
                    className="w-16 h-16 bg-gray-50 rounded-lg p-1 flex items-center justify-center cursor-pointer shrink-0"
                  >
                    <img src={phone.image} alt={phone.name} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      onClick={() => {
                        setIsWishlistOpen(false);
                        setSelectedProduct(phone);
                      }}
                      className="text-xs sm:text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors cursor-pointer truncate"
                    >
                      {phone.name}
                    </h4>
                    <span className="text-[11px] text-gray-500">{phone.subtitle}</span>
                    <div className="text-xs sm:text-sm font-extrabold text-orange-600 font-mono mt-0.5">
                      ${phone.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        addToCart(phone);
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Add to Cart</span>
                    </button>
                    <button
                      onClick={() => toggleWishlist(phone.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
