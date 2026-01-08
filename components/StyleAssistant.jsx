
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send } from 'lucide-react';

const StyleAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      role: 'assistant', 
      content: "Hey! I'm your REPS virtual style coach. Need sizing advice or help creating a look for the gym or the street?",
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      const autoReply = {
        id: Date.now() + 1,
        role: 'assistant',
        content: "Got it. One of our human style experts will take it from here and get back to you ASAP. Keep up the energy! ⚡️",
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1200);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[100] bg-zinc-900 text-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-110 active:scale-95 transition-all flex items-center group"
      >
        <Sparkles size={28} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-black text-sm uppercase tracking-widest">
          Style Coach
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[110] w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] glass rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-slide-up border-none">
          {/* Header */}
          <div className="p-6 bg-zinc-900 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Sparkles size={24} className="fill-white" />
              </div>
              <div>
                <p className="font-black text-lg tracking-tight font-outfit">STYLE COACH</p>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-xl hover:bg-white/20 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-white/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-zinc-900 text-white rounded-tr-none' 
                      : 'bg-white text-zinc-800 rounded-tl-none border border-zinc-100'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white/80 backdrop-blur-md">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask us anything..."
                className="w-full bg-zinc-100 border-none rounded-2xl py-4 pl-6 pr-14 text-sm font-bold focus:ring-2 focus:ring-purple-200 transition-all placeholder:text-zinc-400"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 bg-reps-gradient text-white p-3 rounded-xl hover:scale-110 disabled:opacity-20 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StyleAssistant;
