import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">About Me</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 shadow-2xl shadow-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full inline-block">
                  <User className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-headline font-semibold">Who I Am</h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-left">
                  <div>
                      <p className="text-primary font-semibold">Name:</p>
                      <p>Tashmiya naaz</p>
                  </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-left pt-4 border-t border-border">
                Assalamualaikum I’m Tashmiya naaz, a dedicated Software Engineering student with a passion for technology and innovation. I love creating digital solutions that are both creative and user-friendly. I’m always eager to learn new skills and grow in the world of software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
