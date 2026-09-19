import { Language } from '../types';

export const TRANSLATIONS = {
  en: {
    // Top bar
    freeExpressDelivery: 'Free Express Delivery on orders over $500',
    officialWarranty: '2-Year Official Hardware Warranty',
    hotline: 'Direct Hotline: 1-800-MOBI-TECH',
    support247: '24/7 Tech Support',
    trackOrder: 'Track Order',
    language: 'Language',
    farsi: 'فارسی',
    english: 'English',

    // Logo & Header
    logoTitle: 'MobiTech',
    logoTag: 'Direct',
    flagshipHub: 'Flagship Phones Hub',
    searchPlaceholder: 'Search iPhone 15 Pro, Galaxy S24, Pixel 8...',
    compare: 'Compare',
    wishlist: 'Wishlist',
    cart: 'Cart',
    vipAccount: 'VIP Account',
    search: 'Search',
    clear: 'Clear',

    // NavBar
    navPhones: 'Phones',
    navBrands: 'Brands',
    navAccessories: 'Accessories',
    navDeals: 'Deals & Offers',
    navSupport: 'Support & Warranty',
    allSmartphones: 'All Smartphones Catalog',
    browseFlagships: 'Browse Flagships',
    appleIphones: 'Apple iPhones',
    samsungGalaxy: 'Samsung Galaxy Flagships',
    googlePixel: 'Google Pixel Series',
    onePlusFlagships: 'OnePlus Flagships',
    xiaomiFlagships: 'Xiaomi Flagships',
    allBrandsShowcase: 'All Brands Showcase',
    hotDeal: 'HOT DEAL',
    newBadge: 'NEW',

    // Hero Banner
    hotFlagshipDrop: 'Hot Flagship Drop',
    heroTitle: 'iPhone 15 Pro Max',
    heroTagline: 'Titanium. So strong. So light. So Pro.',
    heroDescription: 'Forged in aerospace-grade titanium with the groundbreaking A17 Pro chip, next-gen 5x optical telephoto lens, and the customizable Action button.',
    orderNow: 'Order Now',
    viewCameraSpecs: 'View Camera Specs',
    heroStartingAt: 'Starting at',
    freeExpressBadge: 'Free Express Shipping',
    tradeInBonusBadge: 'Up to $300 Trade-In Bonus',
    warrantyBadge: '2-Year Official Warranty',
    techSupportBadge: '24/7 Hardware Support',

    // Filter Sidebar
    filtersTitle: 'Filter Flagships',
    clearAll: 'Clear All',
    searchCatalog: 'Search Catalog',
    brands: 'Brands',
    allBrands: 'All Brands',
    priceRange: 'Price Range',
    from: 'From',
    to: 'To',
    storageCapacity: 'Internal Storage',
    connectivityNetwork: 'Connectivity & Network',
    specialOffers: 'Special Offers & Perks',
    onSaleOffer: 'On Sale & Discounted',
    freeShippingOffer: 'Free Express Shipping',
    inStockOffer: 'In Stock Only',
    newArrivalOffer: 'New Flagship Releases',
    resetFilters: 'Reset All Filters',

    // Product Grid & Sort
    showingFlagships: 'Showing',
    flagshipsCount: 'Flagship Smartphones',
    sortBy: 'Sort by:',
    sortFeatured: 'Featured & Best Match',
    sortPriceAsc: 'Price: Low to High',
    sortPriceDesc: 'Price: High to Low',
    sortRating: 'Highest Customer Rating',
    sortNewest: 'Newest Flagships',
    filtersBtn: 'Filters',
    noPhonesFound: 'No phones found matching your selected filters.',
    tryResettingFilters: 'Try resetting the filters or modifying your search query.',

    // Product Card
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    freeDelivery: 'Free Delivery',
    offDiscount: 'OFF',
    quickSpecs: 'View Details & Specs',
    addToCart: 'Add to Cart',
    added: 'Added!',
    reviews: 'reviews',
    startingAt: 'Starting at',

    // Product Detail Page
    backToCatalog: 'Back to All Smartphones',
    verifiedPurchasers: 'Verified Purchasers',
    selectColor: 'Select Color',
    selectStorage: 'Select Storage Capacity',
    quantity: 'Quantity',
    addToCartBtn: 'Add to Shopping Cart',
    addToCompare: 'Add to Compare',
    inCompare: 'In Comparison',
    saveToWishlist: 'Add to Wishlist',
    savedInWishlist: 'Saved to Wishlist',
    fullSpecsMatrix: 'Full Hardware Specifications',
    specDisplay: 'Display & Screen',
    specChip: 'Processor & Chipset',
    specCamera: 'Camera System',
    specBattery: 'Battery & Charging',
    specSecurity: 'Biometrics & Security',
    specOs: 'Operating System',
    specWeight: 'Weight & Dimensions',
    specNetwork: 'Network & 5G Bands',
    customerReviews: 'Customer Reviews & Ratings',
    writeReview: 'Write a Customer Review',
    yourRating: 'Your Rating',
    reviewTitle: 'Review Title',
    reviewComment: 'Your Review',
    submitReview: 'Submit Review',
    thankYouReview: 'Thank you! Your review has been submitted.',
    relatedPhones: 'You May Also Consider',

    // Brands Page
    brandsPageTitle: 'Flagship Manufacturers & Brands',
    brandsPageSubtitle: 'Explore cutting-edge mobile technologies, ecosystem advantages, and flagship lineups from the world’s leading mobile innovators.',
    allBrandsTab: 'All Brands',
    brandPhilosophy: 'Brand Philosophy & Ecosystem',
    viewAllBrandPhones: 'View All',
    smartphonesAvailable: 'devices in catalog',

    // Accessories Page
    accessoriesTitle: 'Smartphone Accessories & Gear',
    accessoriesSubtitle: 'Enhance your mobile experience with MagSafe chargers, ultra-durable Kevlar cases, studio-grade earbuds, and high-wattage GaN adapters.',
    allAccessories: 'All Gear',
    catCases: 'Cases & Covers',
    catChargers: 'Fast Chargers',
    catAudio: 'Wireless Audio',
    catMounts: 'Mounts & Power',
    compatibleWith: 'Compatible with:',
    addGearToCart: 'Add Gear to Cart',

    // Deals Page
    dealsTitle: 'Deals, Flash Sales & Coupons',
    dealsSubtitle: 'Score massive discounts on premium unlocked flagships, bundled accessory packages, and limited-time manufacturer promotions.',
    activeCoupons: 'Active Promotional Coupons',
    copyCode: 'Copy Code',
    copied: 'Copied!',
    endsSoon: 'Ends Soon',
    saveUpTo: 'Save up to',
    limitedTimeOffer: 'Limited Time Deal',

    // Support Page
    supportTitle: 'Customer Support & Device Warranty',
    supportSubtitle: 'Track your live order shipments, verify your 2-year warranty coverage, or explore our 30-day money-back guarantee.',
    trackShipment: 'Track Shipment & Order Status',
    trackingPlaceholder: 'Enter Tracking # (e.g., MBT-98421) or device IMEI...',
    trackButton: 'Lookup Status',
    warrantyCardTitle: '2-Year Hardware Warranty',
    warrantyCardDesc: 'Full bumper-to-bumper replacement coverage against factory hardware faults and display defects.',
    returnsCardTitle: '30-Day Hassle-Free Returns',
    returnsCardDesc: 'If you are not 100% satisfied with your phone, return it in original packaging for a full refund.',
    tradeinCardTitle: 'Guaranteed Trade-In Program',
    tradeinCardDesc: 'Get instant credit toward your new flagship when trading in your previous smartphone.',
    faqTitle: 'Frequently Asked Questions',

    // Cart Drawer
    shoppingCart: 'Shopping Cart',
    cartEmpty: 'Your shopping cart is currently empty.',
    startBrowsing: 'Browse Smartphones',
    colorLabel: 'Color:',
    storageLabel: 'Storage:',
    qtyLabel: 'Qty:',
    subtotal: 'Subtotal:',
    expressShipping: 'Express Shipping:',
    free: 'FREE',
    estimatedTax: 'Estimated Tax (8%):',
    orderTotal: 'Order Total:',
    freeShippingQualified: 'Your order qualifies for Free Express Shipping!',
    proceedToCheckout: 'Proceed to Secure Checkout',
    clearCart: 'Clear Cart',

    // Checkout Modal
    checkoutTitle: 'Secure Checkout',
    stepShipping: '1. Shipping Address',
    stepPayment: '2. Payment Method',
    fullName: 'Full Name',
    phoneNum: 'Phone Number',
    address: 'Street Address',
    city: 'City',
    postalCode: 'Postal Code',
    paymentMethod: 'Select Payment Method',
    payCredit: 'Credit / Debit Card',
    payOnline: 'Online Direct Gateway',
    payCod: 'Cash on Delivery',
    orderSummary: 'Order Summary',
    placeOrder: 'Place Order & Pay',
    orderSuccessTitle: 'Order Placed Successfully!',
    orderSuccessDesc: 'Thank you for shopping with MobiTech Direct. We have received your order and are preparing your flagship phone for express shipment.',
    orderNumber: 'Order Number:',
    close: 'Close',

    // Compare Modal
    compareTitle: 'Compare Flagship Phones',
    clearAllCompare: 'Clear Comparison',
    compareEmpty: 'No devices selected for comparison yet. Click the "Compare" button on any phone card to compare side-by-side.',
    compareFloatingTray: 'Comparing Devices',
    viewComparison: 'View Full Specs Matrix',

    // Wishlist Modal
    wishlistTitle: 'Saved Devices & Wishlist',
    wishlistEmpty: 'You haven’t saved any devices to your wishlist yet.',
    moveToCart: 'Move to Cart',

    // Account Modal
    accountTitle: 'VIP Customer Profile',
    accountTier: 'VIP Tier: Diamond Member',
    memberSince: 'Member Since: January 2024',
    savedAddresses: 'Saved Addresses',
    orderHistory: 'Recent Order History',
    accountPerks: 'VIP Perks & Discounts',

    // Footer
    footerDesc: 'MobiTech Direct is your authorized premier retailer for factory-unlocked flagship smartphones, premium gear, and guaranteed hardware protection.',
    quickLinks: 'Navigation Links',
    customerService: 'Customer Service',
    accountSecurity: 'Account & Security',
    newsletterTitle: 'Stay in the Loop',
    newsletterDesc: 'Subscribe for confidential flash drops, preorder notifications, and VIP member discount codes.',
    enterEmail: 'Enter your email address...',
    subscribe: 'Subscribe',
    subscribedMsg: 'Thank you for subscribing to MobiTech Direct VIP drops!',
    allRightsReserved: 'All rights reserved. Authorized Flagship Direct Retailer.',
  },
  fa: {
    // Top bar
    freeExpressDelivery: 'ارسال اکسپرس رایگان برای خریدهای بالای ۵۰۰ دلار',
    officialWarranty: '۲ سال گارانتی رسمی تعویض قطعات',
    hotline: 'پشتیبانی مستقیم: ۰۲۱-۸۸۸۸۷۷۶۶ (1-800-MOBI-TECH)',
    support247: 'پشتیبانی فنی ۲۴ ساعته',
    trackOrder: 'رهگیری سفارش',
    language: 'زبان',
    farsi: 'فارسی',
    english: 'English',

    // Logo & Header
    logoTitle: 'موبی‌تک',
    logoTag: 'دایرکت',
    flagshipHub: 'مرجع تخصصی گوشی‌های پرچمدار',
    searchPlaceholder: 'جستجو در میان آیفون ۱۵ پرو، گلکسی اس ۲۴، پیکسل ۸...',
    compare: 'مقایسه',
    wishlist: 'علاقه‌مندی‌ها',
    cart: 'سبد خرید',
    vipAccount: 'حساب VIP',
    search: 'جستجو',
    clear: 'پاک کردن',

    // NavBar
    navPhones: 'گوشی‌های هوشمند',
    navBrands: 'برندها',
    navAccessories: 'لوازم جانبی',
    navDeals: 'تخفیف‌ها و پیشنهادات',
    navSupport: 'پشتیبانی و گارانتی',
    allSmartphones: 'کاتالوگ همه گوشی‌های هوشمند',
    browseFlagships: 'مرور پرچمداران',
    appleIphones: 'آیفون‌های اپل (iOS)',
    samsungGalaxy: 'پرچمداران سامسونگ گلکسی',
    googlePixel: 'گوشی‌های گوگل پیکسل (اندروید خالص)',
    onePlusFlagships: 'پرچمداران وان‌پلاس',
    xiaomiFlagships: 'پرچمداران شیائومی',
    allBrandsShowcase: 'نمایشگاه همه برندها',
    hotDeal: 'تخفیف داغ',
    newBadge: 'جدید',

    // Hero Banner
    hotFlagshipDrop: 'عرضه داغ پرچمدار سال',
    heroTitle: 'آیفون ۱۵ پرو مکس (iPhone 15 Pro Max)',
    heroTagline: 'تیتانیوم خالص. بی‌نهایت مقاوم، فوق‌العاده سبک، کاملاً پرو.',
    heroDescription: 'طراحی شده با تیتانیوم هوافضا، مجهز به پردازنده انقلابی A17 Pro، سیستم دوربین پریسکوپی ۵ برابری و دکمه جدید اکشن باتن.',
    orderNow: 'همین حالا سفارش دهید',
    viewCameraSpecs: 'مشخصات دوربین و بدنه',
    heroStartingAt: 'شروع قیمت از',
    freeExpressBadge: 'ارسال فوری و رایگان اکسپرس',
    tradeInBonusBadge: 'طرح تعویض گوشی کارکرده تا ۳۰۰ دلار',
    warrantyBadge: '۲ سال گارانتی شرکتی تعویض',
    techSupportBadge: 'پشتیبانی تخصصی ۲۴ ساعته',

    // Filter Sidebar
    filtersTitle: 'فیلتر پرچمداران',
    clearAll: 'پاک کردن همه',
    searchCatalog: 'جستجو در مشخصات',
    brands: 'برندهای سازنده',
    allBrands: 'همه برندها',
    priceRange: 'محدوده قیمت',
    from: 'از',
    to: 'تا',
    storageCapacity: 'ظرفیت حافظه داخلی',
    connectivityNetwork: 'شبکه و ارتباطات',
    specialOffers: 'پیشنهادات ویژه و امتیازات',
    onSaleOffer: 'دارای تخفیف ویژه',
    freeShippingOffer: 'ارسال رایگان اکسپرس',
    inStockOffer: 'فقط کالاهای موجود',
    newArrivalOffer: 'جدیدترین پرچمداران',
    resetFilters: 'بازنشانی همه فیلترها',

    // Product Grid & Sort
    showingFlagships: 'نمایش',
    flagshipsCount: 'گوشی پرچمدار',
    sortBy: 'مرتب‌سازی بر اساس:',
    sortFeatured: 'منتخب و پربازدیدترین',
    sortPriceAsc: 'ارزان‌ترین به گران‌ترین',
    sortPriceDesc: 'گران‌ترین به ارزان‌ترین',
    sortRating: 'بیشترین امتیاز خریداران',
    sortNewest: 'جدیدترین پرچمداران',
    filtersBtn: 'فیلترها',
    noPhonesFound: 'هیچ گوشی هوشمندی با مشخصات فیلتر شده یافت نشد.',
    tryResettingFilters: 'لطفاً فیلترها را بازنشانی کرده یا عبارت جستجو را تغییر دهید.',

    // Product Card
    inStock: 'موجود در انبار',
    outOfStock: 'ناموجود',
    freeDelivery: 'ارسال رایگان',
    offDiscount: 'تخفیف',
    quickSpecs: 'مشاهده جزئیات و مشخصات',
    addToCart: 'افزودن به سبد',
    added: 'اضافه شد!',
    reviews: 'دیدگاه خریداران',
    startingAt: 'شروع از',

    // Product Detail Page
    backToCatalog: 'بازگشت به کاتالوگ گوشی‌ها',
    verifiedPurchasers: 'دیدگاه‌های تایید شده',
    selectColor: 'انتخاب رنگ بدنه',
    selectStorage: 'انتخاب ظرفیت حافظه داخلی',
    quantity: 'تعداد',
    addToCartBtn: 'افزودن به سبد خرید',
    addToCompare: 'افزودن به لیست مقایسه',
    inCompare: 'در حال مقایسه',
    saveToWishlist: 'افزودن به لیست علاقه‌مندی‌ها',
    savedInWishlist: 'در لیست علاقه‌مندی‌ها',
    fullSpecsMatrix: 'مشخصات کامل سخت‌افزاری و فنی',
    specDisplay: 'صفحه‌نمایش و تصویر',
    specChip: 'تراشه و پردازنده اصلی',
    specCamera: 'سیستم دوربین و فیلم‌برداری',
    specBattery: 'باتری و سرعت شارژ',
    specSecurity: 'امنیت و سنسورهای بیومتریک',
    specOs: 'سیستم‌عامل و رابط کاربری',
    specWeight: 'وزن و ابعاد دستگاه',
    specNetwork: 'ارتباطات و باندهای 5G',
    customerReviews: 'دیدگاه‌ها و نظرات خریداران',
    writeReview: 'ثبت نظر و دیدگاه شما',
    yourRating: 'امتیاز شما به دستگاه',
    reviewTitle: 'عنوان دیدگاه شما',
    reviewComment: 'متن نظر و تجربه کاربری شما',
    submitReview: 'ثبت و ارسال دیدگاه',
    thankYouReview: 'با تشکر! دیدگاه شما با موفقیت ثبت گردید.',
    relatedPhones: 'مدل‌های مشابه و پیشنهادی',

    // Brands Page
    brandsPageTitle: 'برندها و تولیدکنندگان برتر پرچمدار',
    brandsPageSubtitle: 'فناوری‌های نوین، اکوسیستم اختصاصی و قدرتمندترین گوشی‌های هوشمند برترین برندهای جهان را بررسی و مقایسه کنید.',
    allBrandsTab: 'همه برندها',
    brandPhilosophy: 'فلسفه طراحی و اکوسیستم اختصاصی',
    viewAllBrandPhones: 'مشاهده همه مدل‌های',
    smartphonesAvailable: 'مدل موجود در انبار',

    // Accessories Page
    accessoriesTitle: 'لوازم جانبی و تجهیزات هوشمند پرچمدار',
    accessoriesSubtitle: 'تجربه کاربری خود را با شارژرهای بی‌سیم مگ‌سیف، قاب‌های مقاوم ضدضربه، هندزفری‌های استودیویی و آداپتورهای قدرتمند ارتقا دهید.',
    allAccessories: 'همه لوازم جانبی',
    catCases: 'قاب و کاور محافظ',
    catChargers: 'شارژر و آداپتور سریع',
    catAudio: 'هندزفری و ایرپاد بی‌سیم',
    catMounts: 'پایه‌ها و پاوربانک',
    compatibleWith: 'سازگار با:',
    addGearToCart: 'افزودن لوازم به سبد خرید',

    // Deals Page
    dealsTitle: 'تخفیف‌های ویژه، فروش شگفت‌انگیز و کوپن‌ها',
    dealsSubtitle: 'از بیشترین تخفیف‌های پرچمداران آنلاک، بسته‌های هدیه لوازم جانبی و پیشنهادات مدت‌دار شگفت‌انگیز بهره‌مند شوید.',
    activeCoupons: 'کوپن‌های تخفیف فعال فروشگاه',
    copyCode: 'کپی کد تخفیف',
    copied: 'کپی شد!',
    endsSoon: 'مهلت محدود',
    saveUpTo: 'تا سقف تخفیف',
    limitedTimeOffer: 'پیشنهاد شگفت‌انگیز ویژه',

    // Support Page
    supportTitle: 'پشتیبانی مشتریان، رهگیری و خدمات گارانتی',
    supportSubtitle: 'سفارش خود را به صورت لحظه‌ای رهگیری کنید، گارانتی ۲ ساله تعویض را استعلام بگیرید یا شرایط بازگشت ۳۰ روزه را مشاهده فرمایید.',
    trackShipment: 'رهگیری وضعیت مرسوله و سفارش',
    trackingPlaceholder: 'کد رهگیری (مانند MBT-98421) یا شناسه IMEI دستگاه را وارد کنید...',
    trackButton: 'استعلام وضعیت سفارش',
    warrantyCardTitle: '۲ سال گارانتی رسمی تعویض شرکتی',
    warrantyCardDesc: 'پوشش کامل سخت‌افزاری، قطعات و صفحه‌نمایش بدون قید و شرط در برابر هرگونه نقص کارخانه‌ای.',
    returnsCardTitle: '۳۰ روز ضمانت بازگشت وجه بی‌قیدوشرط',
    returnsCardDesc: 'در صورت عدم رضایت کامل از محصول، دستگاه را با بسته‌بندی اولیه بازگردانده و وجه خود را دریافت کنید.',
    tradeinCardTitle: 'طرح تعویض گوشی کارکرده با پرچمدار نو',
    tradeinCardDesc: 'گوشی قبلی خود را با بهترین ارزش روز معاوضه کرده و مابه‌التفاوت آن را تخفیف نقدی بگیرید.',
    faqTitle: 'پرسش‌های متداول مشتریان (FAQ)',

    // Cart Drawer
    shoppingCart: 'سبد خرید شما',
    cartEmpty: 'سبد خرید شما در حال حاضر خالی است.',
    startBrowsing: 'مشاهده کاتالوگ پرچمداران',
    colorLabel: 'رنگ:',
    storageLabel: 'حافظه:',
    qtyLabel: 'تعداد:',
    subtotal: 'جمع اقلام:',
    expressShipping: 'هزینه ارسال اکسپرس:',
    free: 'رایگان',
    estimatedTax: 'مالیات بر ارزش افزوده (۸٪):',
    orderTotal: 'مبلغ قابل پرداخت:',
    freeShippingQualified: 'سفارش شما واجد شرایط ارسال رایگان اکسپرس گردید!',
    proceedToCheckout: 'تکمیل سفارش و پرداخت نهایی',
    clearCart: 'خالی کردن سبد خرید',

    // Checkout Modal
    checkoutTitle: 'تکمیل خرید و پرداخت امن',
    stepShipping: '۱. مشخصات و نشانی تحویل‌گیرنده',
    stepPayment: '۲. شیوه پرداخت',
    fullName: 'نام و نام خانوادگی',
    phoneNum: 'شماره همراه',
    address: 'نشانی پستی دقیق',
    city: 'شهر',
    postalCode: 'کد پستی ۱۰ رقمی',
    paymentMethod: 'انتخاب درگاه پرداخت',
    payCredit: 'پرداخت با کارت بانکی / شتاب',
    payOnline: 'درگاه آنلاین مستقیم شاپرک',
    payCod: 'پرداخت در محل (تهران و مراکز استان)',
    orderSummary: 'خلاصه سفارش',
    placeOrder: 'تایید نهایی و پرداخت',
    orderSuccessTitle: 'سفارش شما با موفقیت ثبت شد!',
    orderSuccessDesc: 'از خرید شما در موبی‌تک دایرکت سپاسگزاریم. سفارش شما ثبت شده و بسته به انبار ارسال فوری تحویل گردید.',
    orderNumber: 'شماره پیگیری سفارش:',
    close: 'بستن',

    // Compare Modal
    compareTitle: 'مقایسه تخصصی پرچمداران',
    clearAllCompare: 'پاک کردن لیست مقایسه',
    compareEmpty: 'هنوز دستگاهی به لیست مقایسه اضافه نشده است. روی دکمه "مقایسه" هر گوشی کلیک کنید تا جدول مقایسه نمایان شود.',
    compareFloatingTray: 'گوشی در حال مقایسه',
    viewComparison: 'مشاهده جدول کامل مقایسه',

    // Wishlist Modal
    wishlistTitle: 'لیست علاقه‌مندی‌ها و دستگاه‌های ذخیره‌شده',
    wishlistEmpty: 'هیچ دستگاهی در لیست علاقه‌مندی‌های شما ذخیره نشده است.',
    moveToCart: 'انتقال به سبد خرید',

    // Account Modal
    accountTitle: 'پروفایل کاربر VIP',
    accountTier: 'سطح کاربری: عضویت الماس (Diamond)',
    memberSince: 'عضو از: بهمن ۱۴۰۲',
    savedAddresses: 'نشانی‌های ثبت شده',
    orderHistory: 'تاریخچه سفارش‌های اخیر',
    accountPerks: 'مزایای سطح کاربری VIP',

    // Footer
    footerDesc: 'موبی‌تک دایرکت معتبرترین مرکز فروش بدون واسطه گوشی‌های پرچمدار آنلاک، لوازم جانبی اورجینال و خدمات تضمین کیفیت با پشتیبانی ۲۴ ساعته در کشور است.',
    quickLinks: 'دسترسی سریع',
    customerService: 'خدمات مشتریان',
    accountSecurity: 'حساب و امنیت خرید',
    newsletterTitle: 'عضویت در خبرنامه تخفیف‌ها',
    newsletterDesc: 'با عضویت در خبرنامه از جدیدترین عرضه‌های شگفت‌انگیز و کدهای تخفیف اختصاصی VIP مطلع شوید.',
    enterEmail: 'ایمیل خود را وارد فرمایید...',
    subscribe: 'عضویت',
    subscribedMsg: 'با تشکر! شما در لیست دریافت تخفیف‌های ویژه VIP موبی‌تک قرار گرفتید.',
    allRightsReserved: 'تمامی حقوق متعلق به موبی‌تک دایرکت می‌باشد. مرجع رسمی پرچمداران هوشمند.',
  },
};

