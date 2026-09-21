



import { useState } from "react";

const products = [
  {
    id: 1,
    name: {
      fa: "آیفون ۱۵ پرو تیتانیوم",
      en: "iPhone 15 Pro Titanium",
    },
    brand: "Apple",
    price: {
      fa: "۹۸,۵۰۰,۰۰۰",
      en: "$2,099",
    },
    image:
      "/src/imags/images.jpeg",
    badge: {
      fa: "جدید",
      en: "New",
    },
  },

  {
    id: 2,
    name: {
      fa: "گلکسی اس ۲۴ اولترا",
      en: "Galaxy S24 Ultra",
    },
    brand: "Samsung",
    price: {
      fa: "۸۷,۲۰۰,۰۰۰",
      en: "$1,799",
    },
    image:
      "/src/imags/galaxy-s26-ultra-features-colors-ambient-island-mo.jpg",
    badge: {
      fa: "پرفروش",
      en: "Best Seller",
    },
  },

  {
    id: 3,
    name: {
      fa: "پیکسل ۸ پرو",
      en: "Pixel 8 Pro",
    },
    brand: "google",
    price: {
      fa: "۶۹,۸۰۰,۰۰۰",
      en: "$999",
    },
    image:
      "/src/imags/Pixel-8-and-pixel-8-pro-price.jpg",
    badge: {
      fa: "جدید",
      en: "New",
    },
  },
];

