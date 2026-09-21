// import { div } from "motion/react-client";

// function LandingCard (){
//     return(
//         <div>



// {/* ================= NEW PRODUCTS ================= */}

// <section className="max-w-6xl mx-auto px-4 py-12">

//   {/* Section Header */}
//   <div className="flex items-end justify-between mb-8">

//     <div>
//       <span className="text-[#ff6b35] text-sm">
//         تازه واردها
//       </span>

//       <h2 className="text-3xl font-bold mt-2">
//         محصولات جدید
//       </h2>

//       <p className="text-sm text-white/40 mt-2">
//         جدیدترین گوشی‌های اضافه شده به موبی‌تک
//       </p>
//     </div>

//     <button className="text-sm text-white/50 hover:text-[#ff6b35] transition">
//       مشاهده همه ←
//     </button>

//   </div>


//   {/* Products Grid */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//     {/* Card 1 */}
// {/* 
//     <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 min-h-[330px] hover:border-[#ff6b35]/40 transition">

      

//       <div className="flex items-center justify-between gap-6 h-[240px]">

//         <div className="flex-1">

     

//           <p className="text-sm text-white/40 leading-7">
//             طراحی حرفه‌ای با بدنه تیتانیومی و عملکرد فوق‌العاده
//           </p>

//           <div className="mt-5">
//             <span className="text-xl font-bold">
//               $1,199
//             </span>
//           </div>

        
//         </div>

//         <div className="w-[170px] h-[220px] flex items-center justify-center">
//           <img
//             src="/src/imags/images 10.jpeg"
//             alt="iPhone 15 Pro"
//             className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
//           />
//         </div>

//       </div>

//     </div> */}
// <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] min-h-[500px] hover:border-[#ff6b35]/40 transition">

//   {/* Image */}
//   <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">

//     <img
//       src="/src/imags/images 10.jpeg"
//       alt="iPhone 15 Pro"
//       className="
//         w-full
//         h-full
//         object-contain
//         p-8
//         group-hover:scale-105
//         transition-transform
//         duration-500
//       "
//     />

//     {/* Overlay */}
//     <div
//       className="
//         absolute
//         inset-x-0
//         bottom-0
//         p-6
//         pt-20
//         bg-gradient-to-t
//         from-black/90
//         via-black/60
//         to-transparent
//         translate-y-full
//         group-hover:translate-y-0
//         transition-transform
//         duration-500
//       "
//     >

//       <h3 className="text-xl font-bold mb-2">
//         iPhone 15 Pro
//       </h3>

//       <p className="text-sm text-white/60 leading-7 mb-4">
//         طراحی حرفه‌ای با بدنه تیتانیومی و عملکرد فوق‌العاده
//       </p>

//       <div className="flex items-center justify-between">

//         <span className="text-2xl font-bold">
//           $1,199
//         </span>

//         <button
//           className="
//             px-4
//             py-2
//             rounded-xl
//             bg-[#ff6b35]
//             hover:bg-[#ff5722]
//             text-white
//             text-sm
//             transition
//           "
//         >
//           مشاهده
//         </button>

//       </div>

//     </div>

//   </div>

// </div>

//     {/* Card 2 */}
//     <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 min-h-[330px] hover:border-[#ff6b35]/40 transition">

//       <div className="flex items-center justify-between">

//         <span className="px-3 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-xs">
//           جدید
//         </span>

//         <span className="text-white/30 text-sm">
//           Samsung
//         </span>

//       </div>

//       <div className="flex items-center justify-between gap-6 h-[240px]">

//         <div className="flex-1">

//           <h3 className="text-2xl font-bold mb-3">
//             Galaxy S26 Ultra
//           </h3>

//           <p className="text-sm text-white/40 leading-7">
//             نمایشگر حرفه‌ای، دوربین قدرتمند و عملکرد سریع
//           </p>

//           <div className="mt-5">
//             <span className="text-xl font-bold">
//               $1,099
//             </span>
//           </div>

//           <button className="mt-5 px-5 py-2.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff5722] text-white text-sm transition">
//             مشاهده محصول
//           </button>

//         </div>

//         <div className="w-[170px] h-[220px] flex items-center justify-center">
//           <img
//             src="/src/imags/images (6).jpeg"
//             alt="Samsung S26 Ultra"
//             className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
//           />
//         </div>

