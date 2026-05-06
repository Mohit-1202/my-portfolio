import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { useState } from 'react';
import MagneticEffect from './MagneticEffect';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then(res => res.json());

      if (res.success) {
        setIsSuccess(true);
        e.target.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong with the form submission.");
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-[70] min-h-screen flex items-center border-t border-[#1f1f1f] overflow-hidden bg-[#080808] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      
      {/* Toast Notification */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${isSuccess ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="glass-card bg-[#111111]/90 backdrop-blur-xl border border-[#f59e0b]/30 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(245,158,11,0.15)] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
            <Check className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Message Sent!</h4>
            <p className="text-[#a1a1aa] text-xs mt-0.5">I'll get back to you shortly.</p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f59e0b] opacity-[0.03] blur-[120px] pointer-events-none rounded-t-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24 reveal-base">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Let's Build <span className="text-[#f59e0b] text-glow">Something</span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
            Have a project, idea, or collaboration in mind? Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Form */}
          <div className="reveal-left">
            <form className="glass-card p-8 md:p-10 rounded-3xl space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#1f1f1f]/60 bg-[#111111]/40" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full px-6 py-4 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white focus:bg-[#222222] focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all outline-none placeholder-[#a1a1aa] font-medium shadow-inner"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white focus:bg-[#222222] focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all outline-none placeholder-[#a1a1aa] font-medium shadow-inner"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full px-6 py-4 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white focus:bg-[#222222] focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all outline-none placeholder-[#a1a1aa] font-medium shadow-inner"
                  placeholder="Phone Number (Optional)"
                />
              </div>
              
              <div>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  required
                  className="w-full px-6 py-4 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white focus:bg-[#222222] focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all outline-none placeholder-[#a1a1aa] font-medium resize-none shadow-inner"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div className="pt-2 w-full flex justify-center">
                <MagneticEffect>
                  <button 
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`px-12 py-4 rounded-xl font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden relative group ${
                      isSuccess 
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                        : 'bg-[#f59e0b] text-black hover:scale-[1.05] shadow-[0_10px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_10px_40px_rgba(245,158,11,0.4)]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'Sending...' : isSuccess ? <><Check size={20} /> Sent</> : 'Send Message'}
                    </span>
                  </button>
                </MagneticEffect>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 reveal-right flex flex-col justify-center items-center lg:items-stretch">
            <a href="mailto:mohitmishrak47@gmail.com" className="w-full glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 group hover:border-[#f59e0b] transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-[#f59e0b]/10 flex items-center justify-center group-hover:bg-[#f59e0b] transition-colors shrink-0">
                <Mail className="text-[#f59e0b] group-hover:text-black transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                <p className="text-[#a1a1aa] group-hover:text-white transition-colors">mohitmishrak47@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+918291027803" className="w-full glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 group hover:border-[#f59e0b] transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-[#f59e0b]/10 flex items-center justify-center group-hover:bg-[#f59e0b] transition-colors shrink-0">
                <Phone className="text-[#f59e0b] group-hover:text-black transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                <p className="text-[#a1a1aa] group-hover:text-white transition-colors">+91 8291027803</p>
              </div>
            </a>
            
            <div className="w-full glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 group hover:border-[#f59e0b] transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-default text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-[#f59e0b]/10 flex items-center justify-center group-hover:bg-[#f59e0b] transition-colors shrink-0">
                <MapPin className="text-[#f59e0b] group-hover:text-black transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                <p className="text-[#a1a1aa] group-hover:text-white transition-colors">Mumbai, India</p>
                <p className="text-xs text-[#f59e0b] mt-1">Open to remote work worldwide</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="relative bg-[#080808] w-full overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div className="text-[#a1a1aa] text-sm">
        © {new Date().getFullYear()} Lokaditya Mishra
      </div>
      <div className="text-xs sm:text-sm font-medium text-[#f59e0b] tracking-wider uppercase">
        Designed & Built by Lokaditya Mishra
      </div>
      <div className="flex gap-6 text-[#a1a1aa]">
        <a href="#home" className="hover:text-white transition-colors">About</a>
        <a href="#projects" className="hover:text-white transition-colors">Work</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Contact;
