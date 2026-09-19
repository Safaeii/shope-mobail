import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Check } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS, formatPrice, formatNumber } from '../i18n/translations';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    setIsCheckoutOpen,
    showToast,
    language,
  } = useStore();

  const t = TRANSLATIONS[language];
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const { subtotal, shipping, tax, total, itemCount } = getCartTotal();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 500;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FLAGSHIP' || promoCode.trim().toUpperCase() === 'SAVE50') {
      setPromoApplied(true);
      showToast(
        language === 'fa'
          ? 'کد تخفیف اعمال شد: ۵۰ دلار از کل مبلغ کسر گردید!'
          : 'Promo code applied: $50 discount applied at checkout!',
        'success'
      );
    } else {
      showToast(
        language === 'fa'
          ? 'کد تخفیف معتبر نیست. کدهای FLAGSHIP یا SAVE50 را امتحان کنید.'
          : 'Invalid promo code. Try "FLAGSHIP" or "SAVE50"',
        'info'
      );
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className={`fixed inset-y-0 ${language === 'fa' ? 'left-0 pr-10' : 'right-0 pl-10'} max-w-full flex`}>
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#fafafa]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-gray-900">
                {language === 'fa'
                  ? `سبد خرید شما (${formatNumber(itemCount, language)})`
                  : `Shopping Cart (${itemCount})`}
              </h2>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="p-4 bg-orange-50/70 border-b border-orange-100">
            {remainingForFreeShipping > 0 ? (
              <div>
                <p className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
                  <Truck className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>
                    {language === 'fa' ? (
                      <>
                        فقط <strong className="text-orange-600 font-bold" dir="ltr">{formatPrice(remainingForFreeShipping, language)}</strong> دیگر خرید کنید تا مشمول <span className="font-bold text-gray-900">ارسال رایگان اکسپرس</span> شوید
                      </>
                    ) : (
                      <>
                        Add <strong className="text-orange-600 font-bold">${remainingForFreeShipping}</strong> more for <span className="font-bold text-gray-900">FREE Express Shipping</span>
                      </>
                    )}
                  </span>
                </p>
                <div className="w-full h-2 bg-orange-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 transition-all duration-300 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  {language === 'fa'
                    ? 'سفارش شما شامل ارسال رایگان هوایی ۲ روزه شد!'
                    : 'You qualify for FREE Express 2-Day Shipping!'}
                </span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  {language === 'fa' ? 'سبد خرید شما خالی است' : 'Your cart is empty'}
                </h3>
                <p className="text-xs text-gray-500 max-w-xs">
                  {language === 'fa'
                    ? 'از میان برترین گوشی‌های پرچمدار و لوازم جانبی اورجینال انتخاب کنید.'
                    : 'Browse our collection of flagship mobile phones and accessories to get started.'}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'مشاهده و خرید گوشی‌ها' : 'Start Shopping'}
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex gap-3.5 p-3 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors shadow-2xs"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg bg-gray-50 p-2 shrink-0 flex items-center justify-center border border-gray-100">
                    <img
                      src={item.phone?.image || item.image}
                      alt={item.phone?.name || item.name || 'Product'}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-bold text-gray-900 truncate">
                        {item.phone?.name || item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-gray-400 hover:text-red-500 p-1 cursor-pointer"
                        title={language === 'fa' ? 'حذف از سبد' : 'Remove item'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5 mb-2">
                      {item.selectedStorage && (
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 font-medium truncate max-w-[120px]">
                          {item.selectedStorage}
                        </span>
                      )}
                      {item.selectedColor && (
                        <>
                          <span>•</span>
                          <span className="text-gray-600 truncate">{item.selectedColor}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-l-md transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-gray-800 font-mono">
                          {formatNumber(item.quantity, language)}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-r-md transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-extrabold text-gray-900 font-mono" dir="ltr">
                        {formatPrice(item.unitPrice * item.quantity, language)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with totals */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-200 bg-[#fafafa] space-y-3">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder={language === 'fa' ? 'کد تخفیف (مثال: FLAGSHIP)' : 'Promo code (e.g. FLAGSHIP)'}
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-orange-500 font-mono uppercase"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'اعمال' : 'Apply'}
                </button>
              </form>

              {promoApplied && (
                <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded-md font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>
                    {language === 'fa' ? 'کد اعمال شد: ۵۰ دلار تخفیف منظور گردید!' : 'Promo Applied: $50 off order total!'}
                  </span>
                </div>
              )}

              <div className="space-y-1.5 text-xs text-gray-600 pt-1">
                <div className="flex justify-between">
                  <span>{language === 'fa' ? 'جمع اقلام' : 'Subtotal'}</span>
                  <span className="font-mono font-semibold text-gray-900" dir="ltr">
                    {formatPrice(subtotal, language)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'fa' ? 'هزینه ارسال' : 'Shipping'}</span>
                  <span className="font-mono font-semibold text-gray-900">
                    {shipping === 0 ? (
                      <span className="text-emerald-600 font-bold">
                        {language === 'fa' ? 'رایگان' : 'FREE'}
                      </span>
                    ) : (
                      formatPrice(shipping, language)
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'fa' ? 'مالیات و عوارض (۸٪)' : 'Estimated Sales Tax (8%)'}</span>
                  <span className="font-mono font-semibold text-gray-900" dir="ltr">
                    {formatPrice(tax, language)}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>{language === 'fa' ? 'تخفیف ویژه' : 'Special Discount'}</span>
                    <span className="font-mono" dir="ltr">-$50.00</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-200">
                  <span>{language === 'fa' ? 'مبلغ قابل پرداخت' : 'Order Total'}</span>
                  <span className="font-mono text-orange-600" dir="ltr">
                    {formatPrice(Math.max(0, total - (promoApplied ? 50 : 0)), language)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-checkout-btn"
                onClick={handleProceedToCheckout}
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>{language === 'fa' ? 'تکمیل سفارش و پرداخت' : 'Proceed to Checkout'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'fa' ? 'درگاه امن ۲۵۶ بیتی' : 'Secure 256-Bit SSL'}</span>
                </span>
                <span>•</span>
                <span>{language === 'fa' ? '۲ سال ضمانت طلایی' : '2-Year Official Warranty'}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
