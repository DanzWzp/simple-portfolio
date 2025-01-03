import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="contact-content">
            <h2 className="text-4xl font-bold mb-16 text-center">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="text-emerald-400" size={24} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                        your.dnd,code@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-emerald-400" size={24} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-400">Manado, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-emerald-400" size={24} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1234567890" className="text-gray-400 hover:text-emerald-400 transition-colors">
                        +62 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;