import React, { useState } from 'react';
import {
  ArrowLeft,
  Star,
  Heart,
  Truck,
  ShieldCheck,
  Check,
  ShoppingBag,
  Zap,
  Share2,
  ChevronRight,
  Cpu,
  Layers,
  Battery,
  Camera,
  Smartphone,
  RotateCcw,
  Sparkles,
  MessageSquarePlus,
  ThumbsUp,
  Award
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { PHONES_DATA } from '../data/phones';
import { REVIEWS_DATA, DEFAULT_REVIEWS } from '../data/reviews';
import { ProductReview } from '../types';
import { TRANSLATIONS, formatPrice, formatNumber, getTranslatedColor } from '../i18n/translations';

export const ProductDetailPage: React.FC = () => {
  const {
    language,
    activePhoneId,
    selectedProduct,
    navigateTo,
    addToCart,
    setIsCheckoutOpen,
    wishlist,
    toggleWishlist,
    toggleCompare,
    isInCompare,
    showToast,
  } = useStore();

  const t = TRANSLATIONS[language];

  const phone =
    (activePhoneId && PHONES_DATA.find((p) => p.id === activePhoneId)) ||
    selectedProduct ||
    PHONES_DATA[0];

  const [selectedImage, setSelectedImage] = useState(phone.gallery[0] || phone.image);
  const [selectedColor, setSelectedColor] = useState(phone.colors[0]?.name || '');
  const [selectedStorage, setSelectedStorage] = useState(phone.specs.storage[0] || '128GB');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews' | 'inbox' | 'warranty'>('specs');

  // Customer reviews state
  const initialReviews = REVIEWS_DATA[phone.id] || DEFAULT_REVIEWS;
  const [reviewsList, setReviewsList] = useState<ProductReview[]>(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  const isFavorited = wishlist.includes(phone.id);
  const isComparing = isInCompare(phone.id);

  // Storage pricing calculation
  const getStorageExtra = (storage: string) => {
    if (storage.includes('1TB')) return 300;
    if (storage.includes('512GB')) return 180;
    if (storage.includes('256GB')) return 80;
    return 0;
  };

  const calculatedPrice = phone.price + getStorageExtra(selectedStorage);
  const calculatedOriginalPrice = phone.originalPrice
    ? phone.originalPrice + getStorageExtra(selectedStorage)
    : undefined;

  const handleAddToCart = () => {
    addToCart(phone, selectedColor, selectedStorage, quantity);
  };

  const handleBuyNow = () => {
    addToCart(phone, selectedColor, selectedStorage, quantity);
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: phone.name,
        text: `Check out the ${phone.name} on MobiTech Direct!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast(
        language === 'fa'
          ? 'لینک محصول در کلیپ‌بورد کپی شد!'
          : 'Product link copied to clipboard!',
        'info'
      );
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev: ProductReview = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor.trim(),
      title: newReviewTitle.trim() || (language === 'fa' ? 'خرید عالی گوشی پرچمدار' : 'Exceptional flagship purchase'),
      comment: newReviewComment.trim(),
      rating: newReviewRating,
      date: language === 'fa' ? 'همین الان' : 'Just now',
      verified: true,
      phoneModel: `${phone.name} - ${getTranslatedColor(selectedColor, language)} ${selectedStorage}`,
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowReviewForm(false);
    setNewReviewAuthor('');
    setNewReviewTitle('');
    setNewReviewComment('');
    showToast(
      language === 'fa'
        ? 'سپاسگزاریم! دیدگاه تاییدشده شما با موفقیت منتشر گردید.'
        : 'Thank you! Your verified review has been published.',
      'success'
    );
  };

  // Related phones
  const relatedPhones = PHONES_DATA.filter((p) => p.id !== phone.id).slice(0, 3);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20 animate-fade-in">
      {/* Breadcrumbs & Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-500 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => navigateTo('home')}
              className="hover:text-orange-600 font-medium transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'خانه' : 'Home'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0 rtl:rotate-180" />
            <button
              onClick={() => navigateTo('home')}
              className="hover:text-orange-600 font-medium transition-colors cursor-pointer"
            >
              {language === 'fa' ? 'گوشی‌های هوشمند' : 'Smartphones'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0 rtl:rotate-180" />
            <button
              onClick={() => navigateTo('brands', { brand: phone.brand })}
              className="hover:text-orange-600 font-medium transition-colors cursor-pointer"
            >
              {phone.brand}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0 rtl:rotate-180" />
            <span className="font-bold text-gray-900 truncate max-w-[200px] sm:max-w-none">
              {phone.name}
            </span>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className="hidden sm:flex items-center gap-1.5 text-gray-600 hover:text-orange-600 font-bold transition-colors cursor-pointer shrink-0 ml-4 rtl:mr-4 rtl:ml-0"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{language === 'fa' ? 'بازگشت به همه گوشی‌ها' : 'Back to All Phones'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Main Product Presentation Grid */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Gallery & Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Main Stage Image */}
            <div className="relative w-full aspect-square bg-[#fafafa] rounded-2xl p-6 sm:p-8 flex items-center justify-center border border-gray-100 overflow-hidden group">
              <img
                src={selectedImage}
                alt={phone.name}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Status Badges */}
              <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex flex-col gap-1.5 z-10">
                {phone.onSale && (
                  <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow-xs">
                    {language === 'fa'
                      ? `تخفیف ${(calculatedOriginalPrice || 0) - calculatedPrice} دلاری`
                      : `Save $${(calculatedOriginalPrice || 0) - calculatedPrice}`}
                  </span>
                )}
                {phone.isNewArrival && (
                  <span className="bg-orange-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow-xs">
                    {language === 'fa' ? 'پرچمدار جدید' : 'New Flagship'}
                  </span>
                )}
              </div>

              {/* Quick Actions overlay */}
              <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 flex flex-col gap-2 z-10">
                <button
                  onClick={() => toggleWishlist(phone.id)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all ${
                    isFavorited
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-white/90 text-gray-600 hover:text-red-500'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="w-9 h-9 rounded-full bg-white/90 text-gray-600 hover:text-gray-900 flex items-center justify-center shadow-md transition-colors"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Verified Factory Sealed Seal */}
              <div className="absolute bottom-3 left-4 rtl:left-auto rtl:right-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-white/90 px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'fa' ? '۱۰۰٪ آنلاک فابریک کارخانه' : '100% Factory Unlocked'}</span>
              </div>
            </div>

            {/* Gallery Thumbnail Selector */}
            <div className="flex items-center gap-3 mt-4 w-full overflow-x-auto pb-1 justify-center">
              {phone.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gray-50 p-2 border transition-all shrink-0 flex items-center justify-center cursor-pointer ${
                    selectedImage === img
                      ? 'border-orange-500 ring-2 ring-orange-500/20 bg-white'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Comparison quick toggle */}
            <div className="mt-4 pt-3 border-t border-gray-100 w-full flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer font-semibold text-gray-700 select-none">
                <input
                  type="checkbox"
                  checked={isComparing}
                  onChange={() => toggleCompare(phone)}
                  className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-gray-300"
                />
                <span>{language === 'fa' ? 'افزودن به مقایسه همزمان' : 'Add to Side-by-Side Compare'}</span>
              </label>
              <span className="text-[11px] text-gray-400">
                {language === 'fa' ? 'امکان مقایسه تا ۴ دستگاه' : 'Compare up to 4 models'}
              </span>
            </div>
          </div>

          {/* Right Column: Configurator, Specs & Purchase Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Brand & Title */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  {phone.brand} {language === 'fa' ? 'گارانتی معتبر' : 'Certified'}
                </span>
                <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {language === 'fa' ? 'موجود در انبار - تحویل اکسپرس ظرف ۲۴ ساعت' : 'In Stock - Dispatches within 24h'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {phone.name}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                {phone.subtitle} • {phone.specs.chip}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mt-2.5 text-xs">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(phone.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-gray-900">{formatNumber(phone.rating, language)}</span>
                <span className="text-gray-400">•</span>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className="text-orange-600 hover:text-orange-700 font-semibold underline cursor-pointer"
                >
                  {formatNumber(phone.reviewsCount, language)} {language === 'fa' ? 'دیدگاه خریداران' : 'customer reviews'}
                </button>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-150 mb-6 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-black text-gray-900 font-mono" dir="ltr">
                {formatPrice(calculatedPrice, language)}
              </span>
              {calculatedOriginalPrice && (
                <span className="text-base text-gray-400 line-through font-mono" dir="ltr">
                  ${calculatedOriginalPrice.toLocaleString()}
                </span>
              )}
              {phone.onSale && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  {language === 'fa' ? '۱۰٪ تخفیف امروز' : 'Save 10% Today'}
                </span>
              )}
              <div className="w-full text-[11px] text-gray-500 mt-1">
                {language === 'fa' ? (
                  <>یا اقساط بدون بهره ۲۴ ماهه با پرداخت ماهیانه <strong dir="ltr">${Math.round(calculatedPrice / 24)} دلار</strong></>
                ) : (
                  <>Or <strong>${Math.round(calculatedPrice / 24)}/mo</strong> with 0% APR 24-month financing options.</>
                )}
              </div>
            </div>

            {/* Color Swatches */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                {language === 'fa' ? 'رنگ بدنه:' : 'Color Finish:'}{' '}
                <span className="text-orange-600 normal-case">
                  {getTranslatedColor(selectedColor, language)}
                </span>
              </label>
              <div className="flex items-center gap-3 flex-wrap">
                {phone.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      selectedColor === c.name
                        ? 'border-orange-500 bg-orange-50/50 text-gray-900 ring-1 ring-orange-500'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border border-black/20 ${c.bgClass}`} />
                    <span>{getTranslatedColor(c.name, language)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Configuration */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                {language === 'fa' ? 'ظرفیت حافظه داخلی' : 'Storage Capacity'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {phone.specs.storage.map((storage) => {
                  const extra = getStorageExtra(storage);
                  return (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer ${
                        selectedStorage === storage
                          ? 'border-orange-500 bg-orange-50/60 ring-1 ring-orange-500 text-gray-900'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                      }`}
                    >
                      <span className="font-extrabold text-sm block" dir="ltr">{storage}</span>
                      <span className="text-[11px] text-gray-500 block">
                        {extra > 0
                          ? `+${formatPrice(extra, language)}`
                          : language === 'fa'
                          ? 'پیش‌فرض'
                          : 'Included'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity and Primary Purchase Buttons */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-center">
                {/* Stepper */}
                <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50 h-12 px-2 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black font-bold text-base cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-bold font-mono text-gray-900">
                    {formatNumber(quantity, language)}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black font-bold text-base cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  id="detail-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm h-12 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                  <span>
                    {language === 'fa'
                      ? `افزودن به سبد خرید • ${formatPrice(calculatedPrice * quantity, language)}`
                      : `Add To Cart • $${(calculatedPrice * quantity).toLocaleString()}`}
                  </span>
                </button>
              </div>

              {/* Buy Now instant checkout */}
              <button
                id="detail-buy-now-btn"
                onClick={handleBuyNow}
                className="w-full bg-gray-900 hover:bg-black active:scale-[0.99] text-white font-bold uppercase tracking-wider text-xs sm:text-sm h-12 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>
                  {language === 'fa'
                    ? 'خرید فوری در یک مرحله با تسویه حساب سریع'
                    : 'Buy Now with Express 1-Click Checkout'}
                </span>
              </button>
            </div>

            {/* Certified Direct Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-gray-150 text-xs">
              <div className="flex items-center gap-2.5 text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <Truck className="w-4 h-4 text-orange-500 shrink-0" />
                <div>
                  <strong className="block text-gray-900">
                    {language === 'fa' ? 'ارسال رایگان هوایی' : 'Free 2-Day Air'}
                  </strong>
                  <span className="text-[10px] text-gray-500">
                    {language === 'fa' ? 'تحویل اکسپرس با کد رهگیری' : 'Tracked FedEx Priority'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <div>
                  <strong className="block text-gray-900">
                    {language === 'fa' ? '۲ سال گارانتی رسمی' : '2-Year Warranty'}
                  </strong>
                  <span className="text-[10px] text-gray-500">
                    {language === 'fa' ? 'پوشش جامع قطعات و صفحه‌نمایش' : 'Comprehensive hardware'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <RotateCcw className="w-4 h-4 text-orange-500 shrink-0" />
                <div>
                  <strong className="block text-gray-900">
                    {language === 'fa' ? '۳۰ روز ضمانت بازگشت' : '30-Day Returns'}
                  </strong>
                  <span className="text-[10px] text-gray-500">
                    {language === 'fa' ? 'بدون کسر هرگونه هزینه' : 'Zero restocking fees'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs Section */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex items-center border-b border-gray-200 bg-gray-50/70 overflow-x-auto text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-4 px-6 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-orange-500 text-orange-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {language === 'fa' ? 'مشخصات فنی و سخت‌افزاری' : 'Technical Specifications'}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-6 border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'reviews'
                  ? 'border-orange-500 text-orange-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <span>{language === 'fa' ? 'دیدگاه‌های خریداران' : 'Customer Reviews'}</span>
              <span className="bg-gray-100 text-gray-700 text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                {formatNumber(reviewsList.length, language)}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('inbox')}
              className={`py-4 px-6 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'inbox'
                  ? 'border-orange-500 text-orange-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {language === 'fa' ? 'محتویات داخل جعبه' : "What's In The Box"}
            </button>
            <button
              onClick={() => setActiveTab('warranty')}
              className={`py-4 px-6 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'warranty'
                  ? 'border-orange-500 text-orange-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {language === 'fa' ? 'طرح ۲ ساله محافظت جامع' : '2-Year Protection Plan'}
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {/* Tab 1: Specs */}
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {language === 'fa' ? 'مشخصات مهندسی و سخت‌افزاری دستگاه' : 'Hardware & Engineering Specifications'}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-3xl leading-relaxed">
                    {phone.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <Smartphone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-gray-900 block">
                        {language === 'fa' ? 'صفحه‌نمایش و پنل تصویر' : 'Display & Screen'}
                      </span>
                      <span className="text-gray-600">{phone.specs.display}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <Cpu className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-gray-900 block">
                        {language === 'fa' ? 'پردازنده اصلی و موتور عصبی AI' : 'Processor & Neural Engine'}
                      </span>
                      <span className="text-gray-600">{phone.specs.chip}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <Camera className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-gray-900 block">
                        {language === 'fa' ? 'سیستم دوربین و فیلم‌برداری' : 'Camera System'}
                      </span>
                      <span className="text-gray-600">{phone.specs.camera}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <Battery className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-gray-900 block">
                        {language === 'fa' ? 'باتری و سرعت شارژ' : 'Battery & Charging'}
                      </span>
                      <span className="text-gray-600">{phone.specs.battery}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <Layers className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-gray-900 block">
                        {language === 'fa' ? 'سیستم‌عامل و رابط کاربری' : 'Operating System'}
                      </span>
                      <span className="text-gray-600">{phone.specs.os}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <Sparkles className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-gray-900 block">
                        {language === 'fa' ? 'ارتباطات شبکه و پشتیبانی سیم‌کارت' : 'Network & SIM Connectivity'}
                      </span>
                      <span className="text-gray-600" dir="ltr">{phone.specs.network.join(' • ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-150">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {language === 'fa' ? 'نظرات واقعی خریداران پرچمدار' : 'Customer Reviews & Real Experiences'}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 text-xs">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-black text-sm text-gray-900">
                        {formatNumber(phone.rating, language)} {language === 'fa' ? 'از ۵' : 'out of 5'}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">
                        {language === 'fa'
                          ? `بر اساس ${formatNumber(reviewsList.length, language)} خرید تایید شده`
                          : `Based on ${reviewsList.length} verified purchases`}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <MessageSquarePlus className="w-4 h-4" />
                    <span>
                      {showReviewForm
                        ? language === 'fa' ? 'انصراف از ثبت نظر' : 'Cancel Form'
                        : language === 'fa' ? 'ثبت دیدگاه جدید' : 'Write a Review'}
                    </span>
                  </button>
                </div>

                {/* Review Submission Form */}
                {showReviewForm && (
                  <form onSubmit={handleAddReview} className="bg-orange-50/50 p-5 rounded-xl border border-orange-200 text-xs space-y-3.5 animate-fade-in">
                    <h4 className="font-bold text-gray-900 text-sm">
                      {language === 'fa' ? 'فرم ثبت نظر و تجربه کاربری' : 'Write Your Review'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                          {language === 'fa' ? 'نام و نام خانوادگی' : 'Your Name'}
                        </label>
                        <input
                          type="text"
                          required
                          value={newReviewAuthor}
                          onChange={(e) => setNewReviewAuthor(e.target.value)}
                          placeholder={language === 'fa' ? 'مثال: علیرضا محمدی' : 'e.g. Alex Morgan'}
                          className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                          {language === 'fa' ? 'امتیاز کلی' : 'Rating'}
                        </label>
                        <select
                          value={newReviewRating}
                          onChange={(e) => setNewReviewRating(Number(e.target.value))}
                          className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:border-orange-500 focus:outline-none font-semibold"
                        >
                          <option value={5}>⭐⭐⭐⭐⭐ ({language === 'fa' ? '۵ - فوق‌العاده' : '5 - Flawless'})</option>
                          <option value={4}>⭐⭐⭐⭐ ({language === 'fa' ? '۴ - بسیار خوب' : '4 - Very Good'})</option>
                          <option value={3}>⭐⭐⭐ ({language === 'fa' ? '۳ - متوسط' : '3 - Average'})</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        {language === 'fa' ? 'عنوان خلاصه دیدگاه' : 'Review Headline'}
                      </label>
                      <input
                        type="text"
                        value={newReviewTitle}
                        onChange={(e) => setNewReviewTitle(e.target.value)}
                        placeholder={language === 'fa' ? 'خلاصه دیدگاه در یک جمله' : 'Brief summary of your review'}
                        className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">
                        {language === 'fa' ? 'تجربه تفصیلی کار با دستگاه' : 'Detailed Experience'}
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        placeholder={language === 'fa' ? 'نقاط قوت و ضعف صفحه‌نمایش، ماندگاری باتری، کیفیت دوربین‌ها و ارگونومی بدنه را بنویسید...' : 'Tell others what you think about the display, battery life, cameras, and overall design...'}
                        className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-gray-900 hover:bg-black text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      {language === 'fa' ? 'ثبت و انتشار دیدگاه تاییدشده' : 'Publish Verified Review'}
                    </button>
                  </form>
                )}

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviewsList.map((rev) => (
                    <div key={rev.id} className="p-4 bg-gray-50 rounded-xl border border-gray-150 text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-gray-900">{rev.author}</span>
                          {rev.verified && (
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded flex items-center gap-1">
                              <Check className="w-3 h-3 stroke-[3]" />
                              {language === 'fa' ? 'خریدار تاییدشده' : 'Verified Buyer'}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-400 text-[11px]">{rev.date}</span>
                      </div>

                      <div className="flex items-center text-amber-400 mb-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>

                      <h5 className="font-bold text-gray-900 mb-1">{rev.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{rev.comment}</p>
                      <span className="inline-block mt-2 text-[10px] text-gray-400 font-mono">
                        {language === 'fa' ? 'مدل خریداری‌شده:' : 'Model:'} {rev.phoneModel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: In the box */}
            {activeTab === 'inbox' && (
              <div className="space-y-4 text-xs">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {language === 'fa' ? 'محتویات رسمی جعبه اورجینال کارخانه' : 'Official Manufacturer Package Contents'}
                </h3>
                <p className="text-gray-600">
                  {language === 'fa'
                    ? 'تمامی گوشی‌های ارائه شده توسط موبی‌تک دایرکت در جعبه‌های کاملاً آکبند، پلمپ کارخانه‌ای به همراه لوازم جانبی استاندارد عرضه می‌گردند:'
                    : 'Every device sold by MobiTech Direct ships in brand-new factory sealed retail packaging with authentic accessories:'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-150">
                    <Smartphone className="w-5 h-5 text-orange-500" />
                    <div>
                      <strong className="text-gray-900 block">{phone.name}</strong>
                      <span className="text-gray-500">
                        {language === 'fa' ? 'گوشی هوشمند ۱۰۰٪ آنلاک فابریک کارخانه' : '100% Factory Unlocked Smartphone'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-150">
                    <Zap className="w-5 h-5 text-orange-500" />
                    <div>
                      <strong className="text-gray-900 block">
                        {language === 'fa' ? 'کابل پرسرعت Type-C کنفی مقاوم' : 'High-Speed Braided USB-C Cable'}
                      </strong>
                      <span className="text-gray-500">
                        {language === 'fa' ? 'کابل ۱ متری تقویت‌شده' : '1-Meter Reinforced Cable'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-150">
                    <Award className="w-5 h-5 text-orange-500" />
                    <div>
                      <strong className="text-gray-900 block">
                        {language === 'fa' ? 'سوزن خروج سیم‌کارت' : 'SIM Tray Ejector Pin'}
                      </strong>
                      <span className="text-gray-500">
                        {language === 'fa' ? 'ابزار استیل ضدزنگ استاندارد' : 'Precision Stainless Steel tool'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-150">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    <div>
                      <strong className="text-gray-900 block">
                        {language === 'fa' ? 'کارت گارانتی ۲ ساله طلایی موبی‌تک' : '2-Year MobiTech Certified Protection Card'}
                      </strong>
                      <span className="text-gray-500">
                        {language === 'fa' ? 'گواهی ثبت سریال شرکتی' : 'Serial-registered extended certificate'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Warranty */}
            {activeTab === 'warranty' && (
              <div className="space-y-4 text-xs text-gray-600">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {language === 'fa' ? 'برنامه اختصاصی گارانتی ۲ ساله طلایی موبی‌تک' : 'Complimentary 2-Year Direct Protection Program'}
                </h3>
                <p>
                  {language === 'fa'
                    ? 'در موبی‌تک دایرکت، تمامی پرچمداران بدون دریافت هزینه مازاد تحت پوشش گارانتی ۲۴ ماهه تعویض قطعات و خدمات ویژه قرار می‌گیرند.'
                    : 'At MobiTech Direct, all flagship purchases automatically include our 24-month comprehensive hardware protection plan at zero additional charge.'}
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-gray-800">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                    <span>
                      <strong>{language === 'fa' ? 'ایرادات کارخانه‌ای:' : 'Manufacturer Defects:'}</strong>{' '}
                      {language === 'fa'
                        ? 'پوشش کامل مادربرد، سنسورهای دوربین، لنزهای اپتیکال و اتصالات فابریک.'
                        : 'Full coverage on motherboard, camera sensors, and internal optics.'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                    <span>
                      <strong>{language === 'fa' ? 'افت سلامت باتری:' : 'Battery Degradation:'}</strong>{' '}
                      {language === 'fa'
                        ? 'تعویض رایگان باتری با سلول اورجینال در صورت افت سلامت باتری به زیر ۸۰٪ طی ۲ سال.'
                        : 'Free battery replacement if capacity dips below 80% within 2 years.'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                    <span>
                      <strong>{language === 'fa' ? 'سرویس سریع ۴۸ ساعته:' : 'Expedited Service:'}</strong>{' '}
                      {language === 'fa'
                        ? 'انجام کلیه خدمات و عیب‌یابی در کمتر از ۴۸ ساعت کاری در مرکز خدمات فنی.'
                        : 'Turnaround in under 48 hours at our California tech service facility.'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommended & Related Flagships */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-black text-gray-900">
                {language === 'fa' ? 'مقایسه با سایر پرچمداران مشابه' : 'Compare with Similar Flagships'}
              </h3>
              <p className="text-xs text-gray-500">
                {language === 'fa'
                  ? 'سایر گوشی‌های رده‌بالایی که خریداران در کنار این دستگاه بررسی کرده‌اند'
                  : 'Other top-tier smartphones frequently considered by customers'}
              </p>
            </div>
            <button
              onClick={() => navigateTo('home')}
              className="text-orange-600 hover:text-orange-700 font-bold text-xs"
            >
              {language === 'fa' ? 'مشاهده کاتالوگ کامل ←' : 'View Full Catalog →'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPhones.map((p) => (
              <div
                key={p.id}
                onClick={() => navigateTo('product-detail', { phoneId: p.id })}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer flex gap-4 items-center group"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-lg p-2 shrink-0 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-extrabold text-orange-600 uppercase">
                    {p.brand}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 truncate group-hover:text-orange-600 transition-colors">
                    {p.name}
                  </h4>
                  <span className="text-xs font-mono font-bold text-gray-800 mt-1 block" dir="ltr">
                    {formatPrice(p.price, language)}
                  </span>
                  <span className="text-[11px] text-gray-500 truncate block mt-0.5">
                    {p.specs.chip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
