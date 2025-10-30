import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, RefreshCw, Smartphone, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Erstellung moderner Websites",
      description: "Wir erstellen Ihre neue Website von Grund auf – modern, benutzerfreundlich und technisch auf dem neuesten Stand. Mit klarem Design und intuitiver Navigation sorgen wir dafür, dass Ihre Besucher sich sofort zurechtfinden.",
      features: [
        "Individuelle Gestaltung nach Ihren Wünschen",
        "Professionelles Design mit viel Weißraum",
        "Optimiert für Suchmaschinen (SEO)",
        "Schnelle Ladezeiten"
      ]
    },
    {
      icon: RefreshCw,
      title: "Modernisierung bestehender Webseiten",
      description: "Ihre Website ist in die Jahre gekommen? Wir hauchen ihr neues Leben ein. Wir modernisieren veraltete Designs, optimieren die Benutzerführung und bringen Ihre Website technisch auf den neuesten Stand.",
      features: [
        "Analyse Ihrer bestehenden Website",
        "Modernisierung von Design und Struktur",
        "Übernahme bestehender Inhalte",
        "Technische Optimierung"
      ]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Ihre Website muss auf allen Geräten perfekt funktionieren. Wir sorgen dafür, dass Ihr Online-Auftritt auf Smartphones, Tablets und Desktop-Computern gleichermaßen überzeugt.",
      features: [
        "Optimiert für alle Bildschirmgrößen",
        "Touch-optimierte Navigation",
        "Schnelle Ladezeiten auf mobilen Geräten",
        "Konsistentes Design über alle Geräte"
      ]
    },
    {
      icon: Code,
      title: "Technische Umsetzung",
      description: "Hinter jedem guten Design steckt sauberer, professioneller Code. Wir setzen Ihre Website mit modernsten Technologien um und achten auf Performance, Sicherheit und Wartbarkeit.",
      features: [
        "Moderne Web-Technologien",
        "Sauberer, wartbarer Code",
        "Sicherheit und Datenschutz",
        "Unterstützung nach dem Launch"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von der Erstellung neuer Websites bis zur Modernisierung bestehender Online-Auftritte – 
              wir bieten Ihnen professionelle Webdesign-Lösungen aus einer Hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-card border-border">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <div className="bg-secondary rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interesse an unseren Leistungen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch. 
              Wir besprechen Ihre Anforderungen und erstellen Ihnen ein individuelles Angebot.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Jetzt unverbindlich anfragen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
