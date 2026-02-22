/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DetailedFeature } from './components/DetailedFeature';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-coffee-50 selection:bg-coffee-200 selection:text-coffee-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <div id="details">
          <DetailedFeature 
            title="Ceramic, not steel."
            subtitle="Pure Taste"
            description="Most travel mugs are stainless steel, which imparts a metallic taste to your coffee. We use a proprietary ceramic coating that is completely neutral, ensuring you taste only the beans."
            image="https://picsum.photos/seed/ceramic/800/800"
            points={[
              "Taste-neutral ceramic interior",
              "Stain and odor resistant",
              "Easy to clean surface",
              "Durable double-fired coating"
            ]}
          />
          
          <DetailedFeature 
            title="The perfect lip feel."
            subtitle="Ergonomics"
            description="We analyzed over 50 different cup rims to find the perfect geometry. The tapered edge mimics your favorite ceramic mug at home, delivering the coffee to your palate perfectly."
            image="https://picsum.photos/seed/lipfeel/800/800"
            points={[
              "Tapered thin rim",
              "Flow-control geometry",
              "Comfortable sipping angle",
              "Cool-touch exterior"
            ]}
            reversed={true}
          />
        </div>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-coffee-200/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-950 mb-6">Ready to upgrade your morning?</h2>
            <p className="text-lg text-coffee-700 mb-10">
              Join the waitlist today and get 20% off when we launch. Limited early bird spots available.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-5 py-3.5 bg-white border border-coffee-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder:text-coffee-400"
              />
              <button className="px-8 py-3.5 bg-coffee-900 text-white font-medium rounded-xl hover:bg-coffee-800 transition-colors shadow-lg hover:shadow-xl">
                Join Waitlist
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
