
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-serendipity-teal font-montserrat font-semibold text-xl">
          Serendipity
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-serendipity-dark/80 hover:text-serendipity-teal transition-colors">About</a>
          <a href="#problem-solution" className="text-serendipity-dark/80 hover:text-serendipity-teal transition-colors">Problem & Solution</a>
          <a href="#takeaways" className="text-serendipity-dark/80 hover:text-serendipity-teal transition-colors">Takeaways</a>
          <a href="#contact" className="text-serendipity-dark/80 hover:text-serendipity-teal transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
