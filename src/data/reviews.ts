import { ProductReview } from '../types';

export const REVIEWS_DATA: Record<string, ProductReview[]> = {
  'iphone-15-pro': [
    {
      id: 'rev-1',
      author: 'Marcus Vance',
      rating: 5,
      date: '2 days ago',
      verified: true,
      title: 'Titanium build feels phenomenal in hand',
      comment: 'Switched from an iPhone 12 Pro. The weight reduction from the titanium rails is noticeable immediately. The 5x telephoto lens produces mind-blowing portraits and the A17 Pro runs modern games with ray tracing effortlessly.',
      phoneModel: 'iPhone 15 Pro - Natural Titanium 256GB'
    },
    {
      id: 'rev-2',
      author: 'Dr. Elena Rostova',
      rating: 5,
      date: '1 week ago',
      verified: true,
      title: 'USB-C and Action button are game changers',
      comment: 'Finally being able to use a single USB-C cable for my MacBook, iPad, and iPhone is bliss. MobiTech Direct shipped this with 2-day delivery and flawless factory packaging.',
      phoneModel: 'iPhone 15 Pro - Black Titanium 512GB'
    },
    {
      id: 'rev-3',
      author: 'Kevin Thornton',
      rating: 4,
      date: '2 weeks ago',
      verified: true,
      title: 'Outstanding camera and battery life',
      comment: 'Easily lasts a full 16-hour workday with heavy video calls and navigation. ProMotion 120Hz display is as smooth as butter. Highly recommended!',
      phoneModel: 'iPhone 15 Pro - Blue Titanium 256GB'
    }
  ],
  'galaxy-s24-ultra': [
    {
      id: 'rev-s1',
      author: 'David Chen',
      rating: 5,
      date: '3 days ago',
      verified: true,
      title: 'The flat display & S-Pen make this unbeatable',
      comment: 'Samsung eliminating the curved display edges was the best decision ever. S-Pen works right up to the titanium borders, and the anti-reflective Gorilla Glass Armor coating cuts outdoor reflections down to almost zero.',
      phoneModel: 'Galaxy S24 Ultra - Titanium Gray 512GB'
    },
    {
      id: 'rev-s2',
      author: 'Sophia Martinez',
      rating: 5,
      date: '1 week ago',
      verified: true,
      title: 'Galaxy AI Circle to Search is genuinely useful',
      comment: 'I thought AI was marketing hype, but Circle to Search and live translation during international travel are remarkable. 200MP camera captures insane fine details.',
      phoneModel: 'Galaxy S24 Ultra - Titanium Black 256GB'
    }
  ],
  'pixel-8-pro': [
    {
      id: 'rev-p1',
      author: 'Jordan Reed',
      rating: 5,
      date: '5 days ago',
      verified: true,
      title: 'Cleanest software experience with unmatched photography',
      comment: 'Zero bloatware, instantaneous security patches directly from Google, and the camera handles challenging night lighting better than any other flagship.',
      phoneModel: 'Pixel 8 Pro - Bay Blue 256GB'
    }
  ],
  'oneplus-12': [
    {
      id: 'rev-op1',
      author: 'Liam O’Connor',
      rating: 5,
      date: '4 days ago',
      verified: true,
      title: '80W charging ruined other phones for me',
      comment: 'Plugging in for 20 minutes gives me over 80% charge. The Hasselblad color science gives photos natural warmth and dynamic range without aggressive saturation.',
      phoneModel: 'OnePlus 12 - Silky Black 512GB'
    }
  ]
};

export const DEFAULT_REVIEWS: ProductReview[] = [
  {
    id: 'rev-gen-1',
    author: 'Verified Flagship Buyer',
    rating: 5,
    date: '3 days ago',
    verified: true,
    title: 'Authentic unlocked flagship, rapid dispatch',
    comment: 'Phone arrived in pristine condition, sealed by the manufacturer. Inserted my carrier SIM and it activated immediately with 5G full signal.',
    phoneModel: 'MobiTech Direct Certified Unit'
  },
  {
    id: 'rev-gen-2',
    author: 'Rachel K.',
    rating: 5,
    date: '1 week ago',
    verified: true,
    title: 'Excellent customer support and 2-year warranty',
    comment: 'The piece of mind having a 2-year warranty included for free was the deciding factor. Display is stunning and battery longevity exceeds expectations.',
    phoneModel: 'MobiTech Direct Certified Unit'
  }
];
