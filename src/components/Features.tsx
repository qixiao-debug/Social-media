import { motion } from 'motion/react';
import { Thermometer, Feather, ShieldCheck, Droplets } from 'lucide-react';

const features = [
  {
    icon: Thermometer,
    title: "Heat Retention",
    description: "Double-walled vacuum insulation keeps your brew hot for 6 hours."
  },
  {
    icon: Feather,
    title: "Ceramic Core",
    description: "Taste the coffee, not the metal. Pure ceramic interior coating."
  },
  {
    icon: ShieldCheck,
    title: "Spill Resistant",
    description: "360° leak-proof lid designed for the morning commute."
  },
  {
    icon: Droplets,
    title: "Aroma Focused",
    description: "Wide mouth design amplifies the nose of your favorite beans."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-coffee-950 mb-4">Designed for the senses.</h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">Every detail has been obsessively crafted to elevate your daily ritual.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-coffee-50 rounded-2xl border border-coffee-100 hover:border-coffee-200 transition-colors"
            >
              <div className="w-12 h-12 bg-coffee-200/50 rounded-xl flex items-center justify-center mb-6 text-coffee-800">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-coffee-900 mb-3">{feature.title}</h3>
              <p className="text-coffee-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
