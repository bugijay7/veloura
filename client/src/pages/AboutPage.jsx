import React from "react";
import spaInterior from "../assets/spa-interior.jpg";
import therapists from "../assets/therapists.png";
import wellnessRitual from "../assets/wellness-ritual.png";
import aromatherapy from "../assets/aromatherapy.png";
import relaxationLounge from "../assets/relaxation-lounge.png";

function AboutPage() {

  const testimonials = [
  {
    name: "Sarah Wanjiku",
    comment:
      "An incredible experience. The atmosphere alone melts away stress, and the therapists are truly skilled."
  },
  {
    name: "Daniel Mwangi",
    comment:
      "Veloura Spa feels like stepping into another world. Calm, professional, and deeply relaxing."
  },
  {
    name: "Grace Achieng",
    comment:
      "The aromatherapy massage was exceptional. Every detail from lighting to scent was perfect."
  },
  {
    name: "James Otieno",
    comment:
      "A refined and peaceful space. I left feeling completely renewed and balanced."
  }
];
  return (
    <div className="bg-[#FAF9F6] text-[#2D2D2D] font-sans pt-32 pb-24">
      
      {/* 1. HERO / INTRO */}
      <section className="px-6 md:px-24 mb-32">
        <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">The Art of Stillness</h1>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#555]">
            Veloura Spa is a sanctuary for the mind, body, and soul. We combine luxury, science-backed wellness practices, and serene spaces to offer a complete relaxation experience. 
          </p>
          <img src={spaInterior} alt="Veloura Spa interior" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </section>

      {/* 2. PHILOSOPHY - Architectural Visualisation */}
      <section className="py-24 px-6 md:px-24 border-t border-[#E5E5E5] bg-[#F4F1EA]">
        <h2 className="text-sm uppercase tracking-[0.3em] mb-12 text-[#A0A0A0]">Our Philosophy</h2>
        <div className="max-w-4xl">
          <p className="text-3xl md:text-4xl font-serif mb-8">"Wellness is a holistic journey."</p>
          <p className="text-lg text-[#666] leading-relaxed mb-6">
            Our approach merges modern therapeutic techniques with traditional healing methods from around the world. Research shows that environments designed with calm architecture and soft natural light significantly reduce stress.
          </p>
        </div>
      </section>

      {/* 3. THERAPISTS - Grid Layout */}
      <section className="py-24 px-6 md:px-24 grid md:grid-cols-2 gap-16 items-center border-b border-[#E5E5E5]">
        <img src={therapists} alt="Veloura Spa therapists" className="w-full h-[600px] object-cover" />
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] mb-6 text-[#D4AF37]">Expertise</h2>
          <h3 className="text-4xl font-serif mb-8">Meet Our Expert Therapists</h3>
          <p className="text-[#555] leading-relaxed mb-8">
            Our team is trained in multiple modalities including Swedish massage, deep tissue, aromatherapy, and lymphatic drainage. Each therapist customizes your session, ensuring maximum benefit from every visit.
          </p>
          <div className="flex gap-4">
            <span className="text-xs uppercase tracking-widest border border-[#2D2D2D] px-4 py-2">Professional</span>
            <span className="text-xs uppercase tracking-widest border border-[#2D2D2D] px-4 py-2">Customized</span>
          </div>
        </div>
      </section>

      {/* 4. WELLNESS RITUALS - Gallery Layout */}
      <section className="py-24 px-6 md:px-24">
        <h2 className="text-sm uppercase tracking-[0.3em] mb-16 text-center text-[#A0A0A0]">Signature Wellness Rituals</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img src={wellnessRitual} alt="Wellness ritual" className="w-full h-[500px] object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-serif italic mb-6">"Detoxify, relieve, rejuvenate."</p>
            <p className="text-[#666]">Our rituals are meticulously curated to harmonize the body and mind, utilizing the finest botanical extracts.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <img src={aromatherapy} alt="Aromatherapy" className="w-full h-[400px] object-cover" />
          <div className="bg-[#2D2D2D] p-12 text-[#FAF9F6] flex flex-col justify-center">
            <h4 className="text-2xl font-serif mb-6">Aromatherapy Mastery</h4>
            <p className="leading-relaxed opacity-80">We select oils based on their mood-enhancing properties, transforming a simple massage into a full sensory journey.</p>
          </div>
        </div>
      </section>

      {/* 5. RELAXATION LOUNGE */}
      <section className="py-24 px-6 md:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-10">Spaces for Complete Relaxation</h2>
          <p className="text-[#555] leading-relaxed mb-12">
            Our relaxation lounge is designed to encourage mindfulness and quiet reflection. Every detail—from ambient soundscapes to the arrangement of greenery—is curated for your restoration.
          </p>
          <img src={relaxationLounge} alt="Veloura relaxation lounge" className="w-full h-[500px] object-cover" />
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
<section className="py-24 px-6 md:px-24 border-t border-[#E5E5E5]">
  <h2 className="text-sm uppercase tracking-[0.3em] mb-16 text-center text-[#A0A0A0]">
    Client Reflections
  </h2>

  <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
    {testimonials.map((t, index) => (
      <div key={index} className="space-y-6">
        
        {/* Stars */}
        <div className="text-[#D4AF37] text-lg tracking-wide">
          ★★★★★
        </div>

        {/* Comment */}
        <p className="text-lg font-light leading-relaxed text-[#555] italic">
          "{t.comment}"
        </p>

        {/* Name */}
        <p className="text-sm uppercase tracking-[0.25em] text-[#2D2D2D]">
          {t.name}
        </p>

      </div>
    ))}
  </div>
</section>

    </div>
  );
}

export default AboutPage;