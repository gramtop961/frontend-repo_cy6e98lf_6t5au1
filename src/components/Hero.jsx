import { Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_800px_at_20%_-10%,#fde68a30,transparent)]" />
      <div className="container mx-auto px-6 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-sm font-medium mb-6">
            <Coffee className="w-4 h-4" />
            Freshly roasted daily
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
            Brewed with passion, served with a smile
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed">
            Discover single-origin brews, artisan pastries, and a cozy nook to unwind. Your new favorite coffee spot is just around the corner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 font-semibold transition-colors">
              Explore Menu
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-zinc-300 hover:border-zinc-400 text-zinc-800 px-6 py-3 font-semibold bg-white/70 backdrop-blur transition-colors">
              Find Us
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1974&auto=format&fit=crop',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Coffee collage"
                className="h-40 md:h-56 w-full object-cover rounded-xl shadow-md"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
