import React, { useState } from 'react';
import { Smartphone, Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS } from '../i18n/translations';

export const Footer: React.FC = () => {
  const { language, showToast, navigateTo, setIsWishlistOpen, setIsAccountOpen } = useStore();
  const t = TRANSLATIONS[language];
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast(
        language === 'fa'
          ? 'از عضویت شما در باشگاه تخفیف‌های ویژه پرچمداران موبی‌تک سپاسگزاریم!'
          : 'Thank you for subscribing to exclusive flagship discounts!',
        'success'
      );
      setEmail('');
    }
  };

  return (
    <footer id="footer-section" className="bg-[#18181b] text-white pt-12 pb-20 md:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter bar */}
        <div className="bg-[#242428] rounded-2xl p-6 sm:p-8 mb-12 border border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest block mb-1">
              {language === 'fa' ? 'باشگاه مشتریان طلایی موبی‌تک' : 'VIP Mobile Member Club'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {language === 'fa'
                ? 'عضویت در خبرنامه برای دریافت تخفیف‌های شگفت‌انگیز و اختصاصی'
                : 'Subscribe for exclusive mobile deals & flash drops!'}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {language === 'fa'
                ? '۵۰ دلار کوپن تخفیف برای اولین خرید گوشی پرچمدار به همراه دسترسی پیش‌ازموعد به معرفی پرچمداران جدید.'
                : 'Get $50 off your first flagship smartphone plus early access to newly announced hardware.'}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5 min-w-[320px]">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language === 'fa' ? 'ایمیل کاری یا شخصی خود را وارد کنید...' : 'Enter your executive email...'}
              className="bg-[#18181b] border border-gray-700 text-white rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-orange-500 flex-1"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{language === 'fa' ? 'عضو شدید' : 'Subscribed'}</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  <span>{language === 'fa' ? 'عضویت در خبرنامه' : 'Sign Up'}</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          
          {/* Customer Service */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              {language === 'fa' ? 'خدمات مشتریان' : 'Customer Service'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => navigateTo('support')}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'پیگیری آنلاین مرسوله' : 'Track My Shipment'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('support')}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? '۳۰ روز ضمانت بازگشت وجه' : '30-Day Hassle-Free Returns'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('support')}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? '۲ سال گارانتی رسمی سخت‌افزار' : '2-Year Hardware Warranty'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('support')}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'طرح تعویض گوشی کارکرده' : 'Trade-In Your Old Phone'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('deals')}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'کوپن‌ها و تخفیف‌های شگفت‌انگیز' : 'Flash Deals & Coupons'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              {language === 'fa' ? 'ارتباط با ما' : 'Contact Us'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span dir="ltr">1-800-MOBI-TECH</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span dir="ltr">support@mobitechdirect.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                <span>{language === 'fa' ? 'کالیفرنیا، دره سیلیکون، مرکز فناوری' : 'Silicon Valley Tech Center, CA'}</span>
              </li>
              <li className="text-[11px] text-gray-500 pt-1">
                {language === 'fa' ? 'همه‌روزه: ۸:۰۰ صبح تا ۲۲:۰۰' : 'Mon - Sun: 8:00 AM - 10:00 PM EST'}
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              {language === 'fa' ? 'حساب کاربری و ناوبری' : 'Account & Security'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => setIsAccountOpen(true)}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'مدیریت پروفایل VIP' : 'Manage VIP Profile'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsWishlistOpen(true)}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'گوشی‌های ذخیره‌شده و علاقه‌مندی‌ها' : 'Saved Devices & Wishlist'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('brands', { brand: 'All' })}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'دایرکتوری و راهنمای برندها' : 'Brands Directory'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('accessories')}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'تجهیزات و لوازم جانبی اورجینال' : 'Mobile Accessories Gear'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-orange-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {language === 'fa' ? 'صفحه اصلی کاتالوگ محصولات' : 'Smartphones Catalog Index'}
                </button>
              </li>
            </ul>
          </div>

          {/* About MobiTech Direct */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                <Smartphone className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-sm font-extrabold tracking-tight text-white">
                Mobi<span className="text-orange-500">Tech</span> Direct
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {language === 'fa'
                ? 'موبی‌تک دایرکت معتبرترین مرجع رسمی و تاییدشده برای خرید مستقیم جدیدترین گوشی‌های پرچمدار، دستگاه‌های آنلاک کارخانه و اکوسیستم لوازم جانبی هوشمند با تضمین اصالت کالا است.'
                : 'MobiTech Direct is the premier certified distributor of premium flagship smartphones, factory unlocked devices, and next-gen mobile ecosystem accessories.'}
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{language === 'fa' ? '© ۲۰۲۶ کلیه حقوق برای موبی‌تک دایرکت محفوظ است.' : '© 2026 MobiTech Direct Inc. All rights reserved.'}</p>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400">{language === 'fa' ? 'پرداخت امن با:' : 'Secure Payments:'}</span>
            <div className="flex items-center gap-2">
              <span className="bg-white text-gray-900 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider">VISA</span>
              <span className="bg-white text-gray-900 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider">MC</span>
              <span className="bg-white text-gray-900 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider">AMEX</span>
              <span className="bg-white text-gray-900 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider">PAYPAL</span>
              <span className="bg-white text-gray-900 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider">APPLE PAY</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
