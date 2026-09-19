import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  RotateCcw,
  Truck,
  PhoneCall,
  Mail,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Cpu
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRANSLATIONS, formatNumber, formatPrice } from '../i18n/translations';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_EN: FAQItem[] = [
  {
    question: 'Are all smartphones sold by MobiTech Direct factory unlocked?',
    answer: 'Yes, 100%. Every single device is direct from the manufacturer factory unlocked. There is zero carrier branding, bloatware, or contract lock. You can pop in any SIM or activate an eSIM from Verizon, AT&T, T-Mobile, or international carriers immediately.'
  },
  {
    question: 'How does the complimentary 2-Year Direct Protection Plan work?',
    answer: 'Unlike other retailers that charge hundreds for extended protection, MobiTech Direct includes a full 2-year hardware warranty on every smartphone purchase. This covers motherboard failures, optical sensor issues, display defects, and battery capacity drops below 80%.'
  },
  {
    question: 'What is your return policy if I change my mind?',
    answer: 'We provide a 30-day risk-free return window. If you are not completely satisfied with your phone, initiate a return via our portal for a prepaid FedEx return label. We charge zero restocking fees on returned items in original condition.'
  },
  {
    question: 'How quickly will my smartphone order ship?',
    answer: 'All orders placed before 3:00 PM EST Monday through Friday ship same-day via FedEx 2-Day Air. You will receive an automated tracking number with real-time GPS delivery notifications.'
  }
];

const FAQS_FA: FAQItem[] = [
  {
    question: 'آیا کلیه گوشی‌های موبی‌تک آنلاک فابریک کارخانه هستند؟',
    answer: 'بله، ۱۰۰٪. تمامی پرچمداران به صورت مستقیم و آنلاک فابریک کارخانه عرضه می‌شوند. هیچ‌گونه قفل اپراتوری یا نرم‌افزار مزاحم وجود ندارد و به محض قرار دادن سیم‌کارت یا فعال‌سازی eSIM کلیه شبکه‌های داخلی و بین‌المللی با سرعت 5G فعال می‌شوند.'
  },
  {
    question: 'گارانتی طلایی ۲ ساله موبی‌تک شامل چه مواردی می‌شود؟',
    answer: 'برخلاف سایر فروشگاه‌ها که بابت بیمه و گارانتی مبالغ سنگینی دریافت می‌کنند، موبی‌تک دایرکت گارانتی ۲ ساله جامع سخت‌افزاری را رایگان ارائه می‌دهد. این پوشش شامل سوختگی برد، افت سلامت باتری به زیر ۸۰٪، پیکسل‌سوختگی صفحه و خطاهای ماژول دوربین است.'
  },
  {
    question: 'شرایط بازگشت کالا و انصراف از خرید به چه صورت است؟',
    answer: 'ما ضمانت ۳۰ روزه بازگشت بی‌قیدوشرط کالا را ارائه می‌دهیم. در صورتی که به هر دلیلی از خرید خود رضایت نداشتید، بدون هیچ‌گونه جریمه یا کسر وجه، تمام مبلغ پرداختی ظرف ۲۴ ساعت عودت داده می‌شود.'
  },
  {
    question: 'سفارش‌ها با چه سرعتی و با چه روشی ارسال می‌شوند؟',
    answer: 'کلیه سفارش‌های ثبت‌شده قبل از ساعت ۱۵:۰۰ در همان روز کاری آماده‌سازی شده و از طریق پست اکسپرس هوایی با بسته‌بندی ضدضربه و کد رهگیری لحظه‌ای پیامکی ارسال می‌گردند.'
  }
];

