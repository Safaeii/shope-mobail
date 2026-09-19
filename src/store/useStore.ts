import { create } from 'zustand';
import { CartItem, FilterState, Phone, ViewType, Accessory, Language } from '../types';
import { PHONES_DATA } from '../data/phones';

interface StoreState {
  // Localization
  language: Language;
  setLanguage: (lang: Language) => void;

  // Navigation
  currentView: ViewType;
  activePhoneId: string | null;
  selectedBrandTab: string;
  navigateTo: (view: ViewType, options?: { phoneId?: string; brand?: string; scrollToTop?: boolean }) => void;

  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (phone: Phone, color?: string, storage?: string, quantity?: number) => void;
  addAccessoryToCart: (accessory: Accessory, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  getCartTotal: () => { subtotal: number; shipping: number; tax: number; total: number; itemCount: number };

  // Wishlist
  wishlist: string[];
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  toggleWishlist: (phoneId: string) => void;
  isInWishlist: (phoneId: string) => boolean;

  // Compare
  compareList: Phone[];
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;
  toggleCompare: (phone: Phone) => void;
  clearCompare: () => void;
  isInCompare: (phoneId: string) => boolean;

  // Filters
  filters: FilterState;
  setSearchQuery: (query: string) => void;
  toggleBrand: (brand: string) => void;
  setPriceRange: (min: number, max: number) => void;
  toggleStorage: (storage: string) => void;
  toggleNetwork: (network: string) => void;
  toggleSpecialOffer: (offer: string) => void;
  setSortBy: (sortBy: FilterState['sortBy']) => void;
  resetFilters: () => void;

  // Modals & UI
  selectedProduct: Phone | null;
  setSelectedProduct: (phone: Phone | null) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (open: boolean) => void;
  toast: { message: string; type: 'success' | 'info' } | null;
  showToast: (message: string, type?: 'success' | 'info') => void;
  dismissToast: () => void;
}

const initialFilters: FilterState = {
  searchQuery: '',
  selectedBrands: [],
  minPrice: 400,
  maxPrice: 2000,
  selectedStorages: [],
  selectedNetworks: [],
  specialOffers: [],
  sortBy: 'featured',
};

// Initial cart items for a populated realistic look like the screenshot (where Cart shows a badge '9')
const initialCart: CartItem[] = [
  {
    cartItemId: 'iphone-15-pro-Natural Titanium-256GB',
    phone: PHONES_DATA[0],
    selectedColor: 'Natural Titanium',
    selectedStorage: '256GB',
    quantity: 1,
    unitPrice: 1199,
  },
  {
    cartItemId: 'galaxy-s24-ultra-Titanium Gray-512GB',
    phone: PHONES_DATA[1],
    selectedColor: 'Titanium Gray',
    selectedStorage: '512GB',
    quantity: 1,
    unitPrice: 1299,
  }
];

export const useStore = create<StoreState>((set, get) => {
  // Initialize HTML dir and lang on first load to Persian (fa)
  if (typeof document !== 'undefined') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'fa';
  }

  return {
    // Localization
    language: 'fa',
    setLanguage: (lang: Language) => {
      set({ language: lang });
      if (typeof document !== 'undefined') {
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
      }
    },

    // Navigation
  currentView: 'home',
  activePhoneId: null,
  selectedBrandTab: 'All',
  navigateTo: (view, options) => {
    set((state) => ({
      currentView: view,
      activePhoneId: options?.phoneId !== undefined ? options.phoneId : (view === 'product-detail' ? state.activePhoneId : null),
      selectedBrandTab: options?.brand !== undefined ? options.brand : state.selectedBrandTab,
    }));
    if (options?.phoneId) {
      const found = PHONES_DATA.find((p) => p.id === options.phoneId);
      if (found) {
        set({ selectedProduct: found });
      }
    }
    if (options?.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  // Cart
  cart: initialCart,
  isCartOpen: false,
  setIsCartOpen: (open) => set({ isCartOpen: open }),

  addToCart: (phone, color, storage, quantity = 1) => {
    const chosenColor = color || phone.colors[0]?.name || 'Default';
    const chosenStorage = storage || phone.specs.storage[0] || '128GB';
    const cartItemId = `${phone.id}-${chosenColor}-${chosenStorage}`;

    set((state) => {
      const existing = state.cart.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              cartItemId,
              phone,
              name: phone.name,
              image: phone.image,
              selectedColor: chosenColor,
              selectedStorage: chosenStorage,
              quantity,
              unitPrice: phone.price,
            },
          ],
        };
      }
    });

    const isFa = get().language === 'fa';
    get().showToast(
      isFa
        ? `${phone.name} (${chosenStorage}) به سبد خرید افزوده شد!`
        : `Added ${phone.name} (${chosenStorage}) to cart!`,
      'success'
    );
  },

