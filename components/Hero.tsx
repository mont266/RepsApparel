
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 flex items-center lg:h-[95vh] py-16 lg:py-0">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-purple-400/20 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-[5%] w-[30rem] h-[30rem] bg-pink-400/20 blur-[120px] rounded-full animate-float" />
      
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 animate-fade-in">
            <Sparkles size={14} className="fill-purple-700" />
            <span>Summer Drop 24 is Live</span>
          </div>
          
          <h1 className="text-zinc-900 text-6xl md:text-8xl font-black font-outfit mb-8 leading-[0.9] tracking-tighter uppercase">
            MAX YOUR <br /> 
            <span className="text-reps-gradient italic">POTENTIAL</span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-lg mb-12 font-medium leading-relaxed mx-auto lg:mx-0">
            Engineered for performance. Streetwear for the high-intensity lifestyle. Don't just show up, represent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#/category/New Arrivals" 
              className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-zinc-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-purple-600 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span>Explore Drops</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="flex items-center space-x-3 text-zinc-900 font-black uppercase tracking-widest hover:text-purple-600 transition-colors">
              <div className="w-12 h-12 rounded-full border-2 border-zinc-200 flex items-center justify-center group-hover:border-purple-600">
                <Play size={16} className="fill-current ml-1" />
              </div>
              <span className="text-sm">Our Vision</span>
            </button>
          </div>
        </div>

        {/* Interactive Visual Element */}
        <div className="relative mt-16 lg:mt-0">
          <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl lg:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] lg:rotate-3 lg:hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000" 
              alt="Model Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 lg:-top-10 lg:-right-10 z-0 aspect-[4/5] w-full rounded-[3rem] border-4 border-purple-500/20 -rotate-3 lg:-rotate-6" />
          
          {/* Floating Tag */}
          <div className="absolute bottom-4 -left-4 lg:top-1/2 lg:-right-12 z-20 glass p-6 rounded-3xl shadow-xl animate-float">
            <p className="text-xs font-black uppercase tracking-tighter text-zinc-400 mb-1">Trending Now</p>
            <p className="text-2xl font-black text-reps-gradient">#RepsNation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
