
import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Essential Boxy Tee',
    category: Category.Essentials,
    price: 45,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800',
    description: 'A heavyweight cotton tee with a modern oversized fit. Perfect for layering or wearing alone.',
    colors: ['Black', 'Off-White', 'Slate'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Minimalist Windbreaker',
    category: Category.Outerwear,
    price: 120,
    image: 'https://images.unsplash.com/photo-1514313883311-135a49a2a7b0?auto=format&fit=crop&q=80&w=800',
    description: 'Technical water-resistant shell designed for the urban commuter. Sleek silhouettes meet function.',
    colors: ['Midnight', 'Forest'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Structure Wool Coat',
    category: Category.Outerwear,
    price: 340,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
    description: 'Italian-milled wool blend with a double-breasted closure. A timeless statement piece.',
    colors: ['Camel', 'Charcoal'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: '4',
    name: 'Raw Denim Trouser',
    category: Category.Essentials,
    price: 180,
    image: 'https://images.unsplash.com/photo-1604176354204-926873782855?auto=format&fit=crop&q=80&w=800',
    description: 'Japanese selvedge denim with a straight leg cut. Ages beautifully over time.',
    colors: ['Indigo'],
    sizes: ['30', '32', '34', '36']
  },
  {
    id: '5',
    name: 'Merino Knit Scarf',
    category: Category.Accessories,
    price: 85,
    image: 'https://images.unsplash.com/photo-1610253463324-3c8707e15e0a?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-soft merino wool knitted in a chunky rib pattern for maximum warmth.',
    colors: ['Cream', 'Navy', 'Grey'],
    sizes: ['OS']
  },
  {
    id: '6',
    name: 'Tech Fleece Hoodie',
    category: Category.NewArrivals,
    price: 110,
    image: 'https://images.unsplash.com/photo-1621953255364-285e6f3f7734?auto=format&fit=crop&q=80&w=800',
    description: 'Standard fit hoodie with hidden side-seam pockets and a structured hood.',
    colors: ['Dusty Pink', 'Black', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

export const NAVIGATION = [
  { name: 'Shop All', href: '#/' },
  { name: 'Essentials', href: '#/category/Essentials' },
  { name: 'Outerwear', href: '#/category/Outerwear' },
  { name: 'Accessories', href: '#/category/Accessories' }
];