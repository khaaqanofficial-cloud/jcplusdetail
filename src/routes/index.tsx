import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Facebook, Sparkles, Clock, MapPinned, Star, Quote, ArrowRight, Check } from "lucide-react";
import heroFerrari from "@/assets/hero-ferrari.png";
import corvette from "@/assets/corvette-after.png";
import interiorBlack from "@/assets/interior-black-clean.png";
import interiorSeats from "@/assets/interior-seats-clean.png";
import midWash from "@/assets/mid-wash.png";
import porsche911 from "@/assets/porsche-911-after.png";
import porscheFront from "@/assets/porsche-front.png";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceFull from "@/assets/service-full.jpg";

const PHONE = "+1 (956) 420-4177";
const PHONE_HREF = "tel:+19564204177";
const FB = "https://www.facebook.com/jrkings123/";
const ADDRESS = "32082 TX-100, Los Fresnos, TX 78566";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JC Plus Auto Mobile Detail — Mobile Car Detailing in Los Fresnos, TX" },
      { name: "description", content: "Premium mobile auto detailing in Los Fresnos, TX. We come to you. Interior, exterior & full detail packages. Call +1 (956) 420-4177." },
      { property: "og:title", content: "JC Plus Auto Mobile Detail — Los Fresnos, TX" },
      { property: "og:description", content: "We come to you. You drive clean. Professional mobile detailing in Los Fresnos, TX." },
      { property: "og:image", content: heroFerrari },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroFerrari },
    ],
  }),
  component: Home,
});

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl font-bold tracking-wide">
            JC<span className="text-brand-red">+</span> AUTO DETAIL
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-wide">
          <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
          <a href="#gallery" className="hover:text-brand-red transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-brand-red transition-colors">Reviews</a>
          <a href="#about" className="hover:text-brand-red transition-colors">About</a>
        </nav>
        <a href={PHONE_HREF} className="btn-red inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <img
        src={heroFerrari}
        alt="White Ferrari being detailed by JC Plus Auto Mobile Detail"
        className="absolute inset-0 w-full h-full object-cover"
        width={1320}
        height={720}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/40 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Mobile Detailing · Los Fresnos, TX
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] uppercase">
            We come to you.<br />
            <span className="red-underline">You drive clean.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl font-medium">
            Professional Mobile Detailing — Interior & Exterior — Los Fresnos, TX
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="btn-red inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md text-base font-bold uppercase tracking-wide shadow-red">
              <Phone className="w-5 h-5" /> Call Now → {PHONE}
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md text-base font-bold uppercase tracking-wide border-2 border-white/80 text-white hover:bg-white hover:text-black transition-all">
              See Our Work <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
    </div>
  );
}

