import { MapPin, Phone, Clock, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ava M.',
    text:
      'Hands-down the best cappuccino in town. Cozy vibe and friendly staff — my go-to morning stop!',
  },
  {
    name: 'Daniel K.',
    text:
      'Love the single-origin pour-overs. You can tell they care about quality and sourcing.',
  },
  {
    name: 'Priya S.',
    text:
      'The pastries are amazing and the loyalty program keeps me coming back. Highly recommend!',
  },
];

export default function GalleryReviewsContact() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <Gallery />
        <Reviews />
        <Contact />
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <div id="gallery" className="">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Our space</h2>
          <p className="mt-2 text-zinc-600">Designed for conversations, focus, and slow moments.</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          'https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Coffee shop"
            className="h-40 md:h-56 w-full object-cover rounded-xl shadow-md"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div id="reviews" className="mt-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">What people say</h2>
          <p className="mt-2 text-zinc-600">Real reviews from our community.</p>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-zinc-700">“{r.text}”</p>
            <p className="mt-4 text-sm font-semibold text-zinc-900">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="mt-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Find us</h2>
          <p className="mt-2 text-zinc-600">Drop by for a cup or say hello.</p>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.093868851789!2d-122.42067952352226!3d37.77928097197865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0b1a9f2f%3A0x1a8a5c8b6f9b7eec!2sCoffee!5e0!3m2!1sen!2sus!4v1683671234567!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-amber-700 mt-0.5" />
            <div>
              <p className="font-semibold text-zinc-900">123 Brew St.</p>
              <p className="text-zinc-600 text-sm">Your City, YC 10000</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-amber-700 mt-0.5" />
            <div>
              <p className="font-semibold text-zinc-900">(555) 123-4567</p>
              <p className="text-zinc-600 text-sm">Call to order ahead</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-700 mt-0.5" />
            <div>
              <p className="font-semibold text-zinc-900">Open daily</p>
              <p className="text-zinc-600 text-sm">7:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
