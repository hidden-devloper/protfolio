'use client';
import { useState, useEffect } from 'react';
import AnimatedBackground from './animated-background';
import { Button } from './ui/button';
import Link from 'next/link';
import {CheckCircle} from 'lucide-react';

const services = [
  'Web Development & Design',
  'Android App Development',
  'Video Editing',
];

export default function HomeSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center overflow-hidden px-4">
      <AnimatedBackground />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 animate-fade-in-down">
          <span>naaz.dev</span>
        </h1>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Services We Offer:</h2>
          <ul className="space-y-2 text-lg md:text-xl">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
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
