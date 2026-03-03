import { useRef, useEffect, useContext } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Flame, Factory, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { SplashContext } from '../contexts/SplashContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const clients = [
  "https://findmumbai.com/wp-content/uploads/2020/10/ORION-MUKTA-A2-CINEMAS.jpg",
  "https://content.jdmagicbox.com/v2/comp/mumbai/r2/022pxx22.xx22.160223120746.t5r2/catalogue/siddhitech-homes-pvt-ltd-head-office-prabhadevi-mumbai-builders-cxvev4f001-250.jpg",
  "https://3.imimg.com/data3/JL/VM/MY-4921103/filtereno-engineering-company-logo.jpg",
  "https://www.thelegendhotel.in/images/logo.png",
  "https://startours.co.uk/Content/Logos/Star_Tours_Logo_White.png",
  "https://newprojects.99acres.com/projects/tracadero_associates/yuupo5nj.jpg",
  "https://shreedurgafurniture.in/wp-content/uploads/2024/06/logo.jpg",
  "https://deserve.co.in/assets/img/logo.png",
  "https://assets.nobroker.in/media/building/8a9f92039006f8cf0190072c88ac1732/logo/8a9f92039006f8cf0190072c88ac1732_logo_mmy4sFWJbV1721903213486.jpg",
  "https://www.hotelhost-inn.com/images/index_05.jpg",
  "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/229873741_107114181672470_1284748753158584253_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=hd8OvKy0pqcQ7kNvwE1Gx54&_nc_oc=AdmlL0We7lLDGkUWB8kGbStkfGT3E-f4UW13NYG9ax7HgfXR--DsSzF_-hiaWb3s62ymk8nMSt_iVOq5aB7MfBys&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=6skPmxiOj1wfdZmWHNWSqw&_nc_ss=8&oh=00_AfyM-Qt9z45mqBcLEQXTqg9y8RqQZiG5zdm6kbf4GxDBOA&oe=69AB01FF",
  "https://ajmera.com/wp-content/uploads/2023/08/ajmera-new-logo.png"
];

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const AnimatedCounter = ({ from = 0, to, suffix = '' }: { from?: number, to: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: "easeOut", delay: 0.2 });
    }
  }, [count, isInView, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Typewriter = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => (
  <motion.span
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: delay } }
    }}
    className={className}
  >
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const Home = () => {
  const showSplash = useContext(SplashContext);

  return (
    <AnimatedPage className={`overflow-hidden ${showSplash ? 'h-screen' : ''}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Fire Video Background */}
        <div className="absolute inset-0 bg-brand-black z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen"
          >
            <source src="/leftfire.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradients to ensure text readability without hiding the video */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 via-brand-black/30 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-6 md:px-12 pt-20">
          <AnimatePresence>
            {!showSplash && (
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-3xl"
              >
                <div className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight min-h-[120px] md:min-h-[160px]">
                  <Typewriter text="Your " delay={0.2} />
                  <Typewriter text="Safety" delay={0.2 + (5 * 0.04)} className="text-brand-red" />
                  <Typewriter text="," delay={0.2 + (11 * 0.04)} />
                  <br />
                  <Typewriter text="Our " delay={0.2 + (12 * 0.04)} />
                  <Typewriter text="Responsibility" delay={0.2 + (16 * 0.04)} className="text-brand-red" />
                </div>
                <div className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light overflow-hidden">
                  <motion.div
                    className="flex flex-wrap gap-x-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.04, delayChildren: 0.6 } }
                    }}
                  >
                    {"Advanced Fire Protection & Safety Solutions for industrial and commercial sectors.".split(" ").map((word, i) => (
                      <div key={i} className="overflow-hidden">
                        <motion.span
                          className="inline-block"
                          variants={{
                            hidden: { y: "100%", opacity: 0 },
                            visible: { y: "0%", opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                          }}
                        >
                          {word}
                        </motion.span>
                      </div>
                    ))}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/about-us"
                    className="relative px-8 py-4 bg-brand-red text-white font-bold rounded shadow-lg hover:shadow-brand-red/50 hover:bg-brand-dark-red transition-all duration-300 flex items-center justify-center gap-2 glow-red hover-glow-red group"
                  >
                    <span className="relative z-10 flex items-center gap-2">About Us <ArrowRight className="w-5 h-5" /></span>
                  </Link>
                  <Link
                    to="/contact-us"
                    className="relative px-8 py-4 border border-white/20 hover:border-brand-red hover:bg-brand-red/10 text-white font-bold rounded transition-all duration-300 text-center hover:shadow-[0_0_15px_rgba(255,26,26,0.3)]"
                  >
                    <span className="relative z-10">Contact Us</span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Put other sections behind !showSplash */}
      <AnimatePresence>
        {!showSplash && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            {/* About Preview Section */}
            <section className="py-24 bg-[#141414] relative">
              <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 relative group"
                  >
                    <div className="absolute -inset-4 bg-brand-red/20 rounded-lg blur-xl group-hover:bg-brand-red/30 transition duration-500"></div>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="relative rounded-lg shadow-2xl object-cover h-[500px] w-full border border-white/5 mix-blend-screen"
                    >
                      <source src="/rightfire.mp4" type="video/mp4" />
                    </video>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerChildren}
                    className="md:w-1/2 space-y-6"
                  >
                    <motion.h4 variants={fadeIn} className="text-brand-red font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                      <span className="w-12 h-[2px] bg-brand-red"></span> Who We Are
                    </motion.h4>
                    <motion.h2 variants={fadeIn} className="text-4xl font-bold leading-tight">Leading experts in industrial fire systems.</motion.h2>
                    <motion.p variants={fadeIn} className="text-gray-400 leading-relaxed text-lg">
                      At Dev Enterprise, we are committed to safeguarding lives and properties through state-of-the-art fire protection solutions. With over a decade of industry experience, we design, install, and maintain systems that exceed global safety standards.
                    </motion.p>
                    <motion.div variants={fadeIn}>
                      <Link to="/about-us" className="inline-flex items-center gap-2 text-brand-white font-bold hover:text-brand-red transition-colors pt-4 border-b-2 border-transparent hover:border-brand-red pb-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Our Products Preview */}
            <section className="py-24 bg-brand-black relative">
              <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-brand-red font-bold uppercase tracking-wider text-sm mb-2"
                  >
                    Protection Gear
                  </motion.h4>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-4xl font-bold"
                  >
                    Our Products
                  </motion.h2>
                </div>

                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {[
                    { title: 'Fire Extinguishers', img: 'https://arescuer.com/wp-content/uploads/2016/09/Fire-Extinguishers.jpg' },
                    { title: 'Fire Alarm Systems', img: 'https://tse2.mm.bing.net/th/id/OIP.wdbJB0j_6r2rxo7fVZXR_QHaEE?pid=Api&P=0&h=180' },
                    { title: 'Fire Hydrant Systems', img: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RK/EQ/XH/21563178/fire-hydrant-system-installation-service-1000x1000.jpg' },
                    { title: 'Suppression Systems', img: 'https://jayaputramultiguna.id/wp-content/uploads/2024/01/Novec-1230-Fire-Suppression.webp' },
                  ].map((product, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      className="group relative bg-[#1c1c1c] rounded-xl overflow-hidden border border-white/5 hover:border-brand-red transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="h-64 overflow-hidden">
                        <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{product.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">Industrial grade fire protection solutions engineered for safety.</p>
                        <Link to="/our-products" className="text-sm font-bold uppercase tracking-wider text-brand-white group-hover:text-brand-red flex items-center gap-2">
                          View Range <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Fire Systems Section & Stats */}
            <section className="py-24 bg-[url('https://images.unsplash.com/photo-1628172828620-3b4e6371c1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-fixed bg-cover bg-center relative">
              <div className="absolute inset-0 bg-brand-black/90"></div>
              <div className="container relative z-10 mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mb-24">
                  {[
                    { number: 15, suffix: '+', label: 'Years Experience', icon: ShieldCheck },
                    { number: 500, suffix: '+', label: 'Projects Completed', icon: Factory },
                    { number: 500, suffix: '+', label: 'Happy Clients', icon: Users },
                    { number: 24, suffix: '/7', label: 'Support Available', icon: Flame },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center mb-6 glow-red">
                        <stat.icon className="w-10 h-10 text-brand-red" />
                      </div>
                      <h3 className="text-5xl font-black mb-2 text-white drop-shadow-[0_2px_10px_rgba(255,26,26,0.5)]">
                        <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                      </h3>
                      <p className="text-gray-300 font-medium tracking-widest uppercase text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                  className="max-w-4xl mx-auto text-center border-t border-white/10 pt-20"
                >
                  <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-6">Advanced Fire Protection Systems</motion.h2>
                  <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-8 leading-relaxed">
                    From sophisticated fire alarms to robust hydrant systems, we deploy cutting-edge technology to neutralize hazards before they escalate.
                  </motion.p>
                  <motion.div variants={fadeIn}>
                    <Link to="/fire-system" className="relative px-8 py-3 bg-white text-black font-bold rounded hover:bg-brand-red hover:text-white transition-colors inline-block hover:shadow-[0_0_20px_rgba(255,26,26,0.4)] group z-10 overflow-visible">
                      <span className="relative z-10">Explore Our Systems</span>
                    </Link>
                  </motion.div>
                </motion.div>
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

            {/* Business Associates / Logo Slider */}
            <section className="py-20 bg-brand-black border-y border-white/5 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container mx-auto px-6 md:px-12 mb-10 text-center"
              >
                <h2 className="text-3xl font-bold text-gray-500 uppercase tracking-widest">Trusted By Top Industries</h2>
              </motion.div>

              <div className="flex overflow-hidden py-8">
                <motion.div
                  className="flex w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                  {/* Logos block 1 */}
                  <div className="flex gap-16 md:gap-32 items-center px-8 md:px-16 transition-all duration-500">
                    {clients.map((imgSrc, i) => (
                      <div key={`block1-${i}`} className="flex items-center justify-center w-32 h-16 md:w-48 md:h-24">
                        <img src={imgSrc} alt="Business Associate" className="max-h-full max-w-full object-contain rounded hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                  {/* Logos block 2 */}
                  <div className="flex gap-16 md:gap-32 items-center px-8 md:px-16 transition-all duration-500">
                    {clients.map((imgSrc, i) => (
                      <div key={`block2-${i}`} className="flex items-center justify-center w-32 h-16 md:w-48 md:h-24">
                        <img src={imgSrc} alt="Business Associate" className="max-h-full max-w-full object-contain rounded hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Contact Preview form */}
            <section className="py-24 bg-[#141414] relative">
              <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                  className="md:w-1/2"
                >
                  <motion.h4 variants={fadeIn} className="text-brand-red font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-4">
                    <span className="w-12 h-[2px] bg-brand-red"></span> Get In Touch
                  </motion.h4>
                  <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold leading-tight mb-6">Need a consultation? <br /> Let's talk safety.</motion.h2>
                  <motion.p variants={fadeIn} className="text-gray-400 leading-relaxed mb-8">
                    Reach out to our experts for a comprehensive safety audit, product inquiry, or system installation.
                  </motion.p>
                  <motion.div variants={fadeIn} className="space-y-4">
                    <div className="flex gap-4 items-center p-4 bg-[#1c1c1c] border border-white/5 rounded-lg group hover:border-brand-red/50 transition-colors shadow-lg">
                      <div className="bg-brand-red/10 p-3 rounded-full group-hover:scale-110 transition-transform"><Flame className="text-brand-red w-6 h-6" /></div>
                      <div>
                        <p className="text-sm text-gray-400">Emergency Contacts</p>
                        <p className="font-bold text-xl">+91 96995 72999</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Big Square Logo on the Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="md:w-1/2 flex items-center justify-center lg:justify-end"
                >
                  <div className="w-full max-w-lg aspect-square rounded-3xl p-3 bg-gradient-to-br from-brand-red/30 to-transparent relative group shadow-2xl">
                    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 relative bg-brand-black">
                      <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img
                        src="/logo.jpeg"
                        alt="Dev Enterprise Logo"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out block"
                      />
                    </div>
                  </div>
                </motion.div>

              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

    </AnimatedPage>
  );
};

export default Home;
