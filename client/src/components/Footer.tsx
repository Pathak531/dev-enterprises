import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t-4 border-brand-red text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.jpeg" alt="Dev Enterprise Logo" className="w-10 h-10 object-cover rounded-full border border-brand-red/50 shadow-md shadow-brand-red/20 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold tracking-tight text-brand-white">
                Dev <span className="text-brand-red">Enterprise</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your Safety, Our Responsibility. Providing advanced fire protection and safety solutions for industrial and commercial sectors since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Our Products', path: '/our-products' },
                { name: 'Fire System', path: '/fire-system' },
                { name: 'Business Associates', path: '/business-associates' },
                { name: 'Contact Us', path: '/contact-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-red transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-6">Our Services</h3>
            <ul className="space-y-3 relative group">
              {[
                'Fire Alarm System',
                'Fire Sprinkler System',
                'CO2 Flooding System',
                'Fire Hydrant System',
              ].map((service) => (
                <li key={service}>
                  <Link to="/fire-system" className="hover:text-brand-red transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red/50"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-brand-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                <span className="text-sm">G.H Soc., sakinaka, mumbai 400072</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919699572999" className="text-sm hover:text-brand-white">+91 96995 72999</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a href="mailto:deventp.fire@gmail.com" className="text-sm hover:text-brand-white">deventp.fire@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            © 2026 Dev Enterprise. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
