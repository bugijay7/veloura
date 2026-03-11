import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#E5E5E5] pt-20 pb-10 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* 1. Contact Information */}
        <section>
          <h3 className="text-[#D4AF37] font-serif text-lg mb-6 tracking-widest uppercase">Contact</h3>
          <div className="space-y-4 text-sm text-[#A0A0A0]">
            <p className="font-semibold text-[#E5E5E5]">Veloura Spa</p>
            <p>123 Serenity Lane<br />Nairobi, Kenya</p>
            <p>+254 712 345 678</p>
            <p className="hover:text-[#D4AF37] transition-colors cursor-pointer">info@velouraspa.com</p>
          </div>
        </section>

        {/* 2. Quick Links */}
        <section>
          <h3 className="text-[#D4AF37] font-serif text-lg mb-6 tracking-widest uppercase">Navigate</h3>
          <ul className="space-y-3 text-sm text-[#A0A0A0]">
            {["Home", "About", "Services", "Packages", "Gallery", "Booking"].map(link => (
              <li key={link} className="hover:text-[#D4AF37] transition-colors cursor-pointer hover:translate-x-1 duration-300">
                {link}
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Opening Hours */}
        <section>
          <h3 className="text-[#D4AF37] font-serif text-lg mb-6 tracking-widest uppercase">Hours</h3>
          <div className="text-sm text-[#A0A0A0] space-y-2">
            <p>Mon – Fri: <span className="text-[#E5E5E5]">9am – 8pm</span></p>
            <p>Sat: <span className="text-[#E5E5E5]">10am – 6pm</span></p>
            <p>Sun: <span className="text-[#D4AF37]">Closed</span></p>
          </div>
        </section>

        {/* 4. Newsletter */}
        <section>
          <h3 className="text-[#D4AF37] font-serif text-lg mb-6 tracking-widest uppercase">Newsletter</h3>
          <p className="text-sm text-[#A0A0A0] mb-6">Receive exclusive wellness invitations.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-b border-[#333] py-2 outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button className="text-xs tracking-[0.2em] uppercase border border-[#333] py-3 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#1A1A1A] transition-all">
              Subscribe
            </button>
          </div>
        </section>
      </div>

      {/* 5. Copyright & Social */}
      <div className="border-t border-[#333] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-[#666]">© 2026 Veloura Spa. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-[#A0A0A0]">
          {["Instagram", "Facebook", "Pinterest"].map(social => (
            <span key={social} className="hover:text-[#D4AF37] cursor-pointer transition-colors">{social}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;