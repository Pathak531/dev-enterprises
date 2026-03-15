import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const clients = [
  "https://tse4.mm.bing.net/th/id/OIP.58PtnhD-JZMCMaPEhjMK6QHaDt?pid=Api&P=0&h=180",
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
  "https://ajmera.com/wp-content/uploads/2023/08/ajmera-new-logo.png",
  "https://static.vecteezy.com/system/resources/previews/020/190/432/original/hdfc-logo-hdfc-icon-free-free-vector.jpg",
  "https://radhagroup.org.in/wp-content/uploads/2025/12/logo.png",
  "https://tse3.mm.bing.net/th/id/OIP.ekkCK_gW2v1ZTlEsWA7ifgHaHa?pid=Api&P=0&h=180",
  "https://tse1.mm.bing.net/th/id/OIP.pdZ0HXsqVW6MKwPzBRP7zAAAAA?pid=Api&P=0&h=180"
];

const BusinessAssociates = () => {
  return (
    <AnimatedPage className="pt-20 bg-brand-black min-h-screen">

      {/* Header */}
      <section className="relative py-24 bg-[#141414] border-b border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://tse4.mm.bing.net/th/id/OIP.Bwf9hG96aPXy5ao8Hc3o7AHaDj?pid=Api&P=0&h=180')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <motion.h4
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="text-brand-red font-bold uppercase tracking-widest mb-4"
          >
            Partnerships Built on Trust
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Business <span className="text-brand-red">Associates</span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            We are privileged to be the trusted fire safety partners for India's leading industrial conglomerates and multinational corporations.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-[#111] h-32 flex items-center justify-center border border-white/5 rounded-xl hover:border-brand-red/50 hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                {client.startsWith('http') ? (
                  <img src={client} alt="Business Associate" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-all duration-500 rounded" />
                ) : (
                  <span className="text-xl font-bold text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 text-center tracking-wide uppercase">
                    {client}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </AnimatedPage>
  );
};

export default BusinessAssociates;
