
import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Honey Nuts Premium',
    price: 24.99,
    image: '/lovable-uploads/06df3313-f693-4ed2-af99-a9e134b77f7b.png',
    description: '100% Organic Premium Honey Nuts - A perfect blend of nutrition and taste',
    benefits: [
      'Prevents Anemia',
      'Reduces Cholesterol',
      'Nutrient Rich',
      'Enhances Brain Health',
      'Supports Healthy Diet',
      'Improves Hemoglobin',
      'Improves Strength',
      'Boosts Immunity'
    ],
    ingredients: [
      'Pistachios',
      'Almonds',
      'Walnuts',
      'Sesame',
      'Pine',
      'Sunflower Seeds',
      'Raisins',
      'Honey'
    ]
  },
  {
    id: '2',
    name: 'Organic Almond Mix',
    price: 19.99,
    image: '/placeholder.svg',
    description: 'Premium organic almonds sourced from the finest orchards',
    benefits: [
      'Rich in Vitamin E',
      'Heart Healthy',
      'Supports Weight Management',
      'Boosts Brain Function',
      'Improves Skin Health'
    ],
    ingredients: [
      'Organic Almonds',
      'Natural Sea Salt'
    ]
  },
  {
    id: '3',
    name: 'Protein Power Mix',
    price: 32.99,
    image: '/placeholder.svg',
    description: 'High-protein nut and seed combination for active lifestyles',
    benefits: [
      'High Protein Content',
      'Muscle Building Support',
      'Sustained Energy',
      'Post-Workout Recovery',
      'Appetite Control'
    ],
    ingredients: [
      'Pumpkin Seeds',
      'Sunflower Seeds',
      'Cashews',
      'Brazil Nuts',
      'Chia Seeds'
    ]
  },
  {
    id: '4',
    name: 'Antioxidant Berry Mix',
    price: 28.99,
    image: '/placeholder.svg',
    description: 'Dried berries and nuts packed with antioxidants and natural goodness',
    benefits: [
      'Rich in Antioxidants',
      'Supports Immune System',
      'Anti-inflammatory Properties',
      'Heart Health Support',
      'Natural Energy Boost'
    ],
    ingredients: [
      'Dried Cranberries',
      'Goji Berries',
      'Blueberries',
      'Walnuts',
      'Pecans'
    ]
  }
];
