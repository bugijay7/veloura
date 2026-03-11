import React from "react";
import heroImage from "../assets/spa-interior.jpg";

function ContactPage() {
  // Enhanced input style: sleek, modern, with a gold focus state
  const inputStyle = "w-full bg-[#FAFAFA] border-b-2 border-[#E5E5E5] text-[#1A1A1A] p-4 outline-none focus:border-[#D4AF37] transition-all duration-300 placeholder:text-[#999]";

  return (
    <div className="bg-[#FAF9F6]">
      
      {/* 1. Hero Section: Added a subtle scale animation for flair */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <img src={heroImage} alt="Veloura Spa" className="absolute w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-black/40" /> 
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">Veloura Spa</h1>
          <div className="h-[2px] w-32 bg-[#D4AF37] mx-auto mb-8 shadow-glow"></div>
          <p className="max-w-2xl text-xl md:text-2xl italic font-light text-white tracking-wide">
            Where serenity meets sophistication.
          </p>
        </div>
      </section>

      {/* 2. Main Content: Bento-grid style layout */}
      <div className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-3 gap-16">
        
        {/* Form Section: Added subtle shadow and rounded corners for a premium feel */}
        <div className="lg:col-span-2 bg-white p-12 md:p-20 shadow-xl shadow-black/5 rounded-sm border border-[#F0F0F0]">
          <h2 className="text-3xl font-serif mb-2 text-[#1A1A1A]">Get in Touch</h2>
          <p className="text-[#666] mb-12">We typically respond within 24 hours.</p>
          
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" placeholder="Full Name" className={inputStyle} required />
              <input type="email" placeholder="Email Address" className={inputStyle} required />
            </div>
            <input type="tel" placeholder="Phone Number" className={inputStyle} />
            <input type="text" placeholder="Subject" className={inputStyle} required />
            <textarea rows="4" placeholder="How can we assist you?" className={inputStyle}></textarea>
            
            <button type="submit" className="group relative bg-[#1A1A1A] text-white px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold overflow-hidden transition-all hover:bg-[#D4AF37]">
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>

        {/* Sidebar: Styled as an elegant information block */}
        <div className="space-y-16">
          <section className="border-l-2 border-[#D4AF37] pl-8">
            <h3 className="text-[#1A1A1A] tracking-[0.2em] uppercase text-xs font-bold mb-6">Concierge</h3>
            <p className="text-[#333] leading-relaxed italic mb-4">123 Serenity Lane<br />Nairobi, Kenya</p>
            <p className="font-semibold text-[#1A1A1A] text-lg hover:text-[#D4AF37] transition-colors cursor-pointer">+254 712 345 678</p>
            <p className="text-[#1A1A1A] font-semibold underline decoration-[#D4AF37] underline-offset-4 mt-2">info@velouraspa.com</p>
          </section>

          <section className="border-l-2 border-[#E5E5E5] pl-8">
            <h3 className="text-[#1A1A1A] tracking-[0.2em] uppercase text-xs font-bold mb-6">Hours</h3>
            <div className="space-y-3 text-[#666]">
              <p>Mon – Fri: <span className="text-[#1A1A1A] font-semibold">9am – 8pm</span></p>
              <p>Sat: <span className="text-[#1A1A1A] font-semibold">10am – 6pm</span></p>
              <p>Sun: <span className="text-[#D4AF37] font-semibold">Closed</span></p>
            </div>
          </section>
        </div>
      </div>

      {/* 3. CTA Banner: Added a parallax-style feel */}
      <section className="bg-[#1A1A1A] text-white py-24 px-6 text-center border-t-4 border-[#D4AF37]">
        <h2 className="text-4xl font-serif mb-6">Ready to Experience Veloura?</h2>
        <p className="mb-12 text-[#E5E5E5] max-w-md mx-auto italic">Your journey to absolute tranquility is just one booking away.</p>
        <button className="bg-[#D4AF37] text-[#1A1A1A] px-14 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all duration-500">
          Book Appointment
        </button>
      </section>

      {/* Tailwind Custom Utility Classes for the "Pazzazz" */}
      <style jsx>{`
        .animate-slow-zoom { animation: zoom 20s infinite alternate; }
        @keyframes zoom { from { transform: scale(1); } to { transform: scale(1.05); } }
        .shadow-glow { box-shadow: 0 0 15px rgba(212, 175, 55, 0.5); }
      `}</style>
    </div>
  );
}

export default ContactPage;