export const SupportPage: React.FC = () => {
  const { language, navigateTo } = useStore();
  const t = TRANSLATIONS[language];

  // Warranty lookup tool state
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    found: boolean;
    model?: string;
    serial?: string;
    expires?: string;
    status?: string;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Trade-in calculator state
  const [tradeBrand, setTradeBrand] = useState('Apple');
  const [tradeCondition, setTradeCondition] = useState('flawless');

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupQuery.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setLookupResult({
        found: true,
        model: language === 'fa' ? 'گوشی پرچمدار رسمی (ثبت در سامانه موبی‌تک)' : 'Certified Flagship (MobiTech Direct Registered)',
        serial: lookupQuery.toUpperCase(),
        expires: language === 'fa' ? '۲۲ مهر ۱۴۰۵ (۲۴ ماه پوشش طلایی)' : 'October 14, 2026',
        status: language === 'fa' ? 'گارانتی فعال طلایی (۲۴ ماه باقی‌مانده)' : 'Active Coverage (24 Months Remaining)'
      });
    }, 600);
  };

  const getEstimatedTradeValue = () => {
    let base = 350;
    if (tradeBrand === 'Apple') base = 420;
    if (tradeBrand === 'Samsung') base = 380;
    if (tradeBrand === 'Google') base = 300;

    if (tradeCondition === 'flawless') return base;
    if (tradeCondition === 'good') return Math.round(base * 0.85);
    return Math.round(base * 0.65);
  };

  const faqs = language === 'fa' ? FAQS_FA : FAQS_EN;

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20 animate-fade-in">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-500">
            <button
              onClick={() => navigateTo('home')}
              className="hover:text-orange-600 font-medium transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'خانه' : 'Home'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 rtl:rotate-180" />
            <span className="font-bold text-gray-900">
              {language === 'fa' ? 'مرکز پشتیبانی و استعلام گارانتی ۲ ساله' : 'Support & 2-Year Warranty Portal'}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            {language === 'fa' ? 'پشتیبانی تخصصی: ۲۴ ساعته ۷ روز هفته' : 'Customer Care: 24/7 Available'}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Header Hero */}
        <div className="bg-[#18181b] rounded-2xl p-6 sm:p-10 text-white shadow-md mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400 text-xs font-black uppercase tracking-wider">
                {language === 'fa' ? 'آرامش خاطر با ضمانت موبی‌تک دایرکت' : 'MobiTech Direct Peace of Mind'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">
              {language === 'fa' ? 'مرکز خدمات پس از فروش و پشتیبانی' : 'Support & Protection Center'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              {language === 'fa'
                ? 'استعلام وضعیت گارانتی ۲ ساله با کد رهگیری یا سریال، تخمین ارزش طرح تعویض گوشی کارکرده با پرچمدار نو، و ارتباط با متخصصان فنی.'
                : 'Check your 2-year warranty status, estimate instant trade-in credit for your existing phone, or get in touch with our certified hardware specialists.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('home')}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'مشاهده کاتالوگ گوشی‌ها' : 'Browse Smartphones'}
            </button>
          </div>
        </div>

        {/* 2 Interactive Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tool 1: Warranty Check */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {language === 'fa' ? 'استعلام وضعیت گارانتی و اصالت دستگاه' : 'Verify Warranty & Coverage Status'}
                </h3>
                <p className="text-xs text-gray-500">
                  {language === 'fa' ? 'شماره سفارش یا شماره ۱۵ رقمی IMEI دستگاه را وارد نمایید' : 'Enter your order number or 15-digit IMEI number'}
                </p>
              </div>
            </div>

            <form onSubmit={handleLookup} className="space-y-3 mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={lookupQuery}
                  onChange={(e) => setLookupQuery(e.target.value)}
                  placeholder={language === 'fa' ? 'مثال: MOBI-849201 یا 354892018492019' : 'e.g. MOBI-849201 or 354892018492019'}
                  className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-gray-900 font-mono placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  dir="ltr"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>
                    {isSearching
                      ? (language === 'fa' ? 'در حال بررسی...' : 'Checking...')
                      : (language === 'fa' ? 'استعلام وضعیت' : 'Check Status')}
                  </span>
                </button>
              </div>
            </form>

            {lookupResult && (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs animate-fade-in space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{lookupResult.status}</span>
                </div>
                <div className="text-gray-600 space-y-0.5 pt-1">
                  <div><strong>{language === 'fa' ? 'مدل ثبت‌شده:' : 'Device:'}</strong> {lookupResult.model}</div>
                  <div><strong>{language === 'fa' ? 'شناسه سریال:' : 'Identifier:'}</strong> <span className="font-mono" dir="ltr">{lookupResult.serial}</span></div>
                  <div><strong>{language === 'fa' ? 'اعتبار گارانتی تا:' : 'Coverage Valid Through:'}</strong> {lookupResult.expires}</div>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-gray-150 text-[11px] text-gray-500">
              {language === 'fa'
                ? '*کلیه سفارش‌های ارسالی موبی‌تک دایرکت دارای گواهی ثبت‌شده ۲۴ ماهه تعویض قطعات و خدمات ویژه شرکتی هستند.'
                : '*All MobiTech Direct shipments include registered 24-month comprehensive repair and replacement certificates.'}
            </div>
          </div>

          {/* Tool 2: Trade-In Credit Calculator */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {language === 'fa' ? 'محاسبه‌گر آنلاین طرح تعویض گوشی قدیمی' : 'Instant Smartphone Trade-In Estimator'}
                </h3>
                <p className="text-xs text-gray-500">
                  {language === 'fa' ? 'اعتبار حاصل از گوشی قدیمی خود را روی قیمت پرچمدار جدید اعمال کنید' : 'Apply credit directly towards your brand-new flagship'}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs mb-5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    {language === 'fa' ? 'برند گوشی شما' : 'Your Brand'}
                  </label>
                  <select
                    value={tradeBrand}
                    onChange={(e) => setTradeBrand(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-2 font-semibold text-gray-800 focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value="Apple">Apple iPhone</option>
                    <option value="Samsung">Samsung Galaxy</option>
                    <option value="Google">Google Pixel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    {language === 'fa' ? 'وضعیت ظاهری و فنی' : 'Condition'}
                  </label>
                  <select
                    value={tradeCondition}
                    onChange={(e) => setTradeCondition(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-2 font-semibold text-gray-800 focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value="flawless">
                      {language === 'fa' ? 'در حد نو / بدون خط و خش' : 'Flawless / Like New'}
                    </option>
                    <option value="good">
                      {language === 'fa' ? 'خوب (خط و خش جزئی)' : 'Good (Minor scuffs)'}
                    </option>
                    <option value="fair">
                      {language === 'fa' ? 'متوسط (نشانه‌های کارکرد)' : 'Fair (Visible wear)'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Result Callout */}
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-orange-700 uppercase block">
                    {language === 'fa' ? 'اعتبار تخمینی بازخرید' : 'Estimated Trade Credit'}
                  </span>
                  <span className="text-2xl font-black text-gray-900 font-mono" dir="ltr">
                    {formatPrice(getEstimatedTradeValue(), language)}
                  </span>
                </div>
                <button
                  onClick={() => navigateTo('home')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>{language === 'fa' ? 'طرح تعویض و خرید' : 'Trade & Shop'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>

            <div className="text-[11px] text-gray-500">
              {language === 'fa'
                ? '*بسته پستی ضدضربه رایگان برای ارسال گوشی شما تحویل داده می‌شود و مبلغ به حساب شما منظور می‌گردد.'
                : '*We ship you a free prepaid padded return kit. Credit is credited directly to your original payment method.'}
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-black text-gray-900">
              {language === 'fa' ? 'پرسش‌های متداول مشتریان' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left rtl:text-right flex items-center justify-between gap-4 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-150 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Contact Channels */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <h3 className="text-base font-bold text-gray-900 mb-4">
            {language === 'fa' ? 'نیاز به راهنمایی یا مشاوره تلفنی دارید؟' : 'Need Immediate Hardware Assistance?'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-150">
              <PhoneCall className="w-5 h-5 text-orange-500 shrink-0" />
              <div>
                <strong className="block text-gray-900">
                  {language === 'fa' ? 'خط مستقیم پشتیبانی تلفنی' : 'Phone Support Line'}
                </strong>
                <span className="text-gray-500" dir="ltr">1-800-MOBI-TECH (۹ صبح تا ۹ شب)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-150">
              <Mail className="w-5 h-5 text-orange-500 shrink-0" />
              <div>
                <strong className="block text-gray-900">
                  {language === 'fa' ? 'میز ایمیل کارشناسان سخت‌افزار' : 'Email Specialist Desk'}
                </strong>
                <span className="text-gray-500" dir="ltr">support@mobitechdirect.com (&lt;۱۵ دقیقه پاسخ)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
