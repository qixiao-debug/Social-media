import { motion } from 'motion/react';
import { Coffee, ArrowRight } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-coffee-50/80 backdrop-blur-md border-b border-coffee-200"
    >
      <div className="flex items-center gap-2">
        <Coffee className="w-6 h-6 text-coffee-700" />
        <span className="font-serif text-xl font-semibold tracking-tight text-coffee-900">Vessel.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium text-coffee-700 hover:text-coffee-900 transition-colors">Features</a>
        <a href="#details" className="text-sm font-medium text-coffee-700 hover:text-coffee-900 transition-colors">Craftsmanship</a>
      </div>

      <button className="px-5 py-2 text-sm font-medium text-white bg-coffee-800 rounded-full hover:bg-coffee-900 transition-colors shadow-sm">
        Get Early Access
      </button>
    </motion.nav>
  );
}
