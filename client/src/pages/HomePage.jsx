import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/hero.jpg";
import spaInterior from "../assets/spa-interior.jpg";

import swedishMassage from "../assets/swedish-massage.jpg";
import deepTissue from "../assets/deep-tissue.png";
import facial from "../assets/luxury-facial.png";

function Home() {
  return (
    <div className="bg-[#FAF9F6] text-[#2D2D2D] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center border-b border-[#E5E5E5] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-center px-6 bg-white/40 backdrop-blur-sm p-10 rounded">
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 tracking-tighter">
            Veloura
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-10 text-[#555]">
             Experience tranquility, renewal, and timeless relaxation.
          </p>
          <Link to="/bookings">
  <button className="border border-[#2D2D2D] px-10 py-4 hover:bg-[#2D2D2D] hover:text-white transition-all duration-500 uppercase tracking-widest text-sm">
    Book Appointment
  </button>
</Link>
        </div>
      </section>

      {/* INTRO */}
      {/* PHILOSOPHY - Dynamic Split Layout */}
<section className="py-32 px-6 md:px-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
    
    {/* Left Side: The "Pop" - Large Statement */}
    <div className="md:col-span-5">
      <h2 className="text-sm uppercase tracking-[0.3em] mb-8 text-[#D4AF37] font-bold">
        Our Philosophy
      </h2>
      <p className="text-5xl md:text-6xl font-serif leading-tight tracking-tight">
        Wellness is a <span className="italic text-[#A0A0A0]">curated</span> journey.
      </p>
    </div>

    {/* Right Side: Engaging Details */}
    <div className="md:col-span-7 space-y-8">
      <p className="text-xl md:text-2xl font-light text-[#555] leading-relaxed">
        We merge <strong>ancient sensory healing</strong> with <strong>modern, minimalist design</strong> to restore equilibrium to your body and mind. 
      </p>
      
      <div className="flex items-center gap-6 pt-6">
        <div className="h-[1px] w-20 bg-[#D4AF37]"></div>
        <p className="text-sm uppercase tracking-widest text-[#999]">Redefining Sanctuary</p>
      </div>
    </div>
  </div>
</section>
      {/* SERVICES */}
      <section className="py-24 px-6 md:px-24">
        <h2 className="text-sm uppercase tracking-[0.3em] mb-16 text-center text-[#A0A0A0]">
          Signature Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Swedish Massage", desc: "A fluid, rhythmic massage designed to relax the entire body, improve blood circulation, and gently release muscular tension through long gliding strokes.", price: "KSh 4,500", image: swedishMassage },
            { title: "Deep Tissue Massage", desc: "A therapeutic treatment targeting deeper layers of muscle and connective tissue to relieve chronic tension, improve mobility, and restore muscular balance.", price: "KSh 6,000", image: deepTissue },
            { title: "Luxury Facial", desc: "A rejuvenating facial treatment using botanical extracts and nourishing masks to cleanse, hydrate, and restore the skin’s natural glow.", price: "KSh 3,800", image: facial }
          ].map((item, i) => (
            <div key={i} className="group border-t border-[#E5E5E5] pt-8 hover:border-[#2D2D2D] transition-colors duration-500">
              <img src={item.image} alt={item.title} className="w-full h-76 object-cover mb-6" />
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-[#666] mb-6">{item.desc}</p>
              <span className="font-serif italic">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

     
      {/* BENEFITS - Grid Visualization */}
      <section className="bg-[#F4F1EA] py-24 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              A Space Designed for Silence
            </h2>
            <p className="text-[#555] leading-relaxed mb-6">
              At Veloura, wellness is approached as both an art and a science. Research in therapeutic massage, aromatherapy, and sensory architecture shows that environments designed with intentional calmness significantly reduce cortisol levels, improve circulation, and enhance emotional wellbeing.
            </p>
          </div>
          <div>
            <img src={spaInterior} alt="Veloura spa interior" className="w-full h-[420px] object-cover mb-10" />
            <div className="grid grid-cols-2 gap-8">
              {["Expert Therapists", "Luxury Environment", "Premium Products", "Holistic Wellness"].map((feature) => (
                <div key={feature} className="border-l border-[#D4AF37] pl-6">
                  <h4 className="font-semibold mb-2">{feature}</h4>
                  <p className="text-sm text-[#555]">Curated for your specific needs.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
       {/* CALL TO ACTION SECTION */}
      <section className="py-20 bg-[#D4AF37] text-[#FAF9F6] text-center px-6">
        <h3 className="text-3xl font-serif mb-6">Ready to find your balance?</h3>
        <p className="mb-8 font-light text-lg">Our private suites are waiting to provide you with the ultimate rejuvenation.</p>
        <button className="border border-[#FAF9F6] px-10 py-4 hover:bg-[#FAF9F6] hover:text-[#2D2D2D] transition-all duration-500 uppercase tracking-widest text-sm">
          Reserve Your Suite
        </button>
      </section>


    
    </div>
  );
}

export default Home;