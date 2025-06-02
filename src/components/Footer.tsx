import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import upLogo from '../assets/upLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#903603] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={upLogo} alt="UP Logo" className="w-20 h-20" />
              <div>
                <h3 className="font-bold text-2xl font-['Baloo_2']">संस्कृति विभाग</h3>
                <p className="text-lg">उत्तर प्रदेश सरकार</p>
              </div>
            </div>
            <p className="text-base text-white/90 leading-relaxed">
              उत्तर प्रदेश की समृद्ध सांस्कृतिक विरासत को संरक्षित और प्रोत्साहित करने के लिए समर्पित।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 font-['Baloo_2'] border-b border-white/20 pb-2">त्वरित लिंक</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-white/80 transition-colors hover:translate-x-1 inline-block">मुख्य पृष्ठ</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors hover:translate-x-1 inline-block">कलाकार पंजीयन</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">सांस्कृतिक कार्यक्रम</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">अनुदान योजनाएं</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">संग्रहालय</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 font-['Baloo_2'] border-b border-white/20 pb-2">महत्वपूर्ण लिंक</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-white/80 transition-colors">सूचना का अधिकार</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">नियम और शर्तें</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">गोपनीयता नीति</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">हेल्प डेस्क</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">साइटमैप</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 font-['Baloo_2'] border-b border-white/20 pb-2">संपर्क करें</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <p>जवाहर भवन, 2 अशोक मार्ग, लखनऊ - 226001</p>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+915222286672" className="hover:text-white/80 transition-colors">0522-2286672</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:directorcultureup@gmail.com" className="hover:text-white/80 transition-colors">directorcultureup@gmail.com</a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">सोशल मीडिया</h4>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white/80 transition-all hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white/80 transition-all hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white/80 transition-all hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white/80 transition-all hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>© 2024 संस्कृति विभाग, उत्तर प्रदेश सरकार। सर्वाधिकार सुरक्षित।</p>
            <div className="flex items-center gap-4">
              <p>अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}</p>
              <a href="#" className="hover:text-white transition-colors">वेबसाइट नीतियां</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;