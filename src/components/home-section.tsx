'use client';
import { useState, useEffect } from 'react';
import AnimatedBackground from './animated-background';
import { Button } from './ui/button';
import Link from 'next/link';

const services = [
  'Our digital services ✨',
  'Web Development & Design 💻',
  'Android App Development 📱',
  'Video Editing 🎬',
  'SEO Optimization 🚀',
];

export default function HomeSection() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentService = services[serviceIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setServiceIndex((prev) => (prev + 1) % services.length);
        }
      } else {
        if (displayedText.length < currentService.length) {
          setDisplayedText((prev) => currentService.substring(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, serviceIndex]);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center overflow-hidden px-4">
      <AnimatedBackground />
      <div className="z-10 flex flex-col items-center">
        <div className="mb-8 text-left">
           <div className="relative h-10">
            <span className="text-2xl md:text-3xl text-primary font-bold">
              {displayedText}
            </span>
            <span className="inline-block w-1 h-8 md:h-9 bg-primary animate-blink align-bottom ml-1"></span>
          </div>
        </div>
        <Link href="#contact" passHref>
          <Button size="lg" className="font-bold">
              Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
}
