
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';
import { PRODUCTS } from './constants.tsx';
import { Product, CartItem, Currency } from './types';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC<{
  onProductClick: (product: Product) => void;
  categoryFilter?: string;
  currency: Currency;
}> = ({ onProductClick, categoryFilter, currency }) => {
  const filteredProducts = categoryFilter 
    ? PRODUCTS.filter(p => p.category === categoryFilter)
    : PRODUCTS;

  return (
    <div className="space-y-24 pb-24">
      {!categoryFilter && <Hero />}
      
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl font-black tracking-tight uppercase font-outfit">
              {categoryFilter || 'Active Drops'}
            </h2>
            <p className="text-zinc-500 text-sm mt-2 font-medium">
              Showing {filteredProducts.length} high-performance pieces
            </p>
          </div>
          <div className="flex items-center space-x-6 text-xs uppercase tracking-[0.2em] font-black">
            <button className="text-zinc-400 hover:text-black transition-colors">Sort: Hot</button>
            <button className="text-zinc-400 hover:text-black transition-colors">Filter</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={onProductClick} 
              currency={currency}
            />
          ))}
        </div>
      </section>

      {/* Featured Banner */}
      {!categoryFilter && (
        <section className="w-[95%] mx-auto h-[600px] relative overflow-hidden rounded-[3rem] group">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            alt="Feature"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-white text-5xl md:text-7xl font-black mb-6 italic uppercase font-outfit">Built Different</h3>
            <p className="text-white/80 max-w-xl mb-8 leading-relaxed font-medium text-lg">
              Every RepsApparel piece is designed for maximum durability and effortless style. We don't do basic. We do better.
            </p>
            <button className="bg-white text-black px-12 py-5 rounded-2xl font-black hover:bg-zinc-200 transition-all uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95">
              The Manifest
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('GBP');

  const addToCart = (product: Product, size: string, color: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size && item.selectedColor === color);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Header 
          onCartOpen={() => setIsCartOpen(true)} 
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)} 
          currency={currency}
          onCurrencyChange={setCurrency}
        />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage onProductClick={setSelectedProduct} currency={currency} />} />
            <Route path="/category/:cat" element={<CategoryRouteWrapper onProductClick={setSelectedProduct} currency={currency} />} />
          </Routes>
        </main>

        <Footer />
        <LiveChat />

        {/* Global Modals */}
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addToCart}
            currency={currency}
          />
        )}

        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemove={removeFromCart}
          currency={currency}
        />
      </div>
    </HashRouter>
  );
};

// Simple wrapper to access route params
import { useParams } from 'react-router-dom';
const CategoryRouteWrapper: React.FC<{onProductClick: (p: Product) => void, currency: Currency}> = ({ onProductClick, currency }) => {
  const { cat } = useParams<{cat: string}>();
  return <HomePage onProductClick={onProductClick} categoryFilter={cat} currency={currency} />;
};

export default App;