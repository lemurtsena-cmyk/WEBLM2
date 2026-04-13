import { Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import Logo from './Logo';

const WHATSAPP_URL = `https://wa.me/261327867051?text=Bonjour%20Lemur%20Tsena%2C%20je%20souhaite%20un%20devis%20pour%20un%20meuble.`;
const MAPS_URL = 'https://maps.app.goo.gl/QE2fLJJs491LqYW17';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Produits', href: '#produits' },
    { label: 'Avantages', href: '#avantages' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' },
  ];

  const productLinks = [
    'Bureaux',
    'Étagères & Bibliothèques',
    'Tables à manger',
    'Dressings & Armoires',
    'Commode',
    'Meubles TV',
    'Meubles de cuisine',
    'Sur mesure',
  ];

  return (
    <footer className="bg-dark text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Prêt à transformer votre intérieur ?
              </h3>
              <p className="text-white/80 mt-2">
                Demandez votre devis gratuit et personnalisé dès maintenant.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-warm transition-colors shadow-lg"
            >
              Devis gratuit →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo size={42} variant="white" showText={true} />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Créateur de meubles en mélamine à structure métallique. 
              Design moderne, qualité artisanale, fabrication sur mesure à Madagascar.
            </p>
            <div className="flex gap-3 flex-wrap">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/lemurtsena"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* Maps */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin size={18} className="text-red-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Nos Produits</h4>
            <ul className="space-y-2.5">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#produits"
                    className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  Antananarivo, Madagascar
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+261346426146/337326406" className="text-white/60 hover:text-accent transition-colors text-sm">
                  +261 34 64 261 46
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:lemurtsena@gmail.com" className="text-white/60 hover:text-accent transition-colors text-sm">
                  lemurtsena@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {currentYear} lemur.tsena — Tous droits réservés. Fait avec{' '}
            <Heart size={12} className="inline text-accent fill-accent" /> à Madagascar
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white/60 hover:text-white hover:bg-accent transition-all text-sm"
          >
            <ArrowUp size={14} />
            Retour en haut
          </button>
        </div>
      </div>
    </footer>
  );
}
