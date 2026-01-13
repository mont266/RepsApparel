
import React, { useState } from 'react';
import { X, Heart, ShieldCheck, Truck } from 'lucide-react';
import { Product, Currency } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  currency: Currency;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart, currency }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const formatPrice = (price: number) => {
    if (currency === 'GBP') return `£${price}`;
    return `€${Math.round(price * 1.18)}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-6xl h-full max-h-[90vh] overflow-hidden rounded-[2.5rem] flex flex-col lg:flex-row animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full hover:rotate-90 transition-transform shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Gallery */}
        <div className="lg:w-3/5 h-1/2 lg:h-full bg-zinc-100 overflow-y-auto no-scrollbar">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto bg-white">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-purple-500 mb-2">{product.category}</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 font-outfit uppercase">{product.name}</h2>
              <p className="text-3xl font-black text-zinc-900">{formatPrice(product.price)}</p>
            </div>

            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black text-zinc-900 mb-4">Color: {selectedColor}</p>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color ? 'border-purple-600 scale-110' : 'border-zinc-200'
                    }`}
                    style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] uppercase tracking-widest font-black text-zinc-900">Select Size</p>
                <button className="text-[10px] uppercase tracking-widest font-black text-purple-600 underline decoration-purple-200 underline-offset-4">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 text-xs font-black border-2 transition-all rounded-xl ${
                      selectedSize === size ? 'bg-zinc-900 text-white border-zinc-900' : 'border-zinc-100 hover:border-zinc-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex space-x-4 pt-4">
              <button 
                onClick={() => onAddToCart(product, selectedSize, selectedColor)}
                className="flex-1 bg-reps-gradient text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all active:scale-95 shadow-2xl"
              >
                Add to Bag
              </button>
              <button className="p-5 border-2 border-zinc-100 rounded-2xl hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-all">
                <Heart size={20} />
              </button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex items-center space-x-3 text-xs font-bold text-zinc-500 bg-zinc-50 p-4 rounded-xl">
                <Truck size={18} className="text-purple-600" />
                <span>Express UK & EU Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-bold text-zinc-500 bg-zinc-50 p-4 rounded-xl">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>Performance Tested Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
