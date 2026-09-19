export interface PhoneColor {
  name: string;
  hex: string;
  bgClass: string;
}

export interface PhoneSpecs {
  display: string;
  chip: string;
  camera: string;
  battery: string;
  os: string;
  weight: string;
  storage: string[];
  network: string[];
}

export interface Phone {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Google' | 'OnePlus' | 'Xiaomi';
  model: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  colors: PhoneColor[];
  specs: PhoneSpecs;
  inStock: boolean;
  isNewArrival?: boolean;
  onSale?: boolean;
  hasFreeShipping?: boolean;
  hasWarranty?: boolean;
  description: string;
}

export interface Accessory {
  id: string;
  name: string;
  brand: string;
  category: 'Cases' | 'Chargers' | 'Audio' | 'Screen Protectors' | 'Mounts & Power';
  compatibility: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  inStock: boolean;
  color?: string;
  features: string[];
  description: string;
}

export interface CartItem {
  cartItemId: string; // unique combo
  phone?: Phone;
  accessory?: Accessory;
  name?: string;
  image?: string;
  selectedColor?: string;
  selectedStorage?: string;
  quantity: number;
  unitPrice: number;
}

export interface FilterState {
  searchQuery: string;
  selectedBrands: string[];
  minPrice: number;
  maxPrice: number;
  selectedStorages: string[];
  selectedNetworks: string[];
  specialOffers: string[]; // 'onSale' | 'freeShipping' | 'inStock' | 'newArrival'
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export type ViewType = 'home' | 'product-detail' | 'brands' | 'accessories' | 'deals' | 'support';

export type Language = 'fa' | 'en';

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  comment: string;
  phoneModel: string;
}
