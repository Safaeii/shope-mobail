import React from 'react';
import { X, SlidersHorizontal, Trash2, ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';

export const CompareModal: React.FC = () => {
  const {
    compareList,
    isCompareOpen,
    setIsCompareOpen,
    toggleCompare,
    clearCompare,
    addToCart,
  } = useStore();

  if (!isCompareOpen || compareList.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCompareOpen(false)}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 animate-fade-in border border-gray-100 flex flex-col max-h-[90vh]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#fafafa]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900">
                  Side-by-Side Phone Comparison
                </h2>
                <p className="text-xs text-gray-500">
                  Comparing {compareList.length} flagship smartphone{compareList.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearCompare}
                className="text-xs text-gray-500 hover:text-red-600 flex items-center gap-1 font-semibold px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
              <button
                onClick={() => setIsCompareOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="flex-1 overflow-x-auto p-4 sm:p-6">
            <div className="min-w-[600px]">
              {/* Product Header Cards */}
              <div className="grid grid-cols-5 gap-4 pb-6 border-b border-gray-200">
                <div className="col-span-1 font-bold text-xs uppercase tracking-wider text-gray-400 flex items-end pb-2">
                  Smartphones
                </div>
                {compareList.map((phone) => (
                  <div key={phone.id} className="col-span-1 text-center flex flex-col items-center relative">
                    <button
                      onClick={() => toggleCompare(phone)}
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center"
                      title="Remove from comparison"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <div className="w-24 h-24 p-2 bg-gray-50 rounded-xl mb-2 flex items-center justify-center">
                      <img src={phone.image} alt={phone.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-bold text-gray-900 line-clamp-1">{phone.name}</span>
                    <span className="text-sm font-extrabold text-orange-600 font-mono mt-1">
                      ${phone.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => addToCart(phone)}
                      className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md flex items-center gap-1 shadow-xs"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              {/* Specs Rows */}
              <div className="divide-y divide-gray-100 text-xs">
                {/* Brand */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">Brand</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="font-semibold text-gray-900">{p.brand}</div>
                  ))}
                </div>

                {/* Rating */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">User Rating</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-amber-500 font-bold">
                      ★ {p.rating} ({p.reviewsCount})
                    </div>
                  ))}
                </div>

                {/* Display */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">Display</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-gray-700 leading-snug">{p.specs.display}</div>
                  ))}
                </div>

                {/* Processor */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">Chipset</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-gray-700 font-medium">{p.specs.chip}</div>
                  ))}
                </div>

                {/* Main Camera */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">Camera Setup</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-gray-700 leading-snug">{p.specs.camera}</div>
                  ))}
                </div>

                {/* Battery */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">Battery</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-gray-700">{p.specs.battery}</div>
                  ))}
                </div>

                {/* Storage options */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">Storage Tiers</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-gray-700 font-mono text-[11px]">
                      {p.specs.storage.join(', ')}
                    </div>
                  ))}
                </div>

                {/* Operating System */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">OS</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-gray-700">{p.specs.os}</div>
                  ))}
                </div>

                {/* Weight */}
                <div className="grid grid-cols-5 gap-4 py-3">
                  <div className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">Weight</div>
                  {compareList.map((p) => (
                    <div key={p.id} className="text-gray-700 font-mono">{p.specs.weight}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Bottom floating tray when 1+ items are selected for compare
export const CompareFloatingTray: React.FC = () => {
  const { compareList, clearCompare, setIsCompareOpen, toggleCompare } = useStore();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-gray-900 text-white rounded-2xl shadow-2xl px-4 sm:px-6 py-3 border border-gray-700/80 flex items-center gap-4 sm:gap-6 animate-slide-up max-w-[95vw]">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-orange-400">
          Compare ({compareList.length}/4)
        </span>
        <div className="flex items-center -space-x-2">
          {compareList.map((p) => (
            <div
              key={p.id}
              className="w-8 h-8 rounded-full bg-white p-0.5 border-2 border-gray-900 overflow-hidden relative group"
              title={p.name}
            >
              <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={clearCompare}
          className="text-xs text-gray-400 hover:text-white px-2 py-1 transition-colors"
        >
          Clear
        </button>
        <button
          onClick={() => setIsCompareOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-orange-500/25 cursor-pointer"
        >
          <span>Compare Specs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
