import Hero from './components/Hero';
import AboutPromos from './components/AboutPromos';
import Menu from './components/Menu';
import GalleryReviewsContact from './components/GalleryReviewsContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <AboutPromos />
        <Menu />
        <GalleryReviewsContact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl">Roast & Remedy</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
          <a className="hover:text-zinc-900" href="#about">About</a>
          <a className="hover:text-zinc-900" href="#menu">Menu</a>
          <a className="hover:text-zinc-900" href="#promos">Promos</a>
          <a className="hover:text-zinc-900" href="#gallery">Space</a>
          <a className="hover:text-zinc-900" href="#reviews">Reviews</a>
          <a className="hover:text-zinc-900" href="#contact">Contact</a>
        </nav>
        <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm font-semibold transition-colors">
          Order Now
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <p className="font-extrabold tracking-tight text-lg">Roast & Remedy</p>
          <p className="text-zinc-600 mt-2 text-sm">Brewed with passion, served with a smile.</p>
        </div>
        <div className="text-sm text-zinc-700">
          <p>Mon–Sun: 7:00 AM – 7:00 PM</p>
          <p className="mt-1">123 Brew St, Your City</p>
        </div>
        <div className="text-sm text-zinc-700 md:text-right">
          <a className="hover:text-zinc-900" href="#menu">Menu</a>
          <span className="mx-3 text-zinc-400">·</span>
          <a className="hover:text-zinc-900" href="#promos">Promos</a>
          <span className="mx-3 text-zinc-400">·</span>
          <a className="hover:text-zinc-900" href="#contact">Contact</a>
        </div>
      </div>
      <div className="border-t border-zinc-200 text-center py-4 text-xs text-zinc-500">
        © {new Date().getFullYear()} Roast & Remedy. All rights reserved.
      </div>
    </footer>
  );
}

export default App;
