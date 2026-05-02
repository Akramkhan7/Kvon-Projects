import React from "react";
import {
  Users, MapPin, BadgeCheck, HeartHandshake,
  ShieldCheck, Star, Compass, Globe, Phone, Mail
} from "lucide-react";
import MapImg from '../assets/map.png';

const About = () => {
  return (
    <div className="font-sans antialiased text-slate-600 bg-white">

      {/* HERO */}
      <div className="relative overflow-hidden px-6 md:px-16 pt-8 pb-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto relative">

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            About <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">Us</span>
          </h1>

          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            India's most trusted tour operator — crafting unforgettable holidays
            for over 2,10,000 families across the globe since 1994.
          </p>
        </div>
      </div>

    

      {/* WHO WE ARE */}
      <section className="px-6 md:px-16 py-13 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="relative flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              className="w-full object-cover aspect-square rounded-md shadow-sm"
              alt="Our team"
            />
            <div className="absolute -bottom-4 -right-4 bg-slate-900 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center text-white shadow-lg">
              <span className="text-xl font-bold leading-none text-blue-500">30</span>
              <span className="text-[7px]  tracking-widest uppercase mt-1 leading-tight text-slate-300">
                Years of<br />Excellence
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 ">
            <p className="text-xs font-bold uppercase text-blue-600 mb-2">
              Who we are
            </p>
            <h2 className="text-4xl md:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-3">
              Built on a love of <span className="text-blue-600">travel.</span>
            </h2>
            

            <p className="text-sm text-slate-600 leading-relaxed">
              Flamingo Transworld Pvt Ltd is an award-winning Tour Consultant Company and
              one of India's largest Tour Operators — helping travel enthusiasts across the
              globe discover the world's most amazing destinations since 1994.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              Our 250+ travel consultants help you handcraft the holiday of a lifetime. Every
              itinerary is reviewed by someone who has personally been there — because the
              details you can't Google make all the difference.
            </p>

            {/* Feature list */}
            <div className="mt-10 flex flex-col gap-6">
              {[
                { icon: <Compass size={18} className="text-blue-600" />, title: "In-house destination experts", desc: "Each region has a specialist who travels there regularly." },
                { icon: <ShieldCheck size={18} className="text-blue-600" />, title: "Fully licensed & certified", desc: "IATA certified and fully insured for complete peace of mind." },
                { icon: <HeartHandshake size={18} className="text-blue-600" />, title: "24/7 on-trip support", desc: "A real human answers when you call — no bots, no hold music." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="bg-slate-900 px-6 md:px-16 py-9">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Text */}
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[.15em] uppercase text-blue-500 mb-3">
              What we believe
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              Travel makes you <span className="text-blue-500">richer.</span>
            </h2>

            <p className="text-[12px] text-slate-300 leading-relaxed mt-1">
              We believe that travel brings knowledge, perspective, and opportunity. Flamingo
              is not just a business — it's a philosophy. Every journey we craft is built on
              the belief that the world is better when people explore it.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { icon: <ShieldCheck size={18} className="text-blue-400" />, title: "Trust", desc: "Transparent pricing. No hidden fees." },
                { icon: <HeartHandshake size={18} className="text-blue-400" />, title: "Transparency", desc: "Open communication at every step." },
                { icon: <BadgeCheck size={18} className="text-blue-400" />, title: "Quality tours", desc: "Vetted partners, handpicked experiences." },
                { icon: <Users size={18} className="text-blue-400" />, title: "Support", desc: "Real humans available 24/7." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-slate-800 border border-slate-700 rounded-md p-5 hover:border-blue-500 transition-colors duration-200">
                  <div className="mb-4">
                    {icon}
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4 flex-1 w-full">
            {[
              "https://images.unsplash.com/photo-1598935888738-cd2622bcd437?w=400&q=80",
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
              "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&q=80",
              "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80",
            ].map((src, i) => (
              <img key={i} src={src} className="object-cover h-40 w-full rounded-md shadow-sm" alt="Travel scenery" />
            ))}
          </div>
        </div>
      </section>

  

      {/* TEAM */}
      <section className="bg-white px-6 md:px-16 py-9">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5">
            <p className="text-xs font-bold tracking-[.15em] uppercase text-blue-600 mb-3">
              The people behind the magic
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Meet our <span className="text-blue-600">leadership.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {[
              { name: "Priya Menon", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
              { name: "James Harlow", role: "Head of Experiences", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80" },
              { name: "Amara Osei", role: "Africa & Middle East", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
              { name: "Lin Jia", role: "Asia Pacific Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
            ].map(({ name, role, img }) => (
              <div key={name} className="group text-center mt-3">
                <div className="relative overflow-hidden mb-2 rounded-md shadow-sm">
                  <img
                    src={img}
                    alt={name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <p className="text-lg font-bold text-slate-900">{name}</p>
                <p className="text-[9px] font-semibold tracking-wider uppercase text-blue-600 mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* STATS BAND */}
      <div className="bg-slate-50 px-6 md:px-18 py-5 border-b border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "2.1L+", label: "Happy Families" },
            { num: "250+", label: "Expert Consultants" },
            { num: "30+", label: "Years Experience" },
            { num: "100%", label: "Satisfaction" },
          ].map(({ num, label }) => (
            <div key={label} className="text-left md:text-center md:border-r border-slate-200 last:border-0 md:px-4">
              <p className="text-xl md:text-2xl font-bold text-blue-600 leading-none">
                {num}
              </p>
              <p className="text-xs tracking-wider uppercase text-slate-400 mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA STRIP */}
      <div className=" px-6 md:px-16 py-10 text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-black tracking-tight">
          Ready to start your next chapter?
        </h2>
        <p className="mt-1 text-[10px] font-medium text-blue-600 max-w-md mx-auto leading-relaxed">
          Talk to one of our destination specialists — no obligation, no sales pitch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 text-sm font-semibold rounded-md hover:bg-slate-800 transition-colors duration-200 shadow-md">
            <Phone size={16} /> Call us now
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3.5 text-sm font-semibold rounded-md hover:bg-slate-50 transition-colors duration-200 shadow-md">
            <Mail size={16} /> Send an enquiry
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;