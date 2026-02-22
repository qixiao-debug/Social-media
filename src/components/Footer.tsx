import { Coffee } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-coffee-950 text-coffee-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Coffee className="w-6 h-6 text-coffee-300" />
            <span className="font-serif text-xl font-semibold tracking-tight text-white">Vessel.</span>
          </div>
          <p className="max-w-sm text-coffee-300/80 mb-8">
            Redefining the coffee experience, one cup at a time. Join us on our journey to perfect the morning ritual.
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white mb-6">Company</h4>
          <ul className="space-y-4 text-coffee-300/80">
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white mb-6">Support</h4>
          <ul className="space-y-4 text-coffee-300/80">
            <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
            <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-coffee-400/60">
        <p>© 2026 Vessel Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-coffee-300 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-coffee-300 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
