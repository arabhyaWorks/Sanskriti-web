import React from 'react';
import headerBg from '../assets/Headerbg.png';
import mobileHeader from '../assets/mobileheader.png';
import upLogo from '../assets/upLogo.svg';
import { ExternalLink } from 'lucide-react';
import TranslatableText from './TranslatableText';

const Header = () => {
  return (
    <header 
      className="w-full md:w-full h-[80px] md:h-[85px] bg-cover bg-center relative overflow-hidden flex justify-between"
      style={{ 
        backgroundImage: `url(${mobileHeader})`,
        '@media (min-width: 768px)': {
          backgroundImage: `url(${headerBg})`
        },
        borderBottomRightRadius: '180px'
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative h-full flex items-center px-4 md:px-6 z-10">
        <div className="flex items-center">
          <img src={upLogo} alt="UP Government Logo" className="w-16 h-16 md:w-20 md:h-20" />
          <div className="ml-3">
            <TranslatableText
              text="संस्कृति विभाग"
              className="text-white font-['Inter'] text-xl md:text-2xl leading-tight font-medium"
              as="h1"
            />
            <TranslatableText
              text="उत्तर प्रदेश सरकार"
              className="text-white font-['Inter'] text-lg md:text-xl leading-tight mt-1"
              as="h2"
            />
          </div>
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-4 pr-8 relative z-10">
        <a
          href="https://upculture.up.nic.in/hi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm text-white transition-all duration-300 border border-white/30 hover:border-white/50"
        >
          <span className="font-['Inter']">संस्कृति विभाग</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
        <a
          href="https://upculture.up.nic.in/events"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm text-white transition-all duration-300 border border-white/30 hover:border-white/50"
        >
          <span className="font-['Inter']">सांस्कृतिक कार्यक्रम</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm text-white transition-all duration-300 border border-white/30 hover:border-white/50"
        >
          <span className="font-['Inter']">कलाकार पंजीकरण</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
        <a
          href="https://contest.upsanskriti.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm text-white transition-all duration-300 border border-white/30 hover:border-white/50"
        >
          <span className="font-['Inter']">लोगो प्रतियोगिता</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </nav>
      <div className="md:hidden flex items-center pr-4 relative z-10">
        <button
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => document.getElementById('mobileMenu')?.classList.toggle('hidden')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div
          id="mobileMenu"
          className="hidden absolute top-full right-0 mt-2 w-64 bg-white/10 backdrop-blur-lg rounded-lg border border-white/30 overflow-hidden"
        >
          <div className="flex flex-col p-2">
            <a
              href="https://upculture.up.nic.in/hi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 hover:bg-white/10 rounded-lg text-white"
            >
              <span className="font-['Inter']">संस्कृति विभाग</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://upculture.up.nic.in/events"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 hover:bg-white/10 rounded-lg text-white"
            >
              <span className="font-['Inter']">सांस्कृतिक कार्यक्रम</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 hover:bg-white/10 rounded-lg text-white"
            >
              <span className="font-['Inter']">कलाकार पंजीकरण</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://contest.upsanskriti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 hover:bg-white/10 rounded-lg text-white"
            >
              <span className="font-['Inter']">लोगो प्रतियोगिता</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;