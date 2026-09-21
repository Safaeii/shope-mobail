
import { useState, useEffect } from "react";

function Slider() {
  const slides = [
    {
      badge: "پیشنهاد ویژه موبی‌تک",
      title: "قدرت در تیتانیوم",
      product: "iPhone 15 Pro",
      description: "طراحی حرفه‌ای، عملکرد فوق‌العاده و بدنه تیتانیومی",
      image: "/src/imags/images.jpeg",
    },
    {
      badge: "پرچمدار جدید",
      title: "قدرتی فراتر از انتظار",
      product: "Samsung S26 Ultra",
      description: "دوربین حرفه‌ای، نمایشگر فوق‌العاده و عملکرد قدرتمند",
      image: "/src/imags/images (6).jpeg",
    },
    {
      badge: "انتخاب هوشمند",
      title: "قدرت بیشتر، قیمت بهتر",
      product: "Samsung S26 FE",
      description: "ترکیبی از طراحی مدرن و عملکرد قدرتمند",
      image: "/src/imags/images (7).jpeg",
    },
    {
      badge: "جدید در موبی‌تک",
      title: "تکنولوژی در دستان شما",
      product: "iPhone 15",
      description: "طراحی زیبا، سرعت بالا و تجربه‌ای روان",
      image: "/src/imags/images (8).jpeg",
    },
  ];

  // شماره اسلاید فعلی
  const [current, setCurrent] = useState(0);

  // اسلاید بعدی
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // اسلاید قبلی
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // تغییر خودکار اسلاید
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

        {/* ================= MAIN ================= */}

        <div className="grid lg:grid-cols-2 items-center min-h-[320px] px-8 py-10">

          {/* ================= TEXT ================= */}

          <div className="text-center lg:text-right order-2 lg:order-1">

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-xs mb-4">

              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />

              {slides[current].badge}

            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              {slides[current].title}
            </h2>

            <h3 className="text-xl text-[#ff6b35] font-semibold mb-4">
              {slides[current].product}
            </h3>

            <p className="text-sm text-white/50 leading-7 mb-6">
              {slides[current].description}
            </p>

            <button className="px-5 py-3 rounded-xl bg-[#ff6b35] hover:bg-[#ff5722] text-white text-sm transition">
              مشاهده محصول
            </button>

          </div>

          {/* ================= PHONE ================= */}

          <div className="flex justify-center order-1 lg:order-2">

            <div className="relative w-[180px] sm:w-[220px] h-[240px] sm:h-[280px]">

              {/* Glow */}

              <div className="absolute inset-5 bg-[#ff6b35]/20 blur-[50px] rounded-full" />

              {/* Phone */}
<div className="flex justify-center order-1 lg:order-2">

  <img
    src={slides[current].image}
    alt={slides[current].product}
    className="w-[280px] sm:w-[220px] h-[240px] sm:h-[280px] object-contain"
  />

</div>
    

            </div>

          </div>

        </div>

        {/* ================= PREVIOUS ================= */}

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 border border-white/10 text-white hover:bg-[#ff6b35] transition"
        >
          ‹
        </button>

        {/* ================= NEXT ================= */}

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 border border-white/10 text-white hover:bg-[#ff6b35] transition"
        >
          ›
        </button>

        {/* ================= DOTS ================= */}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "w-7 bg-[#ff6b35]"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Slider;
