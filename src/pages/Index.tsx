
import React, { useEffect, useState } from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import { FileText, Globe, Scale, ArrowDown } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import NavHeader from '@/components/ui/nav-header';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <header 
        className="fixed w-full top-0 left-0 z-50 transition-all duration-300 py-3 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#" className="text-serendipity-teal font-montserrat font-semibold text-xl">
            Serendipity
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavHeader />
          </nav>
        </div>
      </header>
      
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-serendipity-cream py-20 md:py-0">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/0d2a1747-e224-45db-992c-a05b9a2f0d2a.png" 
            alt="Serendipity Network" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container-custom relative z-10 mt-16 md:mt-0">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              What if You Could Build Your Own Luck?
            </h1>
            <p className="text-xl md:text-2xl mb-10 animate-fade-in opacity-90" style={{ animationDelay: '200ms' }}>
              Discover how to craft serendipity with my book.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <InteractiveHoverButton 
                href="#about"
                text="Explore the Book"
                className="mx-auto bg-serendipity-cream border-serendipity-teal text-serendipity-teal"
              />
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <a href="#about" className="inline-flex flex-col items-center text-serendipity-teal/70 hover:text-serendipity-teal transition-colors">
                <span className="text-sm mb-2">Discover More</span>
                <ArrowDown className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <ContainerScroll
        titleComponent={
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-serendipity-teal mb-2">Crafting Serendipity</h2>
            <h3 className="text-xl md:text-2xl text-serendipity-dark/70 mb-6">Designing a Life of Intentional Luck and Meaningful Surprises</h3>
          </div>
        }
      >
        <div className="flex flex-col md:flex-row h-full p-4 md:p-8">
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <img 
              src="/lovable-uploads/b4622520-7b5b-4e32-9f56-166aa1cb1c15.png" 
              alt="Crafting Serendipity Book Cover" 
              className="max-w-full h-auto shadow-xl rounded-lg"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="md:w-1/2 p-4 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-lg font-medium mb-4">
                My book helps creators, builders, and dreamers turn serendipity into a craft, using practical frameworks to design environments where meaningful coincidences spark innovation and connection.
              </p>
              <p className="mb-8">
                I'm a creator who's learned to build serendipity into my life—and now I'm sharing how you can too. From frameworks to cross-cultural insights, this book shows you how to make the unexpected a repeatable part of your world.
              </p>
              <InteractiveHoverButton 
                href="#takeaways" 
                text="Learn the Method"
                className="bg-serendipity-cream border-serendipity-teal text-serendipity-teal"
              />
            </div>
          </div>
        </div>
      </ContainerScroll>
      
      <Section id="problem-solution" className="bg-serendipity-cream">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-on-scroll">The Problem & Solution</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-white p-8 rounded-lg shadow-md reveal-on-scroll animate-fade-in-right">
            <h3 className="text-2xl font-bold text-serendipity-coral mb-6">Stuck in a Creativity Drought?</h3>
            <p className="text-lg">
              Rigid routines and algorithmic bubbles are killing our exposure to new ideas and chance encounters, leaving us in a predictable rut.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md reveal-on-scroll animate-fade-in-left">
            <h3 className="text-2xl font-bold text-serendipity-teal mb-6">Become a Serendipity Architect</h3>
            <p className="text-lg">
              My book teaches you to design environments where meaningful surprises thrive—using frameworks like "Serendipity Blueprints" to map spaces for chance connections and "Controlled Chaos Sprints" to break routine patterns.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12 reveal-on-scroll">
          <Button href="#takeaways" variant="primary">See How It Works</Button>
        </div>
      </Section>
      
      <Section id="book-structure" className="bg-white">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-serendipity-dark">
            Inside Crafting Serendipity
          </h2>
          <div className="max-w-3xl mx-auto mt-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="rethinking-serendipity" className="border-serendipity-teal/20">
                <AccordionTrigger className="text-left font-montserrat text-lg font-semibold text-serendipity-dark">
                  Rethinking Serendipity
                </AccordionTrigger>
                <AccordionContent className="text-base px-6">
                  <div className="space-y-4 font-lora text-serendipity-dark/90">
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 1: Beyond Luck—Serendipity as a Creative Discipline</h4>
                      <p className="mt-1">How serendipity can be a skill, with stories from history and my own life.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 2: The Myth of Randomness—Cultural and Historical Perspectives</h4>
                      <p className="mt-1">How cultures like the Japanese with Wabi-Sabi have embraced the unexpected.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="designing-for-chance" className="border-serendipity-teal/20">
                <AccordionTrigger className="text-left font-montserrat text-lg font-semibold text-serendipity-dark">
                  Designing for Chance
                </AccordionTrigger>
                <AccordionContent className="text-base px-6">
                  <div className="space-y-4 font-lora text-serendipity-dark/90">
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 3: Serendipity Engineering—Frameworks for Intentional Emergence</h4>
                      <p className="mt-1">Tools like Serendipity Blueprints to design spaces for chance encounters.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 4: Technology as a Serendipity Amplifier</h4>
                      <p className="mt-1">How AI and tech can spark serendipity, with examples from creators.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 5: Ethical Boundaries—When Does "Crafting" Become Manipulation?</h4>
                      <p className="mt-1">Guidelines for fair and empowering serendipity.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="collective-serendipity" className="border-serendipity-teal/20">
                <AccordionTrigger className="text-left font-montserrat text-lg font-semibold text-serendipity-dark">
                  Collective Serendipity
                </AccordionTrigger>
                <AccordionContent className="text-base px-6">
                  <div className="space-y-4 font-lora text-serendipity-dark/90">
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 6: Communities as Serendipity Networks</h4>
                      <p className="mt-1">How communities create serendipity through shared spaces and rituals.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 7: Policy for Serendipity—Urban Design, Education, and Workplace Innovation</h4>
                      <p className="mt-1">How cities and workplaces can be designed for chance encounters.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sustaining-serendipity" className="border-serendipity-teal/20">
                <AccordionTrigger className="text-left font-montserrat text-lg font-semibold text-serendipity-dark">
                  Sustaining Serendipity
                </AccordionTrigger>
                <AccordionContent className="text-base px-6">
                  <div className="space-y-4 font-lora text-serendipity-dark/90">
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 8: The Long Game—Cultivating Patience in a World Obsessed with Instant Results</h4>
                      <p className="mt-1">How to stay open to serendipity over time.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-serendipity-teal/30">
                      <h4 className="font-montserrat font-medium">Chapter 9: Failure as Fertilizer—Reframing Setbacks into Serendipity Triggers</h4>
                      <p className="mt-1">How setbacks can lead to unexpected opportunities.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-center mt-12 reveal-on-scroll">
            <Button href="#takeaways" variant="outline">
              Discover the Takeaways
            </Button>
          </div>
        </div>
      </Section>
      
      <!-- Updated Key Takeaways Section -->
      <Section id="takeaways" className="bg-serendipity-cream">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-serendipity-dark">What You'll Discover</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center reveal-on-scroll">
            <div className="bg-serendipity-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-serendipity-teal" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-serendipity-dark font-montserrat">Practical Frameworks</h3>
            <p className="font-lora text-serendipity-dark">
              Serendipity Blueprints to map spaces for chance encounters, Controlled Chaos Sprints to disrupt routines, and more actionable methods.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center reveal-on-scroll">
            <div className="bg-serendipity-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={28} className="text-serendipity-teal" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-serendipity-dark font-montserrat">Cross-Cultural Insights</h3>
            <p className="font-lora text-serendipity-dark">
              Explore diverse perspectives on serendipity, from Japanese Wabi-Sabi to African Ubuntu, and their unique approaches to discovery.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center reveal-on-scroll">
            <div className="bg-serendipity-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale size={28} className="text-serendipity-teal" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-serendipity-dark font-montserrat">Ethical Serendipity</h3>
            <p className="font-lora text-serendipity-dark">
              Actionable guidelines to design serendipity ethically, ensuring environments empower everyone without crossing into manipulation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12 reveal-on-scroll">
          <Button href="#author" variant="outline">Meet the Author</Button>
        </div>
      </Section>
      
      <Section id="author" className="bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-serendipity-dark">Why I Wrote This</h2>
          </div>
          
          <div className="bg-serendipity-cream p-8 rounded-lg shadow-md reveal-on-scroll">
            <p className="text-lg mb-6 font-lora text-serendipity-dark">
              I'm a creator and builder, born on St. Patrick's Day, with a natural affinity for luck. I've spent years designing experiences and communities, learning how to craft serendipity along the way. This book weaves in stories from conversations I'm having with others, making it a collaborative journey.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-serendipity-teal/20 rounded-full flex items-center justify-center">
                <span className="text-serendipity-teal text-xl font-semibold font-montserrat">AP</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10 reveal-on-scroll">
            <Button href="#vision" variant="secondary">The Vision</Button>
          </div>
        </div>
      </Section>
      
      <Section id="vision" className="bg-serendipity-cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-10 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-serendipity-dark">A Serendipity Movement</h2>
          </div>
          
          <div className="reveal-on-scroll">
            <p className="text-lg mb-12 font-lora text-serendipity-dark">
              This book is the start of a movement—imagine games, communities. I'm collecting stories from people I meet to weave into the book.
            </p>
          </div>
          
          <div className="reveal-on-scroll">
            <Button href="#contact" variant="primary">Share Feedback</Button>
          </div>
        </div>
      </Section>
      
      <Section id="contact" className="bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-serendipity-dark">Join the Conversation</h2>
            <p className="text-lg font-lora text-serendipity-dark">Your insights could help shape this book. Share your thoughts on serendipity!</p>
          </div>
          
          <div className="reveal-on-scroll">
            <ContactForm />
          </div>
        </div>
      </Section>
      
      <footer className="bg-serendipity-teal text-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Crafting Serendipity | Designed with Intentional Luck</p>
            
            <div className="mt-4 md:mt-0 flex items-center gap-6">
              <a href="#" className="hover:text-serendipity-gold transition-colors">Home</a>
              <a href="#about" className="hover:text-serendipity-gold transition-colors">About the Book</a>
              <a href="#contact" className="hover:text-serendipity-gold transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
