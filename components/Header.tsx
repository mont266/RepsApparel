
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Zap, Globe } from 'lucide-react';
import { NAVIGATION } from '../constants.tsx';
import { Currency } from '../types';

interface HeaderProps {
  onCartOpen: () => void;
  cartCount: number;
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartOpen, cartCount, currency, onCurrencyChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-3' : 'py-6'
    }`}>
      <div className={`max-w-[95%] mx-auto px-6 rounded-2xl transition-all duration-500 ${
        isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent'
      } flex items-center justify-between`}>
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-zinc-900 p-2 hover:bg-zinc-100 rounded-xl transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <div className="flex-1 flex justify-center lg:justify-start items-center space-x-2">
          <Zap className="text-purple-600 fill-purple-600" size={24} />
          <a href="#/" className="text-2xl font-black tracking-tighter font-outfit text-reps-gradient">
            REPS<span className="text-zinc-900">APPAREL</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] font-extrabold text-zinc-900 hover:text-purple-600 transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-reps-gradient transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Utility Icons */}
        <div className="flex-1 flex items-center justify-end space-x-2 md:space-x-4">
          <div className="hidden sm:flex items-center space-x-2 bg-zinc-100 p-1 rounded-full border border-zinc-200">
            <button 
              onClick={() => onCurrencyChange('GBP')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${currency === 'GBP' ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              £ GBP
            </button>
            <button 
              onClick={() => onCurrencyChange('EUR')}
              className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${currency === 'EUR' ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              € EUR
            </button>
          </div>
          
          <button className="p-2 text-zinc-900 hover:bg-zinc-100 rounded-full transition-all">
            <Search size={20} />
          </button>
          
          <button 
            onClick={onCartOpen}
            className="p-2.5 bg-zinc-900 text-white hover:bg-purple-600 transition-all rounded-full relative shadow-xl hover:scale-110 active:scale-95"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[60] transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="p-8 flex flex-col h-full bg-gradient-to-b from-purple-50 to-white">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <Zap className="text-purple-600 fill-purple-600" size={28} />
              <span className="text-3xl font-black tracking-tighter text-reps-gradient font-outfit">REPSAPPAREL</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-3 bg-zinc-100 rounded-2xl"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex items-center space-x-4 mb-8">
             <button 
              onClick={() => onCurrencyChange('GBP')}
              className={`flex-1 py-4 rounded-2xl text-xs font-black transition-all border ${currency === 'GBP' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-500 border-zinc-200'}`}
            >
              £ GBP
            </button>
            <button 
              onClick={() => onCurrencyChange('EUR')}
              className={`flex-1 py-4 rounded-2xl text-xs font-black transition-all border ${currency === 'EUR' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-500 border-zinc-200'}`}
            >
              € EUR
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black tracking-tight text-zinc-900 hover:text-purple-600 transition-colors font-outfit"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto p-8 rounded-3xl bg-reps-gradient text-white">
            <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-4">Exclusive Perks</p>
            <h4 className="text-xl font-bold mb-4">Join the REPS Rewards program today.</h4>
            <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
