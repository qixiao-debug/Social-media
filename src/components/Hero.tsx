import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coffee-200/30 rounded-full blur-3xl -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-coffee-700 uppercase bg-coffee-100 rounded-full border border-coffee-200">
          Coming Soon
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] tracking-tight text-coffee-950 mb-8">
          The cup your coffee <br/>
          <span className="italic text-coffee-600">deserves.</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-coffee-700/80 leading-relaxed mb-10">
          Engineered for the perfect sip. Ceramic coating, vacuum insulation, and a lip feel that changes everything.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto w-full">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-5 py-3.5 bg-white border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-400 placeholder:text-coffee-300 text-coffee-800"
          />
          <button className="w-full sm:w-auto px-6 py-3.5 bg-coffee-900 text-white font-medium rounded-xl hover:bg-coffee-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
            Notify Me <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <p className="mt-4 text-xs text-coffee-500">Join 2,000+ others waiting for launch.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 md:mt-24 relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl"
      >
        <img 
          src="https://picsum.photos/seed/coffeehero/1920/1080?blur=2" 
          alt="The Vessel Coffee Cup" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/40 to-transparent" />
      </motion.div>
    </section>
  );
}