  addAccessoryToCart: (accessory, quantity = 1) => {
    const cartItemId = `acc-${accessory.id}`;
    set((state) => {
      const existing = state.cart.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              cartItemId,
              accessory,
              name: accessory.name,
              image: accessory.image,
              selectedColor: accessory.color,
              selectedStorage: accessory.compatibility,
              quantity,
              unitPrice: accessory.price,
            },
          ],
        };
      }
    });
    const isFa = get().language === 'fa';
    get().showToast(
      isFa
        ? `${accessory.name} به سبد خرید افزوده شد!`
        : `Added ${accessory.name} to cart!`,
      'success'
    );
  },

  removeFromCart: (cartItemId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
    }));
    const isFa = get().language === 'fa';
    get().showToast(isFa ? 'کالا از سبد خرید حذف شد' : 'Item removed from cart', 'info');
  },

  updateQuantity: (cartItemId, delta) => {
    set((state) => {
      const updatedCart = state.cart
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
      return { cart: updatedCart };
    });
  },

  clearCart: () => set({ cart: [] }),

  getCartTotal: () => {
    const { cart } = get();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const shipping = subtotal > 500 || subtotal === 0 ? 0 : 25;
    const tax = Math.round(subtotal * 0.08);
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total, itemCount };
  },

  // Wishlist
  wishlist: ['iphone-15-pro', 'pixel-8-pro'],
  isWishlistOpen: false,
  setIsWishlistOpen: (open) => set({ isWishlistOpen: open }),

  toggleWishlist: (phoneId) => {
    set((state) => {
      const exists = state.wishlist.includes(phoneId);
      const updated = exists
        ? state.wishlist.filter((id) => id !== phoneId)
        : [...state.wishlist, phoneId];
      
      const phone = PHONES_DATA.find(p => p.id === phoneId);
      const name = phone ? phone.name : 'Phone';

      const isFa = get().language === 'fa';
      setTimeout(() => {
        get().showToast(
          exists
            ? (isFa ? `${name} از لیست علاقه‌مندی‌ها حذف شد` : `Removed ${name} from Wishlist`)
            : (isFa ? `${name} به لیست علاقه‌مندی‌ها افزوده شد!` : `Saved ${name} to Wishlist!`),
          'info'
        );
      }, 0);

      return { wishlist: updated };
    });
  },

  isInWishlist: (phoneId) => get().wishlist.includes(phoneId),

  // Compare
  compareList: [],
  isCompareOpen: false,
  setIsCompareOpen: (open) => set({ isCompareOpen: open }),

  toggleCompare: (phone) => {
    const { compareList } = get();
    const exists = compareList.some((p) => p.id === phone.id);
    const isFa = get().language === 'fa';

    if (exists) {
      set({ compareList: compareList.filter((p) => p.id !== phone.id) });
      get().showToast(isFa ? `${phone.name} از مقایسه حذف شد` : `Removed ${phone.name} from comparison`, 'info');
    } else {
      if (compareList.length >= 4) {
        get().showToast(
          isFa ? 'حداکثر می‌توانید ۴ گوشی را هم‌زمان مقایسه کنید' : 'You can compare a maximum of 4 phones at once',
          'info'
        );
        return;
      }
      set({ compareList: [...compareList, phone] });
      get().showToast(isFa ? `${phone.name} به مقایسه اضافه شد` : `Added ${phone.name} to comparison`, 'success');
    }
  },

  clearCompare: () => set({ compareList: [] }),

  isInCompare: (phoneId) => get().compareList.some((p) => p.id === phoneId),

  // Filters
  filters: initialFilters,

  setSearchQuery: (query) =>
    set((state) => ({ filters: { ...state.filters, searchQuery: query } })),

  toggleBrand: (brand) =>
    set((state) => {
      const current = state.filters.selectedBrands;
      const updated = current.includes(brand)
        ? current.filter((b) => b !== brand)
        : [...current, brand];
      return { filters: { ...state.filters, selectedBrands: updated } };
    }),

  setPriceRange: (min, max) =>
    set((state) => ({ filters: { ...state.filters, minPrice: min, maxPrice: max } })),

  toggleStorage: (storage) =>
    set((state) => {
      const current = state.filters.selectedStorages;
      const updated = current.includes(storage)
        ? current.filter((s) => s !== storage)
        : [...current, storage];
      return { filters: { ...state.filters, selectedStorages: updated } };
    }),

  toggleNetwork: (network) =>
    set((state) => {
      const current = state.filters.selectedNetworks;
      const updated = current.includes(network)
        ? current.filter((n) => n !== network)
        : [...current, network];
      return { filters: { ...state.filters, selectedNetworks: updated } };
    }),

  toggleSpecialOffer: (offer) =>
    set((state) => {
      const current = state.filters.specialOffers;
      const updated = current.includes(offer)
        ? current.filter((o) => o !== offer)
        : [...current, offer];
      return { filters: { ...state.filters, specialOffers: updated } };
    }),

  setSortBy: (sortBy) =>
    set((state) => ({ filters: { ...state.filters, sortBy } })),

  resetFilters: () => set({ filters: initialFilters }),

  // Modals & UI
  selectedProduct: null,
  setSelectedProduct: (phone) => set({ selectedProduct: phone }),

  isCheckoutOpen: false,
  setIsCheckoutOpen: (open) => set({ isCheckoutOpen: open }),

  isAccountOpen: false,
  setIsAccountOpen: (open) => set({ isAccountOpen: open }),

  isMobileFilterOpen: false,
  setIsMobileFilterOpen: (open) => set({ isMobileFilterOpen: open }),

  toast: null,
  showToast: (message, type = 'success') => {
    set({ toast: { message, type } });
    setTimeout(() => {
      const currentToast = get().toast;
      if (currentToast?.message === message) {
        set({ toast: null });
      }
    }, 3200);
  },
  dismissToast: () => set({ toast: null }),
  };
});
