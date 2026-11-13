import React from 'react';
import { Link } from 'react-router-dom';
// Importing icons for the contact info
import { FiPhone, FiMail } from 'react-icons/fi'; 

const Footer = () => {
  return (
    // Your Brand Blue Background
    <footer className="bg-blue-600 text-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Changed to 6 columns to fit the new contact area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Logo Area */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/images/vectalogix-icon.svg"
                alt="Vectalogix Logo"
                className="h-8 w-auto brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="text-white text-xl font-bold tracking-tight">VECTALOGIX</span>
            </Link>
          </div>

          {/* 2. Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Custom software</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Web & mobile</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Automation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX design</Link></li>
            </ul>
          </div>

          {/* 3. Solutions Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Business systems</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">ERP & enterprise</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">CRM & client</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Inventory & finance</Link></li>
            </ul>
          </div>

          {/* 4. Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* 5. Contact Info (NEW) */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+254742091562" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <FiPhone className="text-blue-200 group-hover:text-white" />
                  <span>0742 091 562</span>
                </a>
              </li>
              <li>
                <a href="mailto:oduor@adalytix-marketing.com" className="flex items-center gap-2 hover:text-white transition-colors group break-all">
                  <FiMail className="text-blue-200 group-hover:text-white shrink-0" />
                  <span>oduor@adalytix-marketing.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 6. CTA Area */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Have a project?</h3>
            <p className="text-sm mb-6 leading-relaxed text-blue-100">
              Tell us what you are trying to build or fix.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 font-bold px-5 py-2.5 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
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