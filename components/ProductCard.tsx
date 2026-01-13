
import React from 'react';
import { Product, Currency } from '../types';
import { Plus, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  currency: Currency;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, currency }) => {
  const isNew = product.category === 'New Arrivals';

  const formatPrice = (price: number) => {
    if (currency === 'GBP') return `£${price}`;
    return `€${Math.round(price * 1.18)}`;
  };

  return (
    <div 
      className="group cursor-pointer perspective-1000"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 rounded-[2rem] shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {isNew && (
            <span className="bg-emerald-400 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              Fresh Drop
            </span>
          )}
          <span className="bg-white/80 backdrop-blur-md text-zinc-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>

        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-all scale-0 group-hover:scale-100 duration-300">
          <Heart size={18} />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-2 active:scale-95 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              onClick(product);
            }}
          >
            <Plus size={16} />
            <span>Quick Add</span>
          </button>
        </div>
      </div>
      
      <div className="space-y-2 px-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-black tracking-tight text-zinc-900 group-hover:text-purple-600 transition-colors font-outfit">
            {product.name}
          </h3>
          <p className="text-lg font-black text-zinc-900">{formatPrice(product.price)}</p>
        </div>
        <div className="flex space-x-1.5">
          {product.colors.map(c => (
            <div key={c} className="w-3 h-3 rounded-full border border-zinc-200" style={{ backgroundColor: c.toLowerCase().replace(' ', '') }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
