import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight, Search } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const productsData = [
  { id: 1, name: "ABC Dry Chemical Powder (DCP)", category: "Extinguishers", img: "https://image.made-in-china.com/2f0j00KqthyPNaZZfl/Factory-Directly-1kg-2kg-6kg-Dry-Powder-Foam-and-Wet-Chemical-Fire-Extinguisher-CE-En3.jpg", desc: "Multipurpose fire extinguisher suitable for A, B, and C class fires." },
  { id: 2, name: "CO2 Fire Extinguisher", category: "Extinguishers", img: "https://www.fmcfire.co.uk/wp-content/uploads/2021/06/co2-extinguisher.jpg", desc: "Leaves no residue, ideal for electrical equipment and flammable liquids." },
  { id: 3, name: "Addressable Fire Alarm Panel", category: "Alarm Systems", img: "https://image7.slideserve.com/12294653/comparison-between-different-types-of-detectors-l.jpg", desc: "Pinpoint accuracy in detecting and locating fire threats across large facilities." },
  { id: 4, name: "Conventional Smoke Detector", category: "Alarm Systems", img: "https://www.herbertwilliams.com/media/catalog/product/cache/0ffb25ad2cd1784160f16b98e5f391d3/_/c/_c_2_c2w-ba.jpg", desc: "Early warning photoelectric smoke detection for commercial applications." },
  { id: 5, name: "Hydrant Landing Valve", category: "Hydrant Systems", img: "https://www.allindiasafetyservices.com/images/product/64987c06b70f7.png", desc: "Heavy- duty brass construction for high - pressure industrial environments." },
  { id: 6, name: "Fire Hose Reel", category: "Hydrant Systems", img: "https://i0.wp.com/maitech.co/wp-content/uploads/2022/12/fire-hose-reel-1.jpg?w=800&ssl=1", desc: "Instant deployment hose reel drum with 30m reach for immediate response." },
  { id: 7, name: "FM200 Clean Agent System", category: "Other Systems", img: "https://image.made-in-china.com/2f0j00ybnleAWMGgUF/FM-200-Clean-Agent-Fire-Suppression-System-Hfc-227.jpg", desc: "Rapid fire suppression without collateral water damage to server rooms." },
  { id: 8, name: "Water Spray Nozzles", category: "Sprinklers", img: "https://sc01.alicdn.com/kf/HTB1ObONJVXXXXXXXpXXq6xXFXXXj/220770074/HTB1ObONJVXXXXXXXpXXq6xXFXXXj.jpg", desc: "Precision engineered sprinkler heads designed for maximum coverage." },
  { id: 9, name: "Fire Ball Extinguisher", category: "Other Systems", img: "http://5.imimg.com/data5/SELLER/Default/2024/2/393955904/EB/FV/LZ/967627/fire-ball-extinguisher-1000x1000.jpg", desc: "An automatic fire suppression device that bursts upon contact with fire to disperse non-toxic extinguishing powder." },
  { id: 10, name: "5Kg Kanex Make Modular Clean Agent Fire Extinguisher", category: "Sprinklers", img: "http://5.imimg.com/data5/SELLER/Default/2023/11/364510112/CN/WE/DT/74019300/5kg-kanex-make-modular-clean-agent-fire-extinguisher-1000x1000.jpg", desc: "A modular, clean agent automatic fire extinguisher ideal for enclosed areas." },
  { id: 11, name: "Safe Alert 135 Ltrs Foam Based Fire Extinguisher", category: "Extinguishers", img: "https://5.imimg.com/data5/SELLER/Default/2022/6/SG/HA/XE/28558987/135-ltrs-foam-based-fire-extinguisher-1000x1000.jpg", desc: "High-capacity, heavy-duty foam extinguisher designed for combating large Class A and B fires." },
  { id: 12, name: "Red Mild Steel Co2 Fire Extinguisher 9kg Trolley Type", category: "Extinguishers", img: "https://5.imimg.com/data5/SELLER/Default/2023/2/VQ/YX/NO/39797311/co2-type-fire-extinguisher-09-kgs-1000x1000.jpg", desc: "Heavy-duty 9kg CO2 extinguisher mounted on a trolley for easy mobility in industrial settings." },
  { id: 13, name: "Fire Fighting Equipment", category: "Other Systems", img: "https://5.imimg.com/data5/SELLER/Default/2024/9/451948088/XQ/IE/QK/1184132/fire-fighting-equipment-1000x1000.png", desc: "Comprehensive collection of essential fire fighting safety gear and protection equipment." },
  { id: 14, name: "Mild Steel Double Door Fire Hose Box", category: "Other Systems", img: "https://5.imimg.com/data5/SELLER/Default/2024/1/379064887/IH/ID/NW/77423425/mild-steel-double-door-fire-hose-box-1000x1000.jpeg", desc: "Robust double door box to securely house fire hose equipment and valves." },
  { id: 15, name: "Stop Fire Single Outlet Fire Landing Valves", category: "Hydrant Systems", img: "https://5.imimg.com/data5/ZP/PN/EY/SELLER-46945645/single-outlet-fire-landing-valves-1000x1000.png", desc: "Durable single outlet landing valve for reliable water delivery in hydrant systems." },
  { id: 16, name: "Bright Fire Fighting Equipment Alaram", category: "Alarm Systems", img: "https://5.imimg.com/data5/SELLER/Default/2025/7/526975651/VC/WG/DO/89992056/fire-fighting-equipment-1000x1000.jpg", desc: "High-visibility fire fighting alarm equipment for immediate alerting and evacuation." },
  { id: 17, name: "45 Litre Mechanical Foam Type Fire Extinguisher", category: "Extinguishers", img: "https://5.imimg.com/data5/SELLER/Default/2025/7/524586266/ZC/WW/WA/195779377/mechanical-foam-type-fire-extinguisher-1000x1000.jpeg", desc: "High-volume 45L mechanical foam extinguisher designed for controlling significant Class A and B fire hazards." },
  { id: 18, name: "Trolley Mounted Monitor", category: "Other Systems", img: "https://5.imimg.com/data5/SELLER/Default/2025/1/479146303/VJ/YJ/YC/27538096/trolley-mounted-monitor-1000x1000.jpeg", desc: "Mobile high-capacity water/foam monitor mounted on a trolley for rapid deployment." },
  { id: 19, name: "Double Fire Exit Door", category: "Other Systems", img: "https://novodoor.vn/wp-content/uploads/2025/08/novodoor-fire-safety-door-red.jpg", desc: "Heavy-duty double fire safety door providing a secure, fire-resistant blockade." },
  { id: 20, name: "Single Fire Exit Door", category: "Other Systems", img: "https://www.lathamssteeldoors.co.uk/wp-content/uploads/2013/02/Installed-security-fire-exit-door-in-office.jpg", desc: "Commercial-grade single fire resistant door designed to isolate and contain fire hazards." },
  { id: 21, name: "Double Fire Exit Door in Steel", category: "Other Systems", img: "https://www.lathamssteeldoors.com.au/wp-content/uploads/2022/11/Double-Fire-Exit-USP-1024x1024.jpg", desc: "High-security steel double fire exit door engineered for robust emergency egress and fire containment." },
  { id: 22, name: "Single Fire Exit Door in Steel", category: "Other Systems", img: "https://shopcdnpro.grainajz.com/750/upload/product/4091fc5d76db535ec676042950b07564fb8d3c52d2d570d6698d16fda71d01cb.jpg", desc: "Secure single fire exit door constructed from steel for superior protection and reliable exit route safety." },
  { id: 23, name: "Fire Safety Stickers", category: "Other Systems", img: "https://static.vecteezy.com/system/resources/previews/056/080/519/non_2x/fire-safety-sticker-warning-emergency-evacuation-signs-first-aid-equipment-notice-fire-assembly-point-extinguisher-alarm-icons-safety-signs-isolated-set-vector.jpg", desc: "High-visibility mandatory fire safety, warning, and emergency evacuation sign stickers." },
  { id: 24, name: "Green Glow Fire Exit Sticker", category: "Other Systems", img: "https://m.media-amazon.com/images/I/81+a5qEHh0L.jpg", desc: "Photoluminescent glow-in-the-dark fire exit sticker for reliable visibility during power outages and emergencies." },
  { id: 25, name: "Fire Extinguisher 5 Type", category: "Extinguishers", img: "http://www.veerfire.com/images/product/Fire-Extinguisher-Company-Dorset.jpg", desc: "Comprehensive assortment of 5 different specialized fire extinguisher classes." },

  { id: 27, name: "FIRE EXTINGUISHER TROLLEY DCP", category: "Extinguishers", img: "https://smbtrd.com/wp-content/uploads/2023/03/DCP-Fire-extinguisher-trolley.jpg", desc: "Heavy-duty trolley carrying a large DCP fire extinguisher for rapid response to major fire hazards." },
  { id: 28, name: "Wheeled Fire Extinguisher Covers", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/900.900/50kg%20Mobile%20Extinguisher%20Cover%20Use%20Website.jpg", desc: "Durable protective cover designed for large wheeled mobile fire extinguishers." },
  { id: 29, name: "10kg CO2 Fire Extinguisher - Wheeled", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/480.480/10kg%20CO2%20Fire%20Extinguisher%20-%20Wheeled%20Front%20Angle%20Website.jpg", desc: "High capacity 10kg wheeled CO2 extinguisher specifically for safely tackling large electrical and flammable liquid fires." },
  { id: 30, name: "50 litre Foam Wheeled Fire Extinguisher MED Stainless Steel", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/480.480/50%20litre%20Foam%20Wheeled%20Fire%20Extinguisher%20MED%20Stainless%20Steel.jpg", desc: "Marine Equipment Directive (MED) approved 50L foam wheeled extinguisher with a durable stainless steel body." },
  { id: 31, name: "50 litre Fluorine-Free Foam Wheeled Fire Extinguisher Stainless Steel", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/480.480/50%20litre%20Fluorine-Free%20Foam%20Wheeled%20Fire%20Extinguisher%20Stainless%20Steel%20Front%20Angle%20Website_1.jpg", desc: "Environmentally friendly 50L fluorine-free foam wheeled extinguisher housed in tough stainless steel." },
  { id: 32, name: "Lithium Battery Fire Blankets 8m x 6m Car Fire Blanket", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/h.jpg", desc: "Large 8m x 6m fire blanket specifically engineered to safely contain and suppress lithium-ion battery and vehicle fires." },
  { id: 33, name: "4m x 3m Lithium Battery Fire Blanket", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/Large-Lithium-Fire-Blanket.png", desc: "Reliable 4m x 3m fire blanket for containing lithium battery fires in mid-sized equipment." },
  { id: 34, name: "3m x 2m Lithium Battery Fire Blanket", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/Medium-Lithium-Fire-Blanket.png", desc: "Compact 3m x 2m fire blanket designed for rapid deployment on smaller lithium battery fires." },
  { id: 35, name: "Jet Spray Hose Nozzle Plus", category: "Hydrant Systems", img: "https://vigilproducts.com/var/images/product/480.480/Jet%20Spray%20Hose%20Plus%20Nozzle%2019mm%20Front%20Angle%20Website.jpg", desc: "High-performance jet spray hose nozzle plus for enhanced water delivery and control." },
  { id: 36, name: "Jet Spray Hose Nozzle", category: "Hydrant Systems", img: "https://vigilproducts.com/var/images/product/480.480/JetSprayHoseNozzle%20%284%29.jpg", desc: "Reliable and durable jet spray hose nozzle for effective fire combat." },
  { id: 37, name: "Chrome Jet Spray Hose Nozzle", category: "Hydrant Systems", img: "https://vigilproducts.com/var/images/product/480.480/ChromeJetSprayHoseNozzle%20%288%29.jpg", desc: "Premium chrome-finished jet spray hose nozzle combining durability with excellent spray control." },
  { id: 38, name: "Folding Indoor Barrier - 3-Panel", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/Folding%20Indoor%20Barrier%20-%203-Panel.jpg", desc: "High-visibility folding 3-panel indoor barrier for quickly cordoning off unsafe or restricted areas." },
  { id: 39, name: "Extending Barrier – 5 metres", category: "Other Systems", img: "https://vigilproducts.com/var/images/product_variant/480.480/Metal%20Expanding%20Barrier%205m%20Red%20and%20White%20Front%20Angle%20Website.jpg", desc: "Durable metal expanding barrier stretching up to 5 meters for clear area restriction and safety." },
  { id: 40, name: "Air Horn Storage Box", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/Gas%20Horn%20Box%20With%20Horn%20Website.jpg", desc: "Secure and visible storage box specifically designed to house emergency evacuation air horns." },
  { id: 41, name: "Manual Rotary Fire Alarm Bell", category: "Alarm Systems", img: "https://vigilproducts.com/var/images/product/480.480/Firebell%20Front%20New%20Website_1.jpg", desc: "Classic hand-operated rotary fire alarm bell for reliable emergency signaling without electricity." },
  { id: 42, name: "Anti-Tamper Seals - Packs of 100", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/All%20Tamper%20Seals%201%20Website.jpg", desc: "Pack of 100 high-visibility anti-tamper seals ensuring equipment readiness and security." },
  { id: 43, name: "Fire Extinguisher Cover - Red Medium", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/480.480/Red%20Medium%20Cover%20-%20Square%20Window%20Front%20In%20Use%20Website.jpg", desc: "Medium-sized red protective fire extinguisher cover with a transparent inspection window." },
  { id: 44, name: "Fire Extinguisher Cover – Large", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/480.480/Medium%20Extinguisher%20Cover%20-%20Full%20Window%20Front%20In%20Use%20Website.jpg", desc: "Large protective cover with full window for clear visibility of the extinguisher inside." },
  { id: 45, name: "Fire Extinguisher Cabinet - Extended Single", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/480.480/Fire%20Extinguisher%20Cabinet%20-%20Extended%20Single%20Front%20Angle%20Website.jpg", desc: "Extended single fire extinguisher cabinet designed to fit taller extinguisher models securely." },
  { id: 46, name: "Fire Extinguisher Cabinet - Double", category: "Extinguishers", img: "https://vigilproducts.com/var/images/product/480.480/Fire%20Extinguisher%20Cabinet%20-%20Double%20Front%20Angle%20Website.jpg", desc: "Durable double cabinet for storing and protecting two fire extinguishers simultaneously." },
  { id: 47, name: "External First Aid Cabinet - White", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/First%20Aid%20Cabinet%20-%20White%20Front%20Angle%20Website.jpg", desc: "High-visibility external first aid cabinet for secure outdoor storage of emergency medical supplies." },
  { id: 48, name: "25W Megaphone with Microphone & USB", category: "Alarm Systems", img: "https://vigilproducts.com/var/images/product/480.480/25W%20Megaphone%20with%20Microphone%20Front%20Angle%20Website.jpg", desc: "Powerful 25W megaphone featuring a detachable microphone and USB input for clear emergency announcements." },
  { id: 49, name: "Blind Spot Mirror – 800mm & 1000mm", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/Blind%20Spot%20Mirror%202.jpg", desc: "Large convex mirror designed to eliminate blind spots and improve safety in high-traffic or hazardous areas." },
  { id: 50, name: "Metal Fire Bucket with Lid", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/Metal%20Fire%20Bucket%20and%20Lid%20Front%20Angle%20Website.jpg", desc: "Traditional red metal fire bucket complete with a lid, essential for containing sand or water in fire emergencies." },
  { id: 51, name: "Fire Sand - 12.5kg Bag", category: "Other Systems", img: "https://vigilproducts.com/var/images/product/480.480/D/Fire%20Sand1_600x600.jpg", desc: "Convenient 12.5kg bag of fire-retardant sand for use with fire buckets and spill containment." },
  { id: 52, name: "Horizontal Globe Pattern Landing Valves", category: "Hydrant Systems", img: "https://vigilproducts.com/var/images/product/480.480/Horizontal%20Globe%20Pattern%20Landing%20Valves.jpg", desc: "Durable horizontal globe pattern landing valve for dependable water control in hydrant systems." }
];

const categories = ["All", "Extinguishers", "Alarm Systems", "Hydrant Systems", "Sprinklers", "Other Systems"];

const OurProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim() === ""
    ? []
    : productsData.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const filteredProducts = productsData.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppUrl = (product: typeof productsData[0]) => {
    const message = `🔥 *From Website - DEV ENTERPRISES* 🔥

*Product Enquiry*
I am interested in knowing more about:

*Product:* ${product.name}
*Category:* ${product.category}

*Product Image:* ${product.img}`;
    return `https://wa.me/919699572999?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatedPage className="pt-20 bg-brand-black min-h-screen">

      <section className="relative py-20 bg-[#141414] border-b border-brand-red/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://tse4.mm.bing.net/th/id/OIP.Bwf9hG96aPXy5ao8Hc3o7AHaDj?pid=Api&P=0&h=180')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our <span className="text-brand-red">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Explore our comprehensive range of certified fire protection gear designed for unparalleled reliability.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">

          {/* Controls: Search and Filter */}
          <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">

            {/* Search Bar Left Side */}
            <div className="relative w-full lg:w-96 z-30" ref={searchRef}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl leading-5 bg-[#1c1c1c] text-white placeholder-gray-500 focus:outline-none focus:bg-[#2c2c2c] focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all duration-300 sm:text-sm"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                />
              </div>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {isSearchFocused && searchQuery.trim() !== "" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute w-full mt-2 bg-[#1c1c1c] border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
                  >
                    {searchResults.length > 0 ? (
                      searchResults.map((product) => (
                        <div
                          key={product.id}
                          className="px-4 py-3 hover:bg-brand-red/20 cursor-pointer flex items-center gap-3 transition-colors border-b border-white/5 last:border-0"
                          onClick={() => {
                            setSearchQuery(product.name);
                            setIsSearchFocused(false);
                            setActiveCategory("All"); // Show the searched product
                          }}
                        >
                          <img src={product.img} alt={product.name} className="w-10 h-10 object-cover rounded" />
                          <div>
                            <div className="text-white text-sm font-medium">{product.name}</div>
                            <div className="text-brand-red text-xs">{product.category}</div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-4 text-gray-500 text-sm text-center">
                        No products found matching "{searchQuery}"
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Category Filter Right Side */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider whitespace-nowrap hidden md:flex">
                <Filter className="w-5 h-5" /> Filter:
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                      ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255,26,26,0.3)]'
                      : 'bg-[#1c1c1c] text-gray-400 hover:text-white hover:bg-[#2c2c2c] border border-white/5'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 group hover:border-brand-red/50 hover:shadow-[0_10px_30px_rgba(255,26,26,0.15)] transition-all duration-500 flex flex-col"
                >
                  {/* Image Container with Hover zoom */}
                  <div className="relative h-72 overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-3 py-1 bg-brand-black/80 backdrop-blur-sm text-xs text-brand-red border border-brand-red/30 rounded uppercase font-bold tracking-wider relative z-20">
                        {product.category}
                      </span>
                    </div>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-red transition-colors">{product.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      {product.desc}
                    </p>

                    <a
                      href={getWhatsAppUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full py-4 border border-brand-red text-brand-white font-bold rounded-lg hover:bg-brand-red transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,26,26,0.4)] overflow-visible"
                    >
                      <span className="relative z-10 flex items-center gap-2">Enquire Now <ArrowRight className="w-4 h-4" /></span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl text-gray-500">No products found in this category.</h3>
            </div>
          )}

        </div>
      </section>

    </AnimatedPage>
  );
};

export default OurProducts;
