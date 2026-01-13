
import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem, Currency } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  currency: Currency;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, currency }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    if (currency === 'GBP') return `£${price}`;
    return `€${Math.round(price * 1.18)}`;
  };

  const formatTotal = (total: number) => {
    if (currency === 'GBP') return `£${total.toFixed(2)}`;
    return `€${(total * 1.18).toFixed(2)}`;
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[120] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[130] shadow-2xl transition-transform duration-500 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="p-8 border-b border-zinc-100 flex justify-between items-center bg-white">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-reps-gradient rounded-xl text-white">
              <ShoppingBag size={20} />
            </div>
            <span className="text-xl font-black tracking-tight uppercase font-outfit">Your Bag ({items.length})</span>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-transform p-2 bg-zinc-100 rounded-xl"><X size={20} /></button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar bg-zinc-50/30">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 bg-zinc-100 rounded-[2rem] flex items-center justify-center">
                <ShoppingBag size={48} className="text-zinc-300" />
              </div>
              <div>
                <p className="text-xl font-black font-outfit uppercase">Your bag is empty</p>
                <p className="text-zinc-500 text-sm font-medium max-w-[200px] mx-auto mt-2">Level up your style with our latest drops.</p>
              </div>
              <button 
                onClick={onClose}
                className="bg-zinc-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all"
              >
                Shop Now
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-6 animate-fade-in group">
                <div className="w-24 h-32 bg-zinc-100 rounded-2xl overflow-hidden shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-black text-sm font-outfit uppercase tracking-tight leading-tight">{item.name}</h4>
                      <p className="font-black text-sm">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                       <span className="text-[10px] bg-zinc-100 px-2 py-1 rounded-md font-bold text-zinc-500 uppercase">{item.selectedColor}</span>
                       <span className="text-[10px] bg-zinc-100 px-2 py-1 rounded-md font-bold text-zinc-500 uppercase">{item.selectedSize}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                      <span className="px-4 py-1.5 text-xs font-black uppercase tracking-widest">Qty: {item.quantity}</span>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="p-2.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-8 border-t border-zinc-100 bg-white space-y-6 shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500 uppercase tracking-widest font-black">Subtotal</span>
                <span className="font-black text-xl font-outfit">{formatTotal(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 uppercase tracking-widest font-bold">Shipping</span>
                <span className="font-black text-emerald-500 uppercase">Complimentary</span>
              </div>
            </div>
            
            <button className="w-full bg-reps-gradient text-white py-5 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-all active:scale-95 shadow-2xl">
              Proceed to Checkout
            </button>
            <p className="text-[9px] text-zinc-400 text-center uppercase tracking-widest font-bold">
              Secure 256-bit encrypted checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