//       </div>

//     </div>


//     {/* Card 3 */}
//     <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 min-h-[330px] hover:border-[#ff6b35]/40 transition">

//       <div className="flex items-center justify-between">

//         <span className="px-3 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-xs">
//           جدید
//         </span>

//         <span className="text-white/30 text-sm">
//           Samsung
//         </span>

//       </div>

//       <div className="flex items-center justify-between gap-6 h-[240px]">

//         <div className="flex-1">

//           <h3 className="text-2xl font-bold mb-3">
//             Galaxy S26 FE
//           </h3>

//           <p className="text-sm text-white/40 leading-7">
//             طراحی مدرن، سخت‌افزار قدرتمند و تجربه‌ای روان
//           </p>

//           <div className="mt-5">
//             <span className="text-xl font-bold">
//               $799
//             </span>
//           </div>

//           <button className="mt-5 px-5 py-2.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff5722] text-white text-sm transition">
//             مشاهده محصول
//           </button>

//         </div>

//         <div className="w-[170px] h-[220px] flex items-center justify-center">
//           <img
//             src="/src/imags/images (7).jpeg"
//             alt="Samsung S26 FE"
//             className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
//           />
//         </div>

//       </div>

//     </div>


//     {/* Card 4 */}
//     <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 min-h-[330px] hover:border-[#ff6b35]/40 transition">

//       <div className="flex items-center justify-between">

//         <span className="px-3 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-xs">
//           جدید
//         </span>

//         <span className="text-white/30 text-sm">
//           Apple
//         </span>

//       </div>

//       <div className="flex items-center justify-between gap-6 h-[240px]">

//         <div className="flex-1">

//           <h3 className="text-2xl font-bold mb-3">
//             iPhone 15
//           </h3>

//           <p className="text-sm text-white/40 leading-7">
//             طراحی زیبا، سرعت بالا و تجربه‌ای سریع و روان
//           </p>

//           <div className="mt-5">
//             <span className="text-xl font-bold">
//               $899
//             </span>
//           </div>

//           <button className="mt-5 px-5 py-2.5 rounded-xl bg-[#ff6b35] hover:bg-[#ff5722] text-white text-sm transition">
//             مشاهده محصول
//           </button>

//         </div>

//         <div className="w-[170px] h-[220px] flex items-center justify-center">
//           <img
//             src="/src/imags/images (8).jpeg"
//             alt="iPhone 15"
//             className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
//           />
//         </div>

//       </div>

//     </div>

//   </div>

// </section>


