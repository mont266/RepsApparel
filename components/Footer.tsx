import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Brand Info */}
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-reps-gradient font-outfit uppercase">REPS<span className="text-zinc-900 block md:inline">APPAREL</span></h2>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-md">
              The next generation of high-intensity apparel. Sustainable, digital-native, and built for those who never miss a rep.
            </p>
            <div className="flex flex-wrap gap-4">
              {[Instagram, Twitter, Youtube, Facebook, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center hover:bg-reps-gradient hover:text-white hover:border-transparent hover:scale-110 transition-all shadow-sm">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-zinc-100 flex flex-col justify-between">
            <div>
              <h4 className="text-3xl font-black mb-4 font-outfit">JOIN THE REPS SQUAD</h4>
              <p className="text-zinc-500 mb-8 font-medium">Get 15% off your first order and early access to limited edition drops.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your athlete email"
                  className="w-full bg-zinc-50 border-none rounded-2xl p-6 pr-20 text-lg font-bold focus:ring-2 focus:ring-purple-200 transition-all"
                />
                <button className="absolute right-4 top-4 bg-zinc-900 text-white p-3 rounded-xl hover:bg-purple-600 transition-colors">
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-zinc-400 mt-8 font-bold uppercase tracking-[0.2em]">
              By signing up, you agree to represent the brand with pride.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-zinc-200 pt-20">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-zinc-400">Drops</h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest">
              <li><a href="#" className="hover:text-purple-600 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Streetwear</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Gymwear</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">The Vault</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-zinc-400">Service</h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-zinc-400">Team</h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Culture</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-zinc-400">Legal</h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Ethics</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400">
          <p>© 2024 REPSAPPAREL STUDIOS — NO LIMITS.</p>
          <a
            href="https://montforddigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center no-underline text-xs normal-case tracking-normal font-normal text-slate-400 opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="16"
              height="16"
              className="mr-1.5"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="md-grad-footer" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path
                fill="url(#md-grad-footer)"
                d="M0 32 L0 0 L12 0 L16 8 L20 0 L32 0 L32 32 L22 32 L16 20 L10 32 Z"
              />
            </svg>
            <span className="text-slate-400">
              Developed by <strong className="font-bold text-zinc-700">Montford Digital</strong>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;