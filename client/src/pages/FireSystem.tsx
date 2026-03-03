import { motion } from 'framer-motion';
import { ShieldCheck, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const systems = [
  {
    title: "Fire Alarm System",
    id: "alarm",
    desc: "Intelligent early detection systems equipped with advanced sensors. Our fire alarm networks feature addressable control panels that pinpoint the exact location of anomalous heat or smoke, ensuring immediate localized response and automated evacuation protocols minimize risk.",
    img: "https://nwoss.com/wp-content/uploads/2021/05/Blog_NWOSS_Conventional_FireAlarm_Diagram.png",
    features: ["Intelligent Addressable Control", "Multi-sensor Detection", "Automated Voice Evacuation", "Remote Monitoring Capability"]
  },
  {
    title: "Fire Sprinkler System",
    id: "sprinkler",
    desc: "Automated water distribution networks designed to trigger instantaneously when ambient temperatures exceed safe thresholds. We design both wet pipe and pre-action sprinkler systems, perfectly calibrated using hydraulic calculations to protect commercial real estate and industrial warehousing.",
    img: "https://zodsecurity.com/wp-content/uploads/2021/05/sprinklerAll.png",
    features: ["Hydraulically Calculated Piping", "Rapid Response Heads", "Concealed Installation", "Low Maintenance Requirements"]
  },
  {
    title: "CO2 Flooding System",
    id: "co2",
    desc: "Clean agent fire suppression ideal for protecting critical assets, data centers, and electrical control rooms. CO2 displaces oxygen rapidly, starving the fire without leaving corrosive residue or damaging sensitive electronics.",
    img: "https://gssystem.in/wp-content/uploads/2020/08/novec-flooding.jpg",
    features: ["Residue-Free Extinguishment", "Electrically Non-Conductive", "Fast Acting Suppression", "Environmentally Safe Options"]
  },
  {
    title: "Fire Hydrant System",
    id: "hydrant",
    desc: "The backbone of industrial fire protection. Our robust hydrant networks consist of heavy-duty pumping stations, comprehensive ring mains, and strategic landing valves to provide inexhaustible water flow during major fire emergencies.",
    img: "https://basicelements.in/wp-content/uploads/2024/06/image-16.png",
    features: ["High-Volume Pump Stations", "Diesel/Electrical Jockey Pumps", "Corrosion-Resistant Piping", "Strategic Yard Hydrants"]
  }
];

const FireSystem = () => {
  return (
    <AnimatedPage className="pt-20 bg-brand-black">

      <section className="py-24 bg-[#141414] border-b-4 border-brand-red text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-black/90">
          <div className="absolute inset-0 opacity-10 bg-[url('https://tse4.mm.bing.net/th/id/OIP.Bwf9hG96aPXy5ao8Hc3o7AHaDj?pid=Api&P=0&h=180')] bg-cover bg-center"></div>
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,26,26,0.1)_0%,transparent_70%)] relative z-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <motion.h4
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="text-brand-red font-bold uppercase tracking-widest mb-4 flex justify-center items-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" /> Industrial Grade
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Engineering Comprehensive <br /><span className="text-brand-red">Fire Systems</span>
          </motion.h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            From design and hydraulic calculation to precise installation and commissioning, we deliver end-to-end fire system integrations tailored to your facility's hazard profile.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6 md:px-12">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row items-center gap-16 py-24 ${index !== systems.length - 1 ? 'border-b border-brand-red/30 relative' : ''}`}
            >
              {index !== systems.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-red shadow-[0_0_15px_rgba(255,26,26,0.8)]"></div>
              )}

              {/* Text Side */}
              <div className={`w-full md:w-1/2 order-2 ${index % 2 !== 0 ? 'md:order-1 md:pr-10' : 'md:order-2 md:pl-10'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-black text-white/5 opacity-50">0{index + 1}</span>
                  <h2 className="text-4xl font-bold text-white group-hover:text-brand-red transition-colors">{system.title}</h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {system.desc}
                </p>

                <div className="bg-[#1c1c1c] p-6 rounded-xl border border-white/5 shadow-inner mb-8">
                  <h4 className="text-brand-white font-bold mb-4 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-brand-red" /> Core Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {system.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0 shadow-[0_0_5px_rgba(255,26,26,0.8)]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="inline-block relative px-8 py-4 border-2 border-brand-red text-brand-white font-bold rounded shadow-lg hover:shadow-brand-red/50 hover:bg-brand-red transition-all duration-300 overflow-visible group">
                  <span className="relative z-10">Request Consultation</span>
                </Link>
              </div>

              {/* Image Side */}
              <div className={`w-full md:w-1/2 order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'} group relative`}>
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-700"></div>
                <div className="relative h-64 sm:h-80 md:h-[450px] w-full overflow-hidden rounded-2xl border border-white/10 p-2 bg-[#111]">
                  <img
                    src={system.img}
                    alt={system.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

    </AnimatedPage>
  );
};

export default FireSystem;
