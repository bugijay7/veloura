
import React from "react";
import swedishMassage from "../assets/swedish-massage.jpg";
import deepTissue from "../assets/deep-tissue.png";
import hotStone from "../assets/hot-stone.png";
import aromatherapy from "../assets/aromatherapy.png";
import reflexology from "../assets/reflexology.png";
import lymphaticDrainage from "../assets/lymphatic-drainage.png";
import luxuryFacial from "../assets/luxury-facial.png";
import hydratingFacial from "../assets/hydrating-facial.png";
import bodyScrub from "../assets/body-scrub.png";
import bodyWrap from "../assets/body-wrap.png";
import scalpTreatment from "../assets/scalp-treatment.png";
import footSpa from "../assets/foot-spa.png";
import handSpa from "../assets/hand-spa.png";
import couplesMassage from "../assets/couple-massage.png";
import prenatalMassage from "../assets/prenatal-massage.jpg";

function ServicePage() {
  const services = [
    {
      title: "Swedish Massage",
      desc: "Gentle full-body massage to relax muscles, improve circulation, and reduce stress.",
      duration: "60 min",
      price: "KSh 4,500",
      image: swedishMassage
    },
    {
      title: "Deep Tissue Massage",
      desc: "Focused massage targeting deeper layers of muscles to relieve chronic tension.",
      duration: "90 min",
      price: "KSh 6,000",
      image: deepTissue
    },
    {
      title: "Hot Stone Therapy",
      desc: "Heated stones placed on key points of the body to promote deep relaxation and ease muscular stiffness.",
      duration: "75 min",
      price: "KSh 6,500",
      image: hotStone
    },
    {
      title: "Aromatherapy Massage",
      desc: "Massage using essential oils chosen for mood enhancement and relaxation.",
      duration: "60 min",
      price: "KSh 5,000",
      image: aromatherapy
    },
    {
      title: "Reflexology",
      desc: "Targeted pressure on feet and hands to stimulate organs and improve energy flow.",
      duration: "45 min",
      price: "KSh 3,800",
      image: reflexology
    },
    {
      title: "Lymphatic Drainage Massage",
      desc: "Gentle rhythmic massage to stimulate lymph flow and reduce fluid retention.",
      duration: "60 min",
      price: "KSh 5,200",
      image: lymphaticDrainage
    },
    {
      title: "Luxury Facial",
      desc: "Premium facial treatment with botanical extracts to cleanse, hydrate, and rejuvenate skin.",
      duration: "45 min",
      price: "KSh 3,800",
      image: luxuryFacial
    },
    {
      title: "Hydrating Facial",
      desc: "Intensive hydration facial for dry or sensitive skin, restoring moisture and softness.",
      duration: "45 min",
      price: "KSh 3,500",
      image: hydratingFacial
    },
    {
      title: "Body Scrub",
      desc: "Exfoliating treatment using natural scrubs to remove dead skin cells and smoothen skin.",
      duration: "60 min",
      price: "KSh 4,000",
      image: bodyScrub
    },
    {
      title: "Body Wrap",
      desc: "Detoxifying and nourishing body wrap to improve skin texture and promote relaxation.",
      duration: "60 min",
      price: "KSh 4,500",
      image: bodyWrap
    },
    {
      title: "Scalp Treatment",
      desc: "Soothing scalp massage with oils to improve circulation and reduce tension headaches.",
      duration: "30 min",
      price: "KSh 2,500",
      image: scalpTreatment
    },
    {
      title: "Foot Spa",
      desc: "Relaxing foot soak and massage to relieve tension and improve circulation.",
      duration: "30 min",
      price: "KSh 2,800",
      image: footSpa
    },
    {
      title: "Hand Spa",
      desc: "Nourishing hand treatment including exfoliation, massage, and hydration.",
      duration: "30 min",
      price: "KSh 2,500",
      image: handSpa
    },
    {
      title: "Couples Massage",
      desc: "Side-by-side massage for couples in a private room, perfect for relaxation together.",
      duration: "60 min",
      price: "KSh 9,000",
      image: couplesMassage
    },
    {
      title: "Prenatal Massage",
      desc: "Specialized massage for expectant mothers to relieve pregnancy-related discomfort safely.",
      duration: "60 min",
      price: "KSh 5,500",
      image: prenatalMassage
    }
  ];


  return (
    <div className="bg-[#FAF9F6] min-h-screen py-24 px-6 md:px-24">
      {/* HEADER */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Services</h1>
        <div className="h-[1px] w-20 bg-[#D4AF37] mx-auto"></div>
        <p className="mt-8 text-[#555] max-w-2xl mx-auto italic">
          A curated selection of treatments designed to restore balance, enhance vitality, and offer deep, lasting tranquility.
        </p>
      </header>

      {/* SERVICE GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white border border-[#E5E5E5] hover:border-[#D4AF37] transition-all duration-500 overflow-hidden"
          >
            {/* Image container with subtle zoom */}
            <div className="overflow-hidden h-124">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700  hover:grayscale-0" 
              />
            </div>
            
            {/* Details */}
            <div className="p-8">
              <h3 className="text-xl text-[#0a0a0a] font-medium mb-3">{service.title}</h3>
              <p className="text-[#666] text-sm mb-6 leading-relaxed">{service.desc}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-[#F0F0F0]">
                <span className="text-xs uppercase tracking-widest text-[#A0A0A0]">{service.duration}</span>
                <span className="font-serif italic text-[#2D2D2D]">{service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;