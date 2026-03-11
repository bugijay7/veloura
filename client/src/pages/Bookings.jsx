import React from "react";
// Import the image you want to use on the left
import bookingImage from "../assets/spa-interior.jpg"; 

function Bookings() {
  // inputStyle remains unchanged
  const inputStyle = "w-full bg-white border border-[#A0A0A0] text-[#1A1A1A] p-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-[#808080]";
  
  return (
    <div className="bg-[#FAF9F6]">
      {/* 1. Main 50/50 Layout Grid */}
      <div className="grid md:grid-cols-2 items-center py-40 px-6 md:px-16 lg:px-24 gap-12">
        
        {/* Left Side: Image - Hidden on small screens, visible on md and up */}
        <div className="hidden md:block h-full">
          <img 
            src={bookingImage} 
            alt="Veloura Spa Treatment Room" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Booking Content */}
        <div className="py-24 px-6 md:px-16 lg:px-24">
          {/* Page Title moved inside the right section */}
          <section className="text-center md:text-left mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Book Your Appointment</h1>
            <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto md:mx-0 mb-6"></div>
            <p className="text-[#333] max-w-lg mx-auto md:mx-0 italic text-lg leading-relaxed">
              Schedule your journey to tranquility at Veloura.
            </p>
          </section>

          {/* Booking Form */}
          <div className="bg-white p-8 md:p-12 border border-[#E5E5E5] shadow-sm">
            <form className="space-y-10">
              
              {/* Personal Information */}
              <fieldset className="space-y-6">
                <legend className="text-[#8B7355] font-bold tracking-widest uppercase text-xs mb-4">Personal Details</legend>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className={inputStyle} required />
                  <input type="email" placeholder="Email Address" className={inputStyle} required />
                </div>
                <input type="tel" placeholder="Phone Number" className={inputStyle} required />
              </fieldset>

              {/* Appointment Details */}
              <fieldset className="space-y-6">
                <legend className="text-[#8B7355] font-bold tracking-widest uppercase text-xs mb-4">Treatment Selection</legend>
                <select className={`${inputStyle} text-[#1A1A1A]`} required>
                  <option value="">Select a Service</option>
                  <option value="swedish">Swedish Massage</option>
                  <option value="hot-stone">Hot Stone Therapy</option>
                  <option value="deep-tissue">Deep Tissue Massage</option>
                  <option value="aromatherapy">Aromatherapy Massage</option>
                  <option value="luxury-facial">Luxury Facial</option>
                  <option value="hydrating-facial">Hydrating Facial</option>
                  <option value="body-scrub">Body Scrub</option>
                  <option value="body-wrap">Body Wrap</option>
                  <option value="couples-massage">Couples Massage</option>
                  <option value="prenatal-massage">Prenatal Massage</option>
                </select>
               
                <textarea placeholder="Special requests or health notes..." className={`${inputStyle} h-32`}></textarea>
              </fieldset>

              <button type="submit" className="w-full bg-[#1A1A1A] text-white py-4 hover:bg-[#D4AF37] transition-all uppercase tracking-widest text-sm font-semibold">
                Confirm Request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Preparation & Care - Styled with warm, inviting language */}
<section className="bg-[#F7F3F0] py-20 px-6 md:px-24">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      
      {/* Guidelines with a warmer touch */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl text-[#1A1A1A]">Preparing for Serenity</h2>
        <p className="text-[#555] italic leading-relaxed">
          To ensure you receive the full benefit of your journey with us, 
          we’ve curated a few gentle reminders for your arrival.
        </p>
        <ul className="space-y-4 text-[#333]">
          <li className="flex items-start gap-3">
            <span className="text-[#D4AF37] mt-1">✦</span>
            <span>We invite you to arrive <span className="font-semibold text-[#1A1A1A]">15 minutes early</span> to settle in and enjoy a warm herbal infusion.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D4AF37] mt-1">✦</span>
            <span>Should your plans change, please allow us <span className="font-semibold text-[#1A1A1A]">24 hours notice</span> so we may offer that time to another guest.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D4AF37] mt-1">✦</span>
            <span>To honor the peace of all our guests, we kindly ask that late arrivals be mindful that session times may be shortened.</span>
          </li>
        </ul>
      </div>

      {/* Support with a concierge feel */}
      <div className="bg-white p-10 shadow-sm border-l-4 border-[#D4AF37]">
        <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Our Concierge is Here</h2>
        <p className="text-[#555] leading-relaxed mb-8">
          Do you have a specific wellness goal or a question about our rituals? 
          Our dedicated team is delighted to help you curate the perfect escape.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#8B7355] font-bold">Speak with us</span>
            <span className="text-xl font-medium text-[#1A1A1A]">+254 712 345 678</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#8B7355] font-bold">Write to us</span>
            <span className="text-lg text-[#1A1A1A] border-b border-[#D4AF37] w-fit">info@velouraspa.com</span>
          </div>
          <div className="pt-4">
            <p className="text-sm text-[#888] font-light italic">Visit us at 123 Serenity Lane, Nairobi</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}

export default Bookings;