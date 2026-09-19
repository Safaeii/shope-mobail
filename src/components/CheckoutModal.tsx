import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, ShieldCheck, Truck, ArrowRight, Smartphone, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS, formatPrice } from '../i18n/translations';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, clearCart, getCartTotal, language } = useStore();
  const { subtotal, shipping, tax, total } = getCartTotal();
  const t = TRANSLATIONS[language];

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState({
    firstName: language === 'fa' ? 'سارا' : 'Sara',
    lastName: language === 'fa' ? 'احمدی' : 'Direct',
    email: 'sara@example.com',
    address: language === 'fa' ? 'خیابان ولیعصر، پلاک ۱۲۴' : '742 Evergreen Terrace',
    city: language === 'fa' ? 'تهران' : 'San Francisco',
    state: language === 'fa' ? 'تهران' : 'CA',
    zip: '94107',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '08/28',
    cardCvc: '888',
  });

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      setOrderNumber(`MB-${Math.floor(100000 + Math.random() * 900000)}`);
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 animate-fade-in border border-gray-100">
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className={`absolute top-4 ${language === 'fa' ? 'left-4' : 'right-4'} z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center cursor-pointer`}
          >
            <X className="w-4 h-4" />
          </button>

          {isCompleted ? (
            /* Order Success View */
            <div className="p-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900">
                  {language === 'fa' ? 'از سفارش شما سپاسگزاریم!' : 'Thank You for Your Order!'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {language === 'fa'
                    ? 'سفارش پرچمدار شما با موفقیت ثبت شد و در حال آماده‌سازی برای ارسال اکسپرس است.'
                    : 'Your flagship smartphone order has been confirmed and is being prepped for express shipment.'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 max-w-md mx-auto text-left rtl:text-right text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">{language === 'fa' ? 'شماره پیگیری سفارش:' : 'Order Number:'}</span>
                  <span className="font-mono font-bold text-gray-900" dir="ltr">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{language === 'fa' ? 'نشانی تحویل:' : 'Delivery Address:'}</span>
                  <span className="font-semibold text-gray-900">{formData.address}، {formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{language === 'fa' ? 'روش ارسال:' : 'Shipping Service:'}</span>
                  <span className="font-semibold text-emerald-600">
                    {language === 'fa' ? 'پست اکسپرس بیمه‌شده هوایی ۲ روزه' : 'Express 2-Day Insured Courier'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{language === 'fa' ? 'ضمانت‌نامه:' : 'Warranty Coverage:'}</span>
                  <span className="font-semibold text-gray-900">
                    {language === 'fa' ? '۲ سال گارانتی طلایی موبی‌تک دایرکت' : '2-Year MobiTech Direct Protection'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider py-3 px-8 rounded-lg shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                {language === 'fa' ? 'بازگشت به فروشگاه' : 'Back to Store'}
              </button>
            </div>
          ) : (
            /* Checkout Form View */
            <div>
              <div className="p-5 border-b border-gray-200 bg-[#fafafa] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {language === 'fa' ? 'پرداخت امن اکسپرس' : 'Express Secure Checkout'}
                  </h3>
                  <p className="text-[11px] text-gray-500">
                    {language === 'fa'
                      ? 'تراکنش رمزنگاری‌شده ۲۵۶ بیتی SSL • موبی‌تک دایرکت'
                      : '256-Bit Encrypted Transaction • MobiTech Direct'}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Contact & Shipping */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                    {language === 'fa' ? 'اطلاعات تحویل و گیرنده' : 'Shipping Details'}
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        {language === 'fa' ? 'نام' : 'First Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs focus:bg-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        {language === 'fa' ? 'نام خانوادگی' : 'Last Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs focus:bg-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-gray-600 font-semibold mb-1">
                        {language === 'fa' ? 'نشانی کامل پستی' : 'Street Address'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs focus:bg-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        {language === 'fa' ? 'شهر' : 'City'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs focus:bg-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-semibold mb-1">
                        {language === 'fa' ? 'کد پستی' : 'ZIP / Postal Code'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs focus:bg-white focus:outline-none focus:border-orange-500 font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selection */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                    {language === 'fa' ? 'روش پرداخت' : 'Payment Method'}
                  </h4>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'border-orange-500 bg-orange-50 text-orange-600 shadow-xs'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>{language === 'fa' ? 'کارت شتاب / بانکی' : 'Credit Card'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('apple')}
                      className={`p-2.5 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        paymentMethod === 'apple'
                          ? 'border-orange-500 bg-orange-50 text-orange-600 shadow-xs'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Apple Pay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-2.5 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        paymentMethod === 'paypal'
                          ? 'border-orange-500 bg-orange-50 text-orange-600 shadow-xs'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>PayPal</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="block text-gray-600 font-semibold mb-1">
                          {language === 'fa' ? 'شماره کارت' : 'Card Number'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 font-mono text-xs focus:bg-white focus:outline-none focus:border-orange-500"
                          dir="ltr"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-gray-600 font-semibold mb-1">
                            {language === 'fa' ? 'تاریخ انقضا' : 'Exp Date'}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.cardExp}
                            onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 font-mono text-xs focus:bg-white focus:outline-none focus:border-orange-500"
                            dir="ltr"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-600 font-semibold mb-1">
                            {language === 'fa' ? 'رمز دوم / CVV2' : 'CVC / CVV'}
                          </label>
                          <input
                            type="password"
                            required
                            maxLength={4}
                            value={formData.cardCvc}
                            onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 font-mono text-xs focus:bg-white focus:outline-none focus:border-orange-500"
                            dir="ltr"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Total and Submit */}
                <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 block">
                      {language === 'fa' ? 'مبلغ نهایی قابل پرداخت' : 'Total Due'}
                    </span>
                    <span className="text-xl font-black text-gray-900 font-mono" dir="ltr">
                      {formatPrice(total, language)}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-lg shadow-md shadow-orange-500/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>{language === 'fa' ? 'در حال اتصال به درگاه...' : 'Authorizing...'}</span>
                    ) : (
                      <>
                        <span>{language === 'fa' ? 'تایید و پرداخت نهایی' : 'Place Order'}</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
