import {
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  Car,
  ShieldCheck,
  Star,
  Droplets,
  Eye,
  Layers,
  Wind,
  Atom,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Sparkles size={28} />,
      title: "Car Polish",
      desc: "Restore your car's shine with professional-grade machine polishing.",
    },
    {
      icon: <Layers size={28} />,
      title: "PPF",
      desc: "Paint Protection Film shields your paint from scratches, chips, and UV damage.",
    },
    {
      icon: <Wind size={28} />,
      title: "Cooling Film",
      desc: "Window cooling film to reduce heat, glare, and UV rays inside your cabin.",
    },
    {
      icon: <Eye size={28} />,
      title: "Headlight Restoration",
      desc: "Remove yellowing and oxidation to restore clarity and night visibility.",
    },
    {
      icon: <Droplets size={28} />,
      title: "Glass Polish",
      desc: "Remove water spots, scratches, and haze from all glass surfaces.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Ceramic Coating",
      desc: "Long-lasting nano-ceramic protection for a hydrophobic, high-gloss finish.",
    },
    {
      icon: <Star size={28} />,
      title: "Graphene Coating",
      desc: "Next-gen graphene coating for superior hardness, heat resistance, and shine.",
    },
    {
      icon: <Atom size={28} />,
      title: "Borophene Coating",
      desc: "Cutting-edge borophene protection — the strongest coating available today.",
    },
    {
      icon: <Car size={28} />,
      title: "Interior Cleaning",
      desc: "Deep vacuum, steam clean, leather conditioning, and odor elimination.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop",
  ];

  return (
    <main className="bg-black text-white min-h-screen" suppressHydrationWarning>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Car background"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AASCO Car Care
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-8">
            Premium Auto Detailing • Ceramic Coating • Interior Cleaning
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="tel:+919999999999"
              className="border border-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400">
            Professional detailing solutions for every vehicle.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-white transition group"
            >
              <div className="mb-4 text-white group-hover:scale-110 transition-transform duration-200 w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Car className="mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Premium Care</h3>
            <p className="text-gray-400">We treat every vehicle like our own.</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <ShieldCheck className="mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Quality Products</h3>
            <p className="text-gray-400">
              High-quality detailing products and coatings.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Sparkles className="mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Showroom Finish</h3>
            <p className="text-gray-400">
              Restore shine and protect your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-400">Recent detailing and coating works.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {gallery.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl">
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-zinc-950 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p className="flex items-center justify-center gap-3">
              <Phone size={20} /> +91 99999 99999
            </p>
            <p className="flex items-start justify-center gap-3">
              <MapPin size={20} className="mt-1 shrink-0" />
              <span className="text-left">
                Parangimoochikkal, Kottakal,<br />
                Perinthalmanna Road, Malappuram,<br />
                Kerala 656703
              </span>
            </p>
          </div>

          {/* Google Maps embed */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-zinc-800">
            <iframe
              title="AASCO Car Care Location"
              src="https://www.google.com/maps?q=Parangimoochikkal,Kottakal,Perinthalmanna+Road,Malappuram,Kerala+656703&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            <MessageCircle size={20} /> Book Appointment
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 AASCO Car Care. All rights reserved.</p>
        <p className="mt-1">
          Parangimoochikkal, Kottakal, Perinthalmanna Road, Malappuram, Kerala 656703
        </p>
      </footer>

    </main>
  );
}