export const COLOR_NAMES_FA: Record<string, string> = {
  'Natural Titanium': 'تیتانیوم طبیعی',
  'Black Titanium': 'تیتانیوم مشکی',
  'White Titanium': 'تیتانیوم سفید',
  'Blue Titanium': 'تیتانیوم آبی',
  'Titanium Gray': 'تیتانیوم خاکستری',
  'Titanium Black': 'تیتانیوم مشکی کربنی',
  'Titanium Violet': 'تیتانیوم بنفش',
  'Titanium Yellow': 'تیتانیوم کهربایی',
  'Obsidian': 'مشکی ابسیدین',
  'Porcelain': 'سفید چینی (پورسلین)',
  'Bay Blue': 'آبی خلیجی',
  'Mint': 'سبز نعنایی',
  'Silky Black': 'مشکی ابریشمی',
  'Flowy Emerald': 'زمردی کریستالی',
  'Titanium Edition': 'نسخه تیتانیوم سفارشی',
  'White': 'سفید صدفی',
  'Black': 'مشکی مات',
  'Silver': 'نقره‌ای لوکس',
  'Midnight': 'مشکی نیمه‌شب',
  'Starlight': 'استارلایت کرم',
  'Space Gray': 'خاکستری فضایی',
  'Cream': 'کرم متالیک',
  'Graphite': 'گرافیتی تیره',
  'Desert Titanium': 'تیتانیوم صحرایی',
};

