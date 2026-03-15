import { motion } from 'framer-motion';
import { Target, ShieldCheck, Award, Clock, Wrench, ShieldAlert, FileText, Component, HardHat, Car, Zap, Building2, Flame } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const AboutUs = () => {
  return (
    <AnimatedPage className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#141414] border-b-4 border-brand-red overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://tse4.mm.bing.net/th/id/OIP.Bwf9hG96aPXy5ao8Hc3o7AHaDj?pid=Api&P=0&h=180')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About <span className="text-brand-red">Dev Enterprise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Pioneering advanced fire protection and life safety solutions across the industry.
          </motion.p>
        </div>
      </section>

      {/* Leadership / Meet Our Proprietor */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative flex justify-center"
            >
              <div className="w-full max-w-md aspect-square border-2 border-brand-red/20 rounded-2xl p-2 relative group overflow-hidden">
                <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none rounded-xl"></div>
                <img
                  src="/propriter.jpeg"
                  alt="Proprietor"
                  className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h4 className="text-brand-red font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-4">
                <span className="w-12 h-[2px] bg-brand-red"></span> Pawan Kumar Pathak
              </h4>
              <h2 className="text-4xl font-bold mb-6">Meet Our Proprietor</h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Dev Enterprises specializes in advanced fire protection solutions, offering high-quality firefighting equipment and suppression systems. With over 20 years of expertise, we deliver reliable and customized safety solutions to safeguard lives and assets.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We specialize in end-to-end fire safety solutions, including consulting, design, installation, and meticulous maintenance of sophisticated fire alarm and suppression systems. Our engineering precision and dedication ensure your business complies with the strictest global safety regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-24 bg-[#141414]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-brand-red">Services</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dev Enterprise provides complete fire protection, safety compliance, and emergency support solutions for commercial, residential, and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Annual Maintenance Contract (AMC)" },
              { icon: HardHat, title: "Fire Marshal Supply & Professional Training" },
              { icon: Flame, title: "Fire Mock Drill Planning & Execution" },
              { icon: FileText, title: "Fire Safety Consultancy & Licensing" },
              { icon: Component, title: "Fire System Diagram & Design" },
              { icon: Wrench, title: "Complete Range of Fire Fighting Equipment" },
              { icon: ShieldAlert, title: "Installation & AMC Work for All Systems" },
              { icon: Target, title: "Fire Marshal Services for Events" },
              { icon: Building2, title: "Fire Safety Interior Work" },
              { icon: Car, title: "Ambulance Supply with Doctor & Setup" },
              { icon: Zap, title: "Electrical Contractor Services" },
              { icon: Building2, title: "Solutions for Commercial & Industrial Areas" }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-brand-black p-6 rounded-xl border border-white/5 shadow-lg relative group overflow-hidden flex items-start gap-4 hover:border-brand-red/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red/20 transition-colors">
                  <service.icon className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100 leading-snug group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 bg-[#141414] border-t border-brand-red/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our Operations <span className="text-brand-red">in Action</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Experience our advanced fire protection systems and dedicated team at work.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: 'Fire Suppression Systems', src: '/FireSuppressionSystems.mp4' },
              { id: 2, title: 'Safety Equipment Testing', src: '/SafetyEquipmentTesting.mp4' },
              { id: 3, title: 'Emergency Response Drill', src: '/EmergencyResponseDrill.mp4' }
            ].map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] bg-brand-black border border-white/5"
              >
                <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                  <div className="w-12 h-12 bg-brand-red mb-4 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Dev Enterprise?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our competitive edge lies in our technical mastery and dedication to quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromised Quality", desc: "Rigorous testing and premium materials ensure systems that never fail when you need them." },
              { icon: Award, title: "Certified Experts", desc: "Our engineers are fully certified and trained to comply with international fire safety codes (NFPA, local codes)." },
              { icon: Clock, title: "24/7 Response", desc: "Fire risks don't sleep, and neither do we. Round-the-clock emergency support and rapid response times." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center p-8 border border-white/5 rounded-xl hover:border-brand-red/50 transition-colors bg-[#111]"
              >
                <div className="w-20 h-20 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </AnimatedPage>
  );
};

export default AboutUs;
