import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const References = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Referenzen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hier finden Sie bald eine Auswahl unserer erfolgreich umgesetzten Projekte. 
              Jedes Projekt ist einzigartig und auf die individuellen Bedürfnisse unserer Kunden zugeschnitten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Projekt {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Projekt Titel {item}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Beschreibung des Projekts und der umgesetzten Leistungen. 
                    Hier werden Details zum Design und der technischen Umsetzung präsentiert.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      Webdesign
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      Responsive
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ihr Projekt könnte hier stehen
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Website realisieren. 
              Wir freuen uns darauf, auch Ihr Projekt in unsere Referenzen aufnehmen zu können.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Projekt anfragen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default References;
