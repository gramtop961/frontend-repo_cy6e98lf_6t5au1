import { Star } from 'lucide-react';

const items = [
  {
    name: 'Espresso',
    desc: 'Rich, syrupy, and balanced shot',
    price: '$3.50',
    rating: 5,
  },
  {
    name: 'Cappuccino',
    desc: 'Double shot with silky milk foam',
    price: '$4.50',
    rating: 5,
  },
  {
    name: 'Flat White',
    desc: 'Velvety microfoam over espresso',
    price: '$4.75',
    rating: 4,
  },
  {
    name: 'Iced Latte',
    desc: 'Creamy and refreshing over ice',
    price: '$5.00',
    rating: 4,
  },
  {
    name: 'Pour-over',
    desc: 'Single-origin, slow-brewed clarity',
    price: '$5.25',
    rating: 5,
  },
  {
    name: 'Mocha',
    desc: 'Chocolate meets espresso bliss',
    price: '$5.50',
    rating: 4,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-zinc-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Menu</h2>
            <p className="mt-2 text-zinc-600">Signature drinks crafted by hand.</p>
          </div>
          <a href="#promos" className="hidden md:inline-flex text-amber-700 hover:text-amber-800 font-semibold">See Promos →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="group rounded-2xl bg-white p-5 ring-1 ring-zinc-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-zinc-900">{item.name}</h3>
                <span className="text-amber-700 font-bold">{item.price}</span>
              </div>
              <p className="mt-1 text-zinc-600 text-sm">{item.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < item.rating ? 'fill-amber-400 text-amber-400' : 'text-amber-300'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
