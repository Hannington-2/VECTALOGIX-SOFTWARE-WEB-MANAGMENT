import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Changed the background to your brand blue (bg-blue-600)
    <footer className="bg-blue-600 text-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Logo Area */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/images/vectalogix-icon.svg"
                alt="Vectalogix Logo"
                className="h-8 w-auto brightness-0 invert" // Makes a dark logo white
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              {/* Changed text to white */}
              <span className="text-white text-xl font-bold tracking-tight">VECTALOGIX</span>
            </Link>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Custom software development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Web & mobile applications</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Automation & integration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX design & consultancy</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Business management systems</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">ERP & enterprise systems</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">CRM & client management</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Inventory, billing & finance</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* CTA Area */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Have a project in mind?</h3>
            <p className="text-sm mb-6 leading-relaxed text-blue-100">
              Tell us what you are trying to build or fix. We will reply within two working days.
            </p>
            <Link 
              to="/contact" 
              // Changed button to white with blue text
              className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Let's build together
            </Link>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-blue-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Vectalogix Software. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors underline underline-offset-4">
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors underline underline-offset-4">
              Terms of service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;