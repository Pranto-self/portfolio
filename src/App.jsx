import React, { useState } from 'react';
import image from './assets/foreimg.png';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
  { name: 'Home', id: 'Home' },
  { name: 'About', id: 'About' },
  { name: 'Education', id: 'Education' },
  { name: 'Contact', id: 'Contact' },
];


  const socialLinks = [
    { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/sabbir.a.pranto', label: 'Facebook' },
    { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/p_r_a_n.t_o?xtok=aWMxbzU4Zjdla3Zt', label: 'Instagram' },
    { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/+8801601332917', label: 'WhatsApp' },
    { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/sabbir-a-pranto?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  ];

  return (
    <div className={`h-screen w-screen overflow-hidden flex flex-col justify-between transition-colors duration-500 relative select-none ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Background Decorative Lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${
        isDarkMode ? 'bg-white/5' : 'bg-black/5'
      }`} />

      {/* 2. THE ANIMATING IMAGE LAYER — Morphing layout system */}
      <div className={`absolute z-50 pointer-events-none transition-all ease-in-out duration-700 overflow-hidden
        ${activeTab === 'Home' 
          ? 'bottom-0 left-1/2 -translate-x-1/2 w-[135vw] sm:w-[110vw] h-[55vh] md:w-full md:h-[82vh] lg:h-[85vh] md:left-0 md:translate-x-0 rounded-none' 
          : 'top-5 left-6 md:left-12 w-12 h-12 rounded-full border-2 border-current shadow-lg translate-x-0 translate-y-0'
        }`}
      >
        <img
          src={image}
          alt="Sabbir Alom Pranto"
          className={`w-full h-full transition-all duration-700
            ${activeTab === 'Home' 
              ? 'object-contain object-bottom translate-y-[1vh] md:translate-y-[1px]' 
              : 'object-cover object-top scale-125'
            }`}
        />
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="w-full px-6 py-6 md:px-12 md:py-8 flex items-center justify-between z-40 relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-2xl focus:outline-none transition-transform active:scale-95"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>

        {/* Brand Logo Text */}
        <button 
          onClick={() => setActiveTab('Home')}
          className={`font-monoton text-2xl md:text-3xl tracking-wider uppercase hover:opacity-80 transition-all duration-700 text-left
            ${activeTab === 'Home' ? 'pl-0' : 'pl-16'}`}
        >
          PRANTO
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-widest uppercase">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => setActiveTab(link.id)}
              className={`relative py-1 group transition-colors ${activeTab === link.id ? 'text-blue-500' : 'hover:text-gray-400'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${activeTab === link.id ? 'w-full bg-blue-500' : 'w-0 group-hover:w-full bg-current'}`}></span>
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none ${
            isDarkMode ? 'bg-zinc-800 border border-zinc-700' : 'bg-gray-300 border border-gray-400'
          }`}
          aria-label="Toggle Theme"
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transform transition-transform duration-300 text-xs shadow-md ${isDarkMode ? 'translate-x-6 bg-white text-black' : 'translate-x-0 bg-yellow-500 text-white'}`}>
            <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </div>
        </button>
      </header>

      {/* MOBILE MENU DRAWER */}
      <div className={`fixed inset-0 z-30 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-2xl font-anton tracking-widest transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${isDarkMode ? 'text-white' : 'bg-white/95 text-black'}`}>
        {navLinks.map((link) => (
          <button 
            key={link.id} 
            onClick={() => { setActiveTab(link.id); setIsMenuOpen(false); }}
            className="hover:scale-110 transition-transform uppercase"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* DYNAMIC SCREEN SECTIONS CONTENT */}
      <main className="flex-1 w-full relative flex items-center justify-center overflow-hidden px-4 md:px-[8%]">
        
        {/* TAB LAYER A: HOME SCREEN DISPLAY */}
        <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 px-4 md:px-[8%]
          ${activeTab === 'Home' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="relative w-full flex flex-col justify-center md:justify-between items-center h-auto md:h-full md:max-h-[68vh] gap-4 md:gap-0 animate-float">
            <div className="w-full text-center z-0">
              <h1 className={`font-anton uppercase tracking-normal w-full leading-none text-[7.5vh] sm:text-[8vh] ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
                <span className="block md:hidden">SABBIR ALOM</span>
                <svg className="hidden md:block w-full h-auto" viewBox="0 0 1000 125" preserveAspectRatio="xMidYMax meet"><text x="0" y="125" textLength="1000" lengthAdjust="spacing" fontSize="160" className="font-anton" fill="currentColor">SABBIR ALOM</text></svg>
              </h1>
            </div>
            <div className="w-full text-center z-0" style={{ animationDelay: '-3s' }}>
              <h2 className={`font-anton uppercase tracking-tighter giant-text-glow w-full leading-none text-[13vh] sm:text-[14vh] ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <span className="block md:hidden">PRANTO</span>
                <svg className="hidden md:block w-full h-auto" viewBox="0 0 1000 234" preserveAspectRatio="xMidYMax meet"><text x="0" y="234" textLength="1000" lengthAdjust="spacing" fontSize="300" className="font-anton" fill="currentColor">PRANTO</text></svg>
              </h2>
            </div>
          </div>
        </div>

        {/* TAB LAYER B: ABOUT SCREEN DISPLAY */}
        <div className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center transition-all duration-700 px-6 max-w-2xl mx-auto
          ${activeTab === 'About' ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
          <h1 className="font-anton text-4xl uppercase mb-4 tracking-wider">About Me</h1>
          <p className="text-sm md:text-base leading-relaxed opacity-80">
                <h1 className="font-anton text-4xl mb-4 tracking-wider"> Hi, I'm SABBIR ALOM PRANTO</h1>
                "Welcome to my corner of the internet! My path hasn't been a straight line, 
                and honestly, I've never been someone who fit neatly into just one box. For a long time, I wondered where my exact 'niche' was, 
                only to realize that my true strength lies in my curiosity and adaptability. This website is the result of a continuous journey of learning, 
                experimenting, and refusing to stand still. I'm driven by a passion to explore new ideas, master new skills from the ground up, and see where dedication can take me. I may not have started with all the answers, but I've built a foundation on hard work, a fresh perspective, and an eagerness to grow every single day—and 
                the best chapters are still being written."
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          </p>
        </div>

        {/* TAB LAYER D: Education SCREEN */}
      <div className={`absolute inset-0 w-full h-full flex flex-col items-center text-left transition-all duration-700 px-6 max-w-2xl mx-auto 
        ${activeTab === 'Education' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
  
         <h2 className="font-anton text-4xl uppercase mb-4 tracking-wider">My Education</h2>
         <p className="text-sm md:text-base opacity-80">
          <h4 className="text-xl text-left uppercase justify-left">Degree: Master of Science (M.Sc.)</h4>
          <h4 className="text-xl text-left justify-left underline underline-offset-4">Institution: <a href="https://www.nu.ac.bd/" target="_blank" rel="noopener noreferrer">National University</a></h4>
          Year: 2022 
          <h4 className="text-xl text-left uppercase mt-4 justify-left">Degree: bachelor of Science (B.Sc.)</h4>
          <h4 className="text-xl text-left justify-left underline underline-offset-4">Institution: <a href="https://www.nu.ac.bd/" target="_blank" rel="noopener noreferrer">National University</a></h4>
           Year: 2021 
          <h4 className="text-xl text-left uppercase mt-4 tracking-wider justify-left">Degree: Higher Secondary Certificate (HSC)</h4>
          <h4 className="text-xl text-left justify-leftunderline underline underline-offset-4">Institution: <a href="https://armc.edu.bd/" target="_blank" rel="noopener noreferrer">Advanced Residential Model College</a></h4>
           Year: 2017
          <h4 className="text-xl text-left uppercase mt-4 tracking-wider justify-left">Degree: Secondary School Certificate (S.s.c)</h4>
          <h4 className="text-xl text-left justify-left underline underline-offset-4">Institution: <a href="https://naklagovtpilothighschool.edu.bd/" target="_blank" rel="noopener noreferrer">Nakla Govt. Pilot High School</a></h4>
          Year: 2015
         </p>

            </div>


        {/* TAB LAYER C: CONTACT SCREEN DISPLAY */}
        <div className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center transition-all duration-700 px-6 max-w-2xl mx-auto
          ${activeTab === 'Contact' ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
          <h2 className="font-anton text-4xl uppercase mb-4 tracking-wider">Get In Touch</h2>
          <p className="text-sm md:text-base mb-6 opacity-80">Let's work together on your next high-end platform layout structure.</p>
          <a href="mailto:sabbiralom.pranto@gmail.com" className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 border ${
            isDarkMode ? 'border-white bg-white text-black hover:bg-black hover:text-white' : 'border-black bg-black text-white hover:bg-white hover:text-black'
          }`}>
            Send A Message
          </a>
        </div>

      </main>

      {/* FOOTER / SOCIAL & EXTRA DETAILS */}
      <footer className="w-full px-6 py-6 md:px-12 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-[60] relative text-xs sm:text-sm tracking-wider opacity-100">
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label} className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'border-zinc-800 bg-zinc-900/60 hover:bg-white hover:text-black hover:border-white' : 'border-gray-300 bg-white/60 hover:bg-black hover:text-white hover:border-black'}`}>
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <div className="font-medium tracking-widest text-center sm:text-right">
          <span>Presented By: </span>
          <span className="font-bold underline underline-offset-4">Sabbir Alom</span>
        </div>
      </footer>

    </div>
  );
}
