import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, Smartphone, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Wir bringen Ihre Website auf das nächste Level
              </h1>
              <p className="text-xl text-muted-foreground">
                Modernes Webdesign aus Weißenburg in Bayern. Verwandeln Sie Ihre veraltete Website in einen professionellen Online-Auftritt, der begeistert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
                  <Link to="/contact">
                    Jetzt unverbindlich anfragen
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all hover:scale-105 hover:bg-primary/10">
                  <Link to="/services">Unsere Leistungen</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src={heroImage} 
                alt="Modernes Webdesign Workspace" 
                className="rounded-lg shadow-2xl w-full h-auto hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Warum Weblift Ellinger?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wir bieten Ihnen professionelles Webdesign mit klarem Fokus auf Qualität und Benutzerfreundlichkeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 animate-fade-in group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:animate-glow">
                <Monitor className="text-primary transition-transform group-hover:scale-110" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Modernes Design</h3>
              <p className="text-muted-foreground">
                Zeitgemäße Gestaltung mit klaren Linien und professionellem Look – ohne überflüssige Effekte.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 animate-fade-in [animation-delay:100ms] group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:animate-glow">
                <Smartphone className="text-primary transition-transform group-hover:scale-110" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Responsive Design</h3>
              <p className="text-muted-foreground">
                Ihre Website funktioniert perfekt auf allen Geräten – vom Smartphone bis zum Desktop.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 animate-fade-in [animation-delay:200ms] group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:animate-glow">
                <Zap className="text-primary transition-transform group-hover:scale-110" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Schnell & Effizient</h3>
              <p className="text-muted-foreground">
                Optimierte Ladezeiten und technisch einwandfreie Umsetzung für beste Performance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-12 text-center animate-scale-in hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="text-4xl font-bold text-primary-foreground mb-4 relative z-10">
              Bereit für eine moderne Website?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto relative z-10">
              Lassen Sie uns gemeinsam Ihre Website modernisieren. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            <Button asChild size="lg" variant="secondary" className="relative z-10 transition-all hover:scale-110 hover:shadow-xl">
              <Link to="/contact">Ich möchte meine Website modernisieren</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