function LandingCard() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">

      {/* ================= NEW PRODUCTS ================= */}

      <div className="flex items-end justify-between mb-8">

        <div>
          <span className="text-[#ff6b35] text-sm">
            تازه واردها
          </span>

          <h2 className="text-3xl font-bold mt-2">
            محصولات جدید
          </h2>

          <p className="text-sm text-white/40 mt-2">
            جدیدترین گوشی‌های اضافه شده به موبی‌تک
          </p>
        </div>

        <button className="text-sm text-white/50 hover:text-[#ff6b35] transition">
          مشاهده همه ←
        </button>

      </div>


      {/* ================= PRODUCTS GRID ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        {/* ================= CARD 1 ================= */}

        <div className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          min-h-[500px]
          hover:border-[#ff6b35]/40
          transition
        ">

          <div className="
            relative
            w-full
            h-[500px]
            flex
            items-center
            justify-center
            overflow-hidden
          ">

            {/* IMAGE */}

            <img
              src="/src/imags/images 10.jpeg"
              alt="iPhone 15 Pro"
              className="
                w-full
                h-full
                object-contain
                p-8
                group-hover:scale-105
                transition-transform
                duration-500
              "
            />


            {/* HOVER OVERLAY */}

            <div className="
              absolute
              inset-x-0
              bottom-0
              p-6
              pt-24
              bg-gradient-to-t
              from-black/95
              via-black/70
              to-transparent
              translate-y-full
              opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all
              duration-500
            ">

              <span className="text-xs text-[#ff6b35]">
                Apple
              </span>

              <h3 className="text-2xl font-bold mt-2">
                iPhone 15 Pro
              </h3>

              <p className="text-sm text-white/50 leading-7 mt-2">
                طراحی حرفه‌ای با بدنه تیتانیومی و عملکرد فوق‌العاده
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold">
                  $1,199
                </span>

                <button className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-[#ff6b35]
                  hover:bg-[#ff5722]
                  text-white
                  text-sm
                  transition
                ">
                  مشاهده محصول
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* ================= CARD 2 ================= */}

        <div className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          min-h-[500px]
          hover:border-[#ff6b35]/40
          transition
        ">

          <div className="
            relative
            w-full
            h-[500px]
            flex
            items-center
            justify-center
            overflow-hidden
          ">

            <img
              src="/src/imags/images (6).jpeg"
              alt="Galaxy S26 Ultra"
              className="
                w-full
                h-full
                object-contain
                p-8
                group-hover:scale-105
                transition-transform
                duration-500
              "
            />


            {/* HOVER OVERLAY */}

            <div className="
              absolute
              inset-x-0
              bottom-0
              p-6
              pt-24
              bg-gradient-to-t
              from-black/95
              via-black/70
              to-transparent
              translate-y-full
              opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all
              duration-500
            ">

              <span className="text-xs text-[#ff6b35]">
                Samsung
              </span>

              <h3 className="text-2xl font-bold mt-2">
                Galaxy S26 Ultra
              </h3>

              <p className="text-sm text-white/50 leading-7 mt-2">
                نمایشگر حرفه‌ای، دوربین قدرتمند و عملکرد سریع
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold">
                  $1,099
                </span>

                <button className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-[#ff6b35]
                  hover:bg-[#ff5722]
                  text-white
                  text-sm
                  transition
                ">
                  مشاهده محصول
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* ================= CARD 3 ================= */}

        <div className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          min-h-[500px]
          hover:border-[#ff6b35]/40
          transition
        ">

          <div className="
            relative
            w-full
            h-[500px]
            flex
            items-center
            justify-center
            overflow-hidden
          ">

            <img
              src="/src/imags/images (7).jpeg"
              alt="Galaxy S26 FE"
              className="
                w-full
                h-full
                object-contain
                p-8
                group-hover:scale-105
                transition-transform
                duration-500
              "
            />


            {/* HOVER OVERLAY */}

            <div className="
              absolute
              inset-x-0
              bottom-0
              p-6
              pt-24
              bg-gradient-to-t
              from-black/95
              via-black/70
              to-transparent
              translate-y-full
              opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all
              duration-500
            ">

              <span className="text-xs text-[#ff6b35]">
                Samsung
              </span>

              <h3 className="text-2xl font-bold mt-2">
                Galaxy S26 FE
              </h3>

              <p className="text-sm text-white/50 leading-7 mt-2">
                طراحی مدرن، سخت‌افزار قدرتمند و تجربه‌ای روان
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold">
                  $799
                </span>

                <button className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-[#ff6b35]
                  hover:bg-[#ff5722]
                  text-white
                  text-sm
                  transition
                ">
                  مشاهده محصول
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* ================= CARD 4 ================= */}

        <div className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          min-h-[500px]
          hover:border-[#ff6b35]/40
          transition
        ">

          <div className="
            relative
            w-full
            h-[500px]
            flex
            items-center
            justify-center
            overflow-hidden
          ">

            <img
              src="/src/imags/images (8).jpeg"
              alt="iPhone 15"
              className="
                w-full
                h-full
                object-contain
                p-8
                group-hover:scale-105
                transition-transform
                duration-500
              "
            />


            {/* HOVER OVERLAY */}

            <div className="
              absolute
              inset-x-0
              bottom-0
              p-6
              pt-24
              bg-gradient-to-t
              from-black/95
              via-black/70
              to-transparent
              translate-y-full
              opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all
              duration-500
            ">

              <span className="text-xs text-[#ff6b35]">
                Apple
              </span>

              <h3 className="text-2xl font-bold mt-2">
                iPhone 15
              </h3>

              <p className="text-sm text-white/50 leading-7 mt-2">
                طراحی زیبا، سرعت بالا و تجربه‌ای سریع و روان
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold">
                  $899
                </span>

                <button className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-[#ff6b35]
                  hover:bg-[#ff5722]
                  text-white
                  text-sm
                  transition
                ">
                  مشاهده محصول
                </button>

              </div>

            </div>

          </div>

        </div>


      </div>

    </section>
  );
}

export default LandingCard;
