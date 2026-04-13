import { ArrowDown, ChevronRight, Star } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Showroom LEMUR TSENA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      </div>

      {/* Decorative elements - now cyan blue */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
              <Star size={14} className="text-accent fill-accent" />
              <span>Artisanat malgache d'excellence</span>
            </span>
          </div>

          {/* Title with logo style */}
          <div className="animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <span className="block text-white/70 text-lg sm:text-xl font-light mb-4 tracking-wide uppercase">
              Bienvenue chez
            </span>
            {/* Large logo display */}
            <div className="mb-2">
              <Logo size={80} variant="white" showText={false} className="mb-4" />
            </div>
            <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              lemur<span className="text-accent"> . </span>tsena
            </h2>
            <div className="mt-4 h-0.5 w-48 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 opacity-0 mt-8 text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ animationFillMode: 'forwards' }}>
            Créateur de <strong className="text-accent">meubles en mélamine à structure métallique</strong> — 
            alliant élégance moderne et robustesse pour sublimer votre intérieur.
          </p>

          {/* Features */}
          <div className="animate-fade-in-up delay-300 opacity-0 mt-8 flex flex-wrap gap-4 sm:gap-6" style={{ animationFillMode: 'forwards' }}>
            {[
              'Sur mesure',
              'Structure métallique',
              'Garantie qualité',
              'Livraison rapide'
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-white/70 text-sm">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-400 opacity-0 mt-10 flex flex-wrap gap-4" style={{ animationFillMode: 'forwards' }}>
            <a
              href="#produits"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-xl font-semibold text-lg hover:bg-accent-dark transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Découvrir nos meubles
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Demander un devis
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 opacity-0 mt-16 flex flex-wrap gap-8 sm:gap-12" style={{ animationFillMode: 'forwards' }}>
            {[
              { number: '500+', label: 'Meubles livrés' },
              { number: '98%', label: 'Clients satisfaits' },
              { number: '5 ans', label: 'Garantie' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.number}</div>
                <div className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#produits" className="text-white/50 hover:text-accent transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
