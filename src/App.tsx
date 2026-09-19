// import React from 'react';
// import { Header } from './components/Header';
// import { NavBar } from './components/NavBar';
// import { HeroBanner } from './components/HeroBanner';
// import { FilterSidebar } from './components/FilterSidebar';
// import { ProductGrid } from './components/ProductGrid';
// import { CartDrawer } from './components/CartDrawer';
// import { ProductDetailModal } from './components/ProductDetailModal';
// import { CompareModal, CompareFloatingTray } from './components/CompareModal';
// import { WishlistModal } from './components/WishlistModal';
// import { AccountModal } from './components/AccountModal';
// import { CheckoutModal } from './components/CheckoutModal';
// import { MobileBottomNav } from './components/MobileBottomNav';
// import { Toast } from './components/Toast';
// import { Footer } from './components/Footer';
// import { ProductDetailPage } from './pages/ProductDetailPage';
// import { BrandsPage } from './pages/BrandsPage';
// import { AccessoriesPage } from './pages/AccessoriesPage';
// import { DealsPage } from './pages/DealsPage';
// import { SupportPage } from './pages/SupportPage';
// import { useStore } from './store/useStore';
// import { X, SlidersHorizontal } from 'lucide-react';

// export default function App() {
//   const { currentView, isMobileFilterOpen, setIsMobileFilterOpen } = useStore();

//   const renderCurrentView = () => {
//     switch (currentView) {
//       case 'product-detail':
//         return <ProductDetailPage />;
//       case 'brands':
//         return <BrandsPage />;
//       case 'accessories':
//         return <AccessoriesPage />;
//       case 'deals':
//         return <DealsPage />;
//       case 'support':
//         return <SupportPage />;
//       case 'home':
//       default:
//         return (
//           <>
//             {/* Hero Banner Flagship Showcase */}
//             <HeroBanner />

//             {/* Main Store Content Area */}
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1 w-full">
//               <div className="flex gap-6 items-start">
//                 {/* Left Desktop Filter Sidebar */}
//                 <div className="w-64 xl:w-72 shrink-0 hidden lg:block sticky top-24">
//                   <FilterSidebar />
//                 </div>

//                 {/* Right Main Products Grid */}
//                 <div className="flex-1 min-w-0">
//                   <ProductGrid />
//                 </div>
//               </div>
//             </main>
//           </>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8f9fa] text-gray-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
//       {/* Notifications */}
//       <Toast />

//       {/* Main App Header */}
//       <Header />

//       {/* Categories Nav Bar */}
//       <NavBar />

//       {/* Dynamic View Router */}
//       <div className="flex-1 flex flex-col">
//         {renderCurrentView()}
//       </div>

//       {/* Mobile Filters Slide-in Modal (Active on home view) */}
//       {isMobileFilterOpen && currentView === 'home' && (
//         <div className="fixed inset-0 z-50 overflow-y-auto lg:hidden">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
//             onClick={() => setIsMobileFilterOpen(false)}
//           />
//           <div className="flex min-h-full items-end sm:items-center justify-center">
//             <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 max-h-[85vh] overflow-y-auto z-10 animate-slide-up">
//               <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-2">
//                 <div className="flex items-center gap-2">
//                   <SlidersHorizontal className="w-4 h-4 text-orange-500" />
//                   <span className="font-bold text-sm uppercase tracking-wider text-gray-900">
//                     Filter & Sort Smartphones
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => setIsMobileFilterOpen(false)}
//                   className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
//               <FilterSidebar isMobile />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modals, Drawers & Overlays */}
//       <CartDrawer />
//       <ProductDetailModal />
//       <CompareModal />
//       <CompareFloatingTray />
//       <WishlistModal />
//       <AccountModal />
//       <CheckoutModal />

//       {/* Sticky Bottom Mobile Nav Bar matching reference image */}
//       <MobileBottomNav />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

import React, { useState } from 'react';
import Landing from './components/Landing';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { HeroBanner } from './components/HeroBanner';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductGrid } from './components/ProductGrid';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CompareModal, CompareFloatingTray } from './components/CompareModal';
import { WishlistModal } from './components/WishlistModal';
import { AccountModal } from './components/AccountModal';
import { CheckoutModal } from './components/CheckoutModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';

import { ProductDetailPage } from './pages/ProductDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { DealsPage } from './pages/DealsPage';
import { SupportPage } from './pages/SupportPage';

import { useStore } from './store/useStore';
import { X, SlidersHorizontal } from 'lucide-react';

export default function App() {

  // نمایش Landing در شروع سایت
  const [showLanding, setShowLanding] = useState(true);

  const {
    currentView,
    isMobileFilterOpen,
    setIsMobileFilterOpen
  } = useStore();

  // اگر Landing فعال باشد، فقط Landing نمایش داده می‌شود
  if (showLanding) {
    return (
      <Landing
        onEnter={() => setShowLanding(false)}
      />
    );
  }

  const renderCurrentView = () => {
    switch (currentView) {

      case 'product-detail':
        return <ProductDetailPage />;

      case 'brands':
        return <BrandsPage />;

      case 'accessories':
        return <AccessoriesPage />;

      case 'deals':
        return <DealsPage />;

      case 'support':
        return <SupportPage />;

      case 'home':
      default:
        return (
          <>
            {/* Hero Banner Flagship Showcase */}
            <HeroBanner />

            {/* Main Store Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1 w-full">

              <div className="flex gap-6 items-start">

                {/* Left Desktop Filter Sidebar */}
                <div className="w-64 xl:w-72 shrink-0 hidden lg:block sticky top-24">
                  <FilterSidebar />
                </div>

                {/* Right Main Products Grid */}
                <div className="flex-1 min-w-0">
                  <ProductGrid />
                </div>

              </div>

            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">

      {/* Notifications */}
      <Toast />

      {/* Main App Header */}
      <Header />

      {/* Categories Nav Bar */}
      <NavBar />

      {/* Dynamic View Router */}
      <div className="flex-1 flex flex-col">
        {renderCurrentView()}
      </div>

      {/* Mobile Filters Slide-in Modal */}
      {isMobileFilterOpen && currentView === 'home' && (
        <div className="fixed inset-0 z-50 overflow-y-auto lg:hidden">

          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="flex min-h-full items-end sm:items-center justify-center">

            <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 max-h-[85vh] overflow-y-auto z-10 animate-slide-up">

              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-2">

                <div className="flex items-center gap-2">

                  <SlidersHorizontal className="w-4 h-4 text-orange-500" />

                  <span className="font-bold text-sm uppercase tracking-wider text-gray-900">
                    Filter & Sort Smartphones
                  </span>

                </div>

                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>

              <FilterSidebar isMobile />

            </div>

          </div>

        </div>
      )}

      {/* Modals, Drawers & Overlays */}
      <CartDrawer />

      <ProductDetailModal />

      <CompareModal />

      <CompareFloatingTray />

      <WishlistModal />

      <AccountModal />

      <CheckoutModal />

      {/* Sticky Bottom Mobile Nav Bar */}
      <MobileBottomNav />

      {/* Footer */}
      <Footer />

    </div>
  );
}