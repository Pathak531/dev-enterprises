import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: 'Request a Quote',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const whatsappMessage = `*New Enquiry from Website*

*Name:* ${formData.name || 'Not provided'}
*Company:* ${formData.company || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Requirement:* ${formData.requirement}

*Message:* 
${formData.message || 'No additional message'}`;

  const whatsappUrl = `https://wa.me/919699572999?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatedPage className="pt-20 bg-brand-black min-h-screen">

      {/* Header */}
      <section className="py-24 bg-[#141414] border-b border-brand-red/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 blur-xl bg-[url('https://tse4.mm.bing.net/th/id/OIP.Bwf9hG96aPXy5ao8Hc3o7AHaDj?pid=Api&P=0&h=180')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <motion.h4
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="text-brand-red font-bold uppercase tracking-widest mb-4"
          >
            Always on Standby
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Contact <span className="text-brand-red">Us</span>
          </motion.h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our fire safety experts are ready to assist you. Whether you need an emergency response, a system audit, or a comprehensive quote, we are just a message away.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-black relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#111] transform -skew-x-12 hidden lg:block border-l border-white/5 shadow-2xl"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Information Elements */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Discuss Your Safety Strategy</h2>
              <p className="text-gray-400">Reach out through any of our dedicated channels. We guarantee a response within 24 hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1c1c1c] p-6 rounded-xl border border-white/5 hover:border-brand-red/50 transition-colors shadow-lg"
              >
                <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-brand-red w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Corporate Office</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  G.H Soc., <br />
                  sakinaka, mumbai 400072
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1c1c1c] p-6 rounded-xl border border-white/5 hover:border-brand-red/50 transition-colors shadow-lg"
              >
                <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <Phone className="text-brand-red w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us (24/7)</h3>
                <p className="text-brand-white text-lg font-bold hover:text-brand-red transition-colors cursor-pointer">+91 96995 72999</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1c1c1c] p-6 rounded-xl border border-white/5 hover:border-brand-red/50 transition-colors shadow-lg"
              >
                <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-brand-red w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Address</h3>
                <a href="mailto:deventp.fire@gmail.com" className="text-gray-400 text-sm hover:text-brand-white transition-colors block mb-1">deventp.fire@gmail.com</a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1c1c1c] p-6 rounded-xl border border-white/5 hover:border-brand-red/50 transition-colors shadow-lg"
              >
                <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <Clock className="text-brand-red w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mon - Sat: 9:00 AM - 11:00 PM<br />
                  Emergency Support: <span className="text-brand-red font-bold">24/7</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#141414] p-10 rounded-2xl shadow-2xl border border-white/10 lg:ml-12 relative group z-10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/30 blur-2xl rounded-full"></div>

            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" placeholder="team@acme.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" placeholder="+91 XXXXXXXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Your Requirement</label>
                <select name="requirement" value={formData.requirement} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 text-gray-400 focus:text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all appearance-none cursor-pointer">
                  <option>Request a Quote</option>
                  <option>System Installation</option>
                  <option>Maintenance & Servicing</option>
                  <option>Fire Safety Audit</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none" placeholder="Provide details about your site or specific query..."></textarea>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="relative w-full bg-brand-red hover:bg-brand-dark-red text-white font-bold py-5 rounded-lg transition-all duration-300 flex justify-center items-center gap-2 glow-red uppercase tracking-widest text-sm shadow-[0_5px_15px_rgba(255,26,26,0.3)] hover:-translate-y-1 mt-4 group overflow-visible">
                <span className="relative z-10 flex items-center justify-center gap-2">Enquiry Now <ArrowRight className="w-5 h-5" /></span>
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-[#1c1c1c] relative transition-all duration-1000 border-t-8 border-brand-red">
        {/* Google Map Placeholder */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.094984501823!2d72.88539477444506!3d19.103488551110456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87204f8fcf1%3A0x3fc380686ed4cd51!2sSaki%20Naka!5e0!3m2!1sen!2sin!4v1772379138220!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Placeholder"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(15,15,15,1)]"></div>
      </section>

    </AnimatedPage>
  );
};

export default ContactUs;
