import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Über uns
          </h1>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Weblift Ellinger ist ein modernes Webdesign-Unternehmen aus Weißenburg in Bayern. 
              Gegründet von Yannick Ellinger, helfen wir kleinen und mittelständischen Betrieben dabei, 
              ihre Online-Präsenz zu modernisieren und zu optimieren.
            </p>

            <p>
              Unser Fokus liegt auf klarer, funktionaler Gestaltung und intuitiver Bedienung. 
              Wir glauben, dass eine gute Website nicht überladen sein muss – im Gegenteil. 
              Mit viel Weißraum, klaren Linien und durchdachter Struktur schaffen wir Webauftritte, 
              die Ihre Besucher begeistern.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
              Yannick Ellinger – Gründer & Webdesigner
            </h2>

            <p>
              Als Gründer von Weblift Ellinger bringe ich eine Leidenschaft für modernes Design 
              und technische Präzision mit. Mein Ziel ist es, Unternehmen dabei zu unterstützen, 
              ihre Website in ein wirkungsvolles Marketing-Instrument zu verwandeln.
            </p>

            <p>
              Jede Website wird individuell gestaltet und technisch auf dem neuesten Stand umgesetzt. 
              Dabei lege ich besonderen Wert auf eine enge Zusammenarbeit mit meinen Kunden – 
              denn nur so entsteht ein Online-Auftritt, der wirklich zu Ihrem Unternehmen passt.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
              Unsere Philosophie
            </h2>

            <ul className="space-y-3 list-disc list-inside">
              <li>Klares, modernes Design ohne unnötige Effekte</li>
              <li>Technische Exzellenz und optimale Performance</li>
              <li>Responsive Design für alle Geräte</li>
              <li>Enge Zusammenarbeit mit unseren Kunden</li>
              <li>Transparenz und Verlässlichkeit</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xl text-foreground font-medium mb-6">
                Möchten Sie mehr über unsere Arbeitsweise erfahren?
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
