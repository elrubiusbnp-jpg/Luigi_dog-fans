
import React, { useState, useRef, useEffect } from 'react';
import { analyzeLyrics } from '../services/geminiService';
import { ChatMessage } from '../types';

const LyricsChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: '¡Hola Bandito! Soy Clancy. ¿Qué canción de Twenty One Pilots te gustaría que analizáramos hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await analyzeLyrics(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', content: response || "Hubo un error en la conexión con Dema." }]);
    setIsLoading(false);
  };

  return (
    <section id="ai" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-rose-600 font-bold uppercase tracking-widest text-sm">Experiencia IA</span>
          <h2 className="text-5xl font-oswald font-bold uppercase mt-2">Intérprete de Letras</h2>
          <p className="mt-4 text-zinc-400">Descifra los secretos de Tyler Joseph y Josh Dun con ayuda de nuestra IA experta en el lore.</p>
        </div>

        <div className="bg-zinc-900/50 border border-rose-600/20 rounded-xl overflow-hidden flex flex-col h-[600px] shadow-2xl shadow-rose-950/20">
          {/* Chat Header */}
          <div className="bg-zinc-900 p-4 border-b border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center font-oswald text-xl font-bold">
              C
            </div>
            <div>
              <div className="font-bold uppercase tracking-widest text-xs">Clancy AI</div>
              <div className="text-[10px] text-green-500 uppercase font-bold animate-pulse">Conectado a Dema</div>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-rose-600 text-white rounded-tr-none' 
                  : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-4 rounded-lg rounded-tl-none border border-white/5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-rose-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-rose-600 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-rose-600 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900 border-t border-white/5">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre 'Jumpsuit', 'Kitchen Sink' o el lore..."
                className="flex-1 bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-rose-600 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-rose-600 hover:bg-rose-700 disabled:bg-zinc-800 text-white p-3 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LyricsChat;
