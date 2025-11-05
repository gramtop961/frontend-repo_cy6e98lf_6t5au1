import { BadgePercent, Leaf, Milk, Coffee } from 'lucide-react';

export default function AboutPromos() {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">About our coffee shop</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              We are a neighborhood cafe focused on ethically sourced beans, slow-crafted brews, and warm hospitality. From
              pour-overs to velvety flat whites, every cup is dialed in by passionate baristas.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <Feature icon={<Leaf className="w-4 h-4" />} title="Ethically sourced" />
              <Feature icon={<Coffee className="w-4 h-4" />} title="Small batch roast" />
              <Feature icon={<Milk className="w-4 h-4" />} title="Alt milk options" />
              <Feature icon={<BadgePercent className="w-4 h-4" />} title="Loyalty rewards" />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2069&auto=format&fit=crop"
              alt="Barista pouring latte art"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div id="promos" className="mt-16">
          <div className="rounded-2xl bg-gradient-to-r from-amber-100 to-amber-50 p-6 md:p-8 ring-1 ring-amber-200/60">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-amber-800 font-semibold tracking-wide uppercase text-xs">This week only</p>
                <h3 className="text-xl md:text-2xl font-bold text-amber-900 mt-1">Buy 1 Get 1 on house cold brew</h3>
                <p className="text-amber-900/80 mt-2">Available Monday–Thursday, 2–5pm. Dine-in or takeaway.</p>
              </div>
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 font-semibold self-start md:self-auto transition-colors">
                Claim Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2 ring-1 ring-zinc-200">
      <span className="text-amber-700">{icon}</span>
      <span className="text-zinc-700 font-medium">{title}</span>
    </div>
  );
}