function WhyChooseUs() {
  const items = [
    { icon: MapPinned, title: "We Come To You", text: "No need to drive anywhere — we detail at your home or office." },
    { icon: Clock, title: "Fast & Reliable", text: "Available on short notice. On time, every time." },
    { icon: Sparkles, title: "Spotless Results", text: "Interior and exterior done right, every single job." },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">Why Choose Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase">Built On <span className="text-brand-red">Trust</span> & Shine</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group bg-card p-8 rounded-xl border border-border hover:border-brand-red transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-brand-red/15 border border-brand-red/40 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <Icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Interior Detail",
      img: serviceInterior,
      desc: "Deep clean, shampoo carpets, leather conditioning, odor removal. Leave it smelling and feeling brand new.",
      features: ["Shampoo carpets", "Leather conditioning", "Odor removal"],
    },
    {
      title: "Exterior Detail",
      img: serviceExterior,
      desc: "Hand wash, clay bar, tire shine, window clean. Mirror finish guaranteed.",
      features: ["Hand wash + clay bar", "Tire shine", "Streak-free windows"],
    },
    {
      title: "Full Detail Package",
      img: serviceFull,
      desc: "The works. Interior + Exterior combined for a complete transformation inside and out.",
      features: ["Interior + Exterior", "Complete transformation", "Best value"],
    },
  ];
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">Services</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase">Pick Your <span className="text-brand-red">Package</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-xl overflow-hidden border-t-4 border-brand-red border-x border-b border-border hover:shadow-red-glow transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold uppercase mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-7">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-brand-red shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a href={PHONE_HREF} className="btn-red mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-bold uppercase tracking-wide">
                  Book This <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: porsche911, alt: "Porsche 911 detailed", span: "md:col-span-2 md:row-span-2" },
    { src: corvette, alt: "Yellow Corvette detailed", span: "" },
    { src: interiorBlack, alt: "Black leather interior cleaned", span: "" },
    { src: midWash, alt: "Car mid-wash with foam", span: "md:col-span-2" },
    { src: porscheFront, alt: "Grey Porsche front detail", span: "" },
    { src: interiorSeats, alt: "Cleaned interior seats", span: "" },
    { src: heroFerrari, alt: "White Ferrari being detailed", span: "md:col-span-2" },
  ];
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase">Our Work Speaks For Itself</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-brand-red rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-lg hover-zoom bg-card ${img.span}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Jessica Menchaca", text: "Did amazing job, and on such short notice. He met me within an hour, and detailed the inside so well it feels brand new. And to top it off, the price was very reasonable! Would definitely recommend." },
    { name: "Deon'dre Gonzalez", text: "JCPlus Auto Mobile Detail did a great job with the interior cleans on my Ford F-150. The truck smell clean due to the shampoo used on the carpets and the interior was left like new! Was quoted a reasonable price for a job well done!" },
    { name: "Frank", text: "First time using this auto detail company and the two gentlemen that came and did the work on my wife's Jeep were both respectful and professional. They did an awesome job and didn't rush thru the job even with the crazy heat we had going on that day. My wife was extremely satisfied with the work they did and it was well worth the money we spent on getting it done." },
  ];
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">Reviews</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase">What Our <span className="text-brand-red">Customers</span> Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="relative bg-card p-7 rounded-xl border border-border hover:border-brand-red/50 transition-colors">
              <Quote className="absolute -top-4 left-6 w-10 h-10 text-brand-red fill-brand-red" />
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">"{r.text}"</p>
              <p className="font-display font-bold uppercase tracking-wide text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { num: "100+", label: "Cars Detailed" },
    { num: "5★", label: "Reviews" },
    { num: "Same Day", label: "Available" },
  ];
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-red rounded-full" />
          <div className="space-y-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl sm:text-6xl font-bold text-white leading-none">{s.num}</div>
                <div className="text-brand-red text-sm font-bold uppercase tracking-[0.25em] mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">About Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase mb-6">The Detail Shop That Comes <span className="text-brand-red">To You</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            JC Plus Auto Mobile Detail brings the detail shop straight to your driveway. Serving Los Fresnos and surrounding areas in Texas, we deliver spotless results at honest prices. No need to wait at a shop — we come to you.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24 bg-gradient-red overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-5xl sm:text-7xl font-bold uppercase text-white leading-[0.95]">
          Ready For A <span className="block">Spotless Ride?</span>
        </h2>
        <p className="mt-6 text-xl text-white/90 font-medium">Call or message us — we'll come to you.</p>
        <a href={PHONE_HREF} className="mt-10 inline-flex items-center gap-3 bg-white text-black px-8 sm:px-10 py-5 rounded-md text-xl sm:text-2xl font-display font-bold tracking-wide hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-2xl">
          <Phone className="w-6 h-6" /> {PHONE}
        </a>
        <div className="mt-6">
          <a href={FB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold underline-offset-4 hover:underline">
            <Facebook className="w-5 h-5" /> Message us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-border py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-2xl font-bold tracking-wide">
            JC<span className="text-brand-red">+</span> AUTO MOBILE DETAIL
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Premium mobile auto detailing.</p>
        </div>
        <div className="space-y-3 text-sm">
          <a href={PHONE_HREF} className="flex items-center gap-3 text-foreground hover:text-brand-red transition-colors">
            <Phone className="w-4 h-4 text-brand-red" /> {PHONE}
          </a>
          <div className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4 text-brand-red mt-0.5 shrink-0" /> {ADDRESS}
          </div>
          <a href={FB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-brand-red transition-colors">
            <Facebook className="w-4 h-4 text-brand-red" /> Facebook
          </a>
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          <p>Serving Los Fresnos, TX and surrounding areas.</p>
          <p className="mt-3">© {new Date().getFullYear()} JC Plus Auto Mobile Detail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <Services />
      <Divider />
      <Gallery />
      <Divider />
      <Reviews />
      <Divider />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