function Landing({ onEnter }) {
  const [language, setLanguage] = useState("fa");
  const [darkMode, setDarkMode] = useState(true);

  const isFa = language === "fa";

  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#080b12] text-white"
          : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      {/* ================= NAVBAR ================= */}

      <header
        className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
          darkMode
            ? "bg-[#080b12]/90 border-white/10"
            : "bg-white/90 border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">

            {/* Logo */}

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#ff6b35] rounded-xl flex items-center justify-center font-bold text-white">
                م
              </div>

              <div>
                <h1 className="font-bold text-base">
                  {isFa ? "موبی‌تک" : "Mobitech"}
                </h1>

                <p
                  className={`text-[10px] ${
                    darkMode ? "text-white/40" : "text-gray-500"
                  }`}
                >
                  {isFa
                    ? "مرجع گوشی‌های پرچمدار"
                    : "Premium Smartphone Store"}
                </p>
              </div>
            </div>

            {/* Navigation */}

            <nav className="hidden md:flex items-center gap-7 text-sm">

              <a
                href="#"
                className="text-[#ff6b35] font-medium"
              >
                {isFa ? "گوشی‌ها" : "Phones"}
              </a>

              <a
                href="#products"
                className={`transition ${
                  darkMode
                    ? "text-white/60 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {isFa ? "محصولات" : "Products"}
              </a>

              <a
                href="#features"
                className={`transition ${
                  darkMode
                    ? "text-white/60 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {isFa ? "مزایا" : "Features"}
              </a>

              <a
                href="#footer"
                className={`transition ${
                  darkMode
                    ? "text-white/60 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {isFa ? "پشتیبانی" : "Support"}
              </a>

            </nav>

            {/* Actions */}

            <div className="flex items-center gap-2">

              {/* Language */}

              <button
                onClick={() =>
                  setLanguage(isFa ? "en" : "fa")
                }
                className={`px-3 h-9 rounded-xl border text-xs font-medium transition ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {isFa ? "EN" : "FA"}
              </button>

              {/* Dark / Light */}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition ${
                  darkMode
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-gray-200 bg-white hover:bg-gray-100"
                }`}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              {/* Cart */}

              <button
                className={`relative w-9 h-9 rounded-xl border flex items-center justify-center transition ${
                  darkMode
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-gray-200 bg-white hover:bg-gray-100"
                }`}
              >
                🛒

                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ff6b35] text-white text-[9px] flex items-center justify-center">
                  ۲
                </span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Glow */}

        <div
          className={`absolute w-[500px] h-[500px] blur-[120px] rounded-full -top-40 -right-40 ${
            darkMode
              ? "bg-[#ff6b35]/10"
              : "bg-[#ff6b35]/5"
          }`}
        />

        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14">

          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">

            {/* Text */}

            <div className="text-center lg:text-right order-2 lg:order-1">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-xs mb-5">

                <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-pulse" />

                {isFa
                  ? "نسل جدید گوشی‌های هوشمند"
                  : "The New Generation of Smartphones"}

              </div>

              <h2
                className={`text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-5 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {isFa ? (
                  <>
                    پرچمدار آینده
                    <br />
                    <span className="text-[#ff6b35]">
                      همین‌جاست
                    </span>
                  </>
                ) : (
                  <>
                    The Future
                    <br />
                    <span className="text-[#ff6b35]">
                      Is Here
                    </span>
                  </>
                )}
              </h2>

              <p
                className={`text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-7 mb-7 ${
                  darkMode
                    ? "text-white/50"
                    : "text-gray-600"
                }`}
              >
                {isFa
                  ? "جدیدترین گوشی‌های پرچمدار با طراحی مدرن، عملکرد قدرتمند و ضمانت اصالت کالا."
                  : "The latest flagship smartphones with modern design, powerful performance and guaranteed authenticity."}
              </p>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

                {/* این دکمه وارد Home می‌شود */}

                <button
                  onClick={onEnter}
                  className="px-6 py-3 bg-[#ff6b35] hover:bg-[#ff5722] text-white rounded-xl text-sm font-medium transition"
                >
                  {isFa
                    ? "مشاهده محصولات"
                    : "View Products"}
                </button>

                <button
                  className={`px-6 py-3 rounded-xl text-sm transition ${
                    darkMode
                      ? "border border-white/10 bg-white/5 hover:bg-white/10"
                      : "border border-gray-200 bg-white hover:bg-gray-100"
                  }`}
                >
                  {isFa
                    ? "مقایسه گوشی‌ها"
                    : "Compare Phones"}
                </button>

              </div>

              {/* Stats */}

              <div className="flex justify-center lg:justify-start gap-8 mt-9">

                <div>
                  <p className="text-xl font-bold">
                    ۱۰+
                  </p>

                  <p
                    className={`text-[11px] ${
                      darkMode
                        ? "text-white/40"
                        : "text-gray-500"
                    }`}
                  >
                    {isFa
                      ? "مدل پرچمدار"
                      : "Flagship Models"}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">
                    ۲
                  </p>

                  <p
                    className={`text-[11px] ${
                      darkMode
                        ? "text-white/40"
                        : "text-gray-500"
                    }`}
                  >
                    {isFa
                      ? "سال گارانتی"
                      : "Years Warranty"}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">
                    ۱۰۰٪
                  </p>

                  <p
                    className={`text-[11px] ${
                      darkMode
                        ? "text-white/40"
                        : "text-gray-500"
                    }`}
                  >
                    {isFa
                      ? "اصالت کالا"
                      : "Authenticity"}
                  </p>
                </div>

              </div>

            </div>

            {/* Phones */}

            <div className="order-1 lg:order-2 flex justify-center">

              <div className="relative w-[280px] sm:w-[340px] h-[390px]">

                {/* Glow */}

                <div className="absolute inset-10 bg-[#ff6b35]/20 blur-[70px] rounded-full" />

                {/* Phone 1 */}

                <div className="absolute left-3 top-8 w-36 sm:w-44 h-[300px] sm:h-[350px] bg-gradient-to-b from-gray-700 to-gray-950 rounded-[28px] p-2 border border-white/10 shadow-2xl -rotate-8">

                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-black">

                    <img
                      
                             src="/src/imags/galaxy-s26-ultra-features-colors-ambient-island-mo.jpg"
                      alt="iPhone"
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

                {/* Phone 2 */}

                <div className="absolute right-0 top-0 w-40 sm:w-48 h-[330px] sm:h-[370px] bg-gradient-to-b from-gray-700 to-gray-950 rounded-[28px] p-2 border border-white/10 shadow-2xl rotate-4 z-10">

                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-black">

                    <img
               src="/src/imags/Apple-iPhone-18-Pro-2up-Geo-260909_inline.jpg.large.jpg"
                      alt="Samsung"
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="max-w-6xl mx-auto px-4 pb-10"
      >

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          {/* Feature 1 */}

          <div
            className={`p-4 rounded-2xl border transition flex justify-between items-center ${
              darkMode
                ? "bg-white/[0.03] border-white/10"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
           
<div>
  <h3 className="text-sm font-medium mb-1">
              {isFa
                ? "اصالت کالا"
                : "Authentic Products"}
            </h3>

            <p
              className={`text-xs ${
                darkMode
                  ? "text-white/40"
                  : "text-gray-500"
              }`}
            >
              {isFa
                ? "تضمین اصالت تمام محصولات"
                : "Authenticity guaranteed"}
            </p>
</div>
           <div className="text-[#ff6b35] text-xl mb-2">
            
                <span className="text-4xl"> 
🔰</span>
            </div>
          </div>

          {/* Feature 2 */}

          <div
            className={`p-4 rounded-2xl border transition flex justify-between items-center ${
              darkMode
                ? "bg-white/[0.03] border-white/10"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
         
<div className="">
  <h3 className="text-sm font-medium mb-1 ">
              {isFa
                ? "ارسال سریع"
                : "Fast Delivery"}
            </h3>

            <p
              className={`text-xs ${
                darkMode
                  ? "text-white/40"
                  : "text-gray-500"
              }`}
            >
              {isFa
                ? "ارسال سریع و مطمئن سفارش"
                : "Fast and secure delivery"}
            </p>
</div>
             <div className="text-[#ff6b35] text-xl mb-2 flex items-center text-5xl ">
              <span className="text-4xl"> 🚚</span>

            </div>
          </div>

          {/* Feature 3 */}

          <div
            className={`p-4 rounded-2xl border transition flex justify-between items-center ${
              darkMode
                ? "bg-white/[0.03] border-white/10"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
          
<div>
            <h3 className="text-sm font-medium mb-1">
              {isFa
                ? "گارانتی معتبر"
                : "Official Warranty"}
            </h3>

            <p
              className={`text-xs ${
                darkMode
                  ? "text-white/40"
                  : "text-gray-500"
              }`}
            >
              {isFa
                ? "پشتیبانی و ضمانت محصولات"
                : "Reliable product support"}
            </p>
</div>


  <div className="text-[#ff6b35] text-xl mb-2">
<span className="text-4xl">🛡️</span>

            </div>
          </div>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section
        id="products"
        className="max-w-6xl mx-auto px-4 py-12"
      >

        <div className="flex items-end justify-between mb-6">

          <div>

            <p className="text-[#ff6b35] text-xs mb-2">
              {isFa
                ? "منتخب ما"
                : "Our Selection"}
            </p>

            <h2 className="text-2xl font-bold">
              {isFa
                ? "جدیدترین پرچمداران"
                : "Latest Flagships"}
            </h2>

          </div>

          <button
            className={`text-xs transition ${
              darkMode
                ? "text-white/50 hover:text-[#ff6b35]"
                : "text-gray-500 hover:text-[#ff6b35]"
            }`}
          >
            {isFa
              ? "مشاهده همه ←"
              : "View All →"}
          </button>

        </div>

        {/* Products */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {products.map((product) => (

            <div
              key={product.id}
              className={`group rounded-2xl overflow-hidden border transition duration-300 ${
                darkMode
                  ? "bg-white/[0.03] border-white/10 hover:border-[#ff6b35]/40"
                  : "bg-white border-gray-200 shadow-sm hover:border-[#ff6b35]/50 hover:shadow-md"
              }`}
            >

              {/* Image */}

              <div
                className={`relative h-56 overflow-hidden  ${
                  darkMode
                    ? "bg-black"
                    : "bg-gray-100"
                }`}
              >

                <img
                  src={product.image}
                  alt={product.name[language]}
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#ff6b35] text-white text-[10px]">
                  {product.badge[language]}
                </span>

              </div>

              {/* Content */}

              <div className="p-4">

                <p
                  className={`text-[10px] mb-1 ${
                    darkMode
                      ? "text-white/40"
                      : "text-gray-400"
                  }`}
                >
                  {product.brand}
                </p>

                <h3 className="text-sm font-medium mb-4">
                  {product.name[language]}
                </h3>

                <div className="flex items-center justify-between">

                  <div>

                    <span className="text-base font-bold text-[#ff6b35]">
                      {product.price[language]}
                    </span>

                    {isFa && (
                      <span
                        className={`text-[10px] mr-1 ${
                          darkMode
                            ? "text-white/40"
                            : "text-gray-400"
                        }`}
                      >
                        تومان
                      </span>
                    )}

                  </div>

                  <button className="w-9 h-9 rounded-xl bg-[#ff6b35]/10 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition flex items-center justify-center">
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer
        id="footer"
        className={`border-t transition-colors ${
          darkMode
            ? "border-white/10"
            : "border-gray-200"
        }`}
      >

        <div className="max-w-6xl mx-auto px-4 py-7">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <div className="text-center sm:text-right">

              <p className="font-bold text-sm">
                {isFa
                  ? "موبی‌تک دایرکت"
                  : "Mobitech Direct"}
              </p>

              <p
                className={`text-[10px] mt-1 ${
                  darkMode
                    ? "text-white/30"
                    : "text-gray-400"
                }`}
              >
                {isFa
                  ? "مرجع تخصصی گوشی‌های پرچمدار"
                  : "Premium smartphone store"}
              </p>

            </div>

            <div
              className={`flex gap-5 text-xs ${
                darkMode
                  ? "text-white/30"
                  : "text-gray-400"
              }`}
            >

              <a
                href="#"
                className="hover:text-[#ff6b35] transition"
              >
                {isFa
                  ? "حریم خصوصی"
                  : "Privacy"}
              </a>

              <a
                href="#"
                className="hover:text-[#ff6b35] transition"
              >
                {isFa
                  ? "قوانین"
                  : "Terms"}
              </a>

              <a
                href="#"
                className="hover:text-[#ff6b35] transition"
              >
                {isFa
                  ? "تماس با ما"
                  : "Contact"}
              </a>

            </div>

          </div>

          <div
            className={`text-center text-[10px] mt-6 pt-5 border-t ${
              darkMode
                ? "border-white/10 text-white/20"
                : "border-gray-200 text-gray-400"
            }`}
          >
            © ۱۴۰۳ موبی‌تک دایرکت
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Landing;