export const BRAND_PHILOSOPHIES_FA: Record<string, { title: string; desc: string }> = {
  Apple: {
    title: 'تراشه‌های پیشگام، اکوسیستم بدون درز iOS و بدنه تیتانیوم هوایی',
    desc: 'اپل با ترکیب تراشه‌های ۳ نانومتری سری Pro، سیستم دوربین سینماتیک با سنسورهای نسل جدید و پشتیبانی نرم‌افزاری چندین ساله، بالاترین سطح رضایت و ارزش حفظ قیمت را ارائه می‌دهد.',
  },
  Samsung: {
    title: 'هوش مصنوعی پیشرفته Galaxy AI، نمایشگرهای Dynamic AMOLED و زوم فوق‌العاده',
    desc: 'سامسونگ با نمایشگرهای بدون انعکاس و شفافیت ۲۶۰۰ نیتی، قلم هوشمند S Pen داخلی و ابزارهای هوش مصنوعی ترجمه همزمان و ادیت عکس، ابزار نهایی بهره‌وری را خلق کرده است.',
  },
  Google: {
    title: 'عکاسی هوشمند محاسباتی، هوش مصنوعی Gemini و خالص‌ترین تجربه اندروید',
    desc: 'گوگل پیکسل با پردازنده اختصاصی Tensor G3 و الگوریتم‌های جادویی عکس و فیلم، طبیعی‌ترین عکاسی پرتره و ۷ سال کامل آپدیت‌های امنیتی و سیستم‌عامل را تضمین می‌کند.',
  },
  OnePlus: {
    title: 'سرعت خارق‌العاده، شارژ فوق سریع ۸۰ واتی و خنک‌کننده پیشرفته گیمینگ',
    desc: 'وان‌پلاس با شعار معروف هرگز متوقف نشو (Never Settle)، بالاترین قدرت سخت‌افزاری، دوربین بهینه‌شده هاسلبلاد و شارژ کامل باتری در کمتر از ۳۰ دقیقه را عرضه می‌دارد.',
  },
  Xiaomi: {
    title: 'همکاری افسانه‌ای با لایکا (Leica) و لنزهای اپتیکال سنسور ۱ اینچی',
    desc: 'شیائومی با سنسور غول‌پیکر یک اینچی، دیافراگم متغیر و ساختار عکاسی حرفه‌ای لایکا، مرزهای عکاسی موبایل و مشخصات را جابجا کرده است.',
  },
};

/**
 * Format price with proper currency symbol or label depending on selected language
 */
export function formatPrice(amount: number, language: Language = 'fa'): string {
  if (language === 'fa') {
    // Show in Dollars formatted in Persian or English numbers with "دلار" tag
    return `$${amount.toLocaleString('en-US')} (دلار)`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}

/**
 * Convert numbers to Persian numerals if in Persian mode
 */
export function formatNumber(num: number, language: Language = 'fa'): string {
  if (language === 'fa') {
    return num.toLocaleString('fa-IR');
  }
  return num.toLocaleString('en-US');
}

/**
 * Get translated color name
 */
export function getTranslatedColor(colorName: string, language: Language = 'fa'): string {
  if (language === 'fa') {
    return COLOR_NAMES_FA[colorName] || colorName;
  }
  return colorName;
}
