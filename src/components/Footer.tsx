import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Weblift Ellinger</h3>
            <p className="text-muted-foreground text-sm">
              Modernes Webdesign aus Weißenburg in Bayern. Wir bringen Ihre Website auf das nächste Level.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-2">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-2">
                Über uns
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-2">
                Leistungen
              </Link>
              <Link to="/references" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-2">
                Referenzen
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-2">
                Kontakt
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Kontakt</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Rennweg 8<br />
                  91781 Weißenburg in Bayern<br />
                  Deutschland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:weblift@web.de" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  weblift@web.de
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Weblift Ellinger. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
