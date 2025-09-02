import { Code, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="#home" className="flex items-center gap-2 text-lg font-bold font-headline">
            <Code className="text-primary" />
            <span>naaz.dev</span>
          </Link>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/hidden-devloper" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
              <Github />
            </a>
          </div>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} naaz.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
