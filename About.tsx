import { Heart, Users, Target } from 'lucide-react';
import Logo from './Logo';

export default function About() {
  return (
    <section id="apropos" className="py-20 sm:py-28 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-workshop.jpg"
                alt="Atelier LEMUR TSENA"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-accent text-white p-5 sm:p-6 rounded-2xl shadow-xl animate-float">
              <div className="text-3xl sm:text-4xl font-display font-bold">5+</div>
              <div className="text-sm sm:text-base opacity-90">Années<br />d'expérience</div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">À Propos</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 leading-tight">
              L'Art du Meuble
              <span className="block gradient-text">Moderne à Madagascar</span>
            </h2>
            <p className="text-white/70 mt-6 leading-relaxed text-base sm:text-lg">
              <strong className="text-white font-script text-2xl">lemur.tsena</strong> est né de la passion du mobilier moderne et de la volonté 
              d'offrir aux Malgaches des meubles alliant <span className="text-accent">design contemporain</span> et
              <span className="text-accent"> robustesse inégalée</span>.
            </p>
            <p className="text-white/70 mt-4 leading-relaxed text-base sm:text-lg">
              Spécialisés dans les meubles en mélamine à structure métallique, nous combinons 
              l'élégance du bois mélaminé avec la solidité de l'acier pour créer des pièces uniques 
              qui subliment votre intérieur.
            </p>

            {/* Logo display */}
            <div className="mt-8 flex items-center gap-4">
              <Logo size={50} variant="white" showText={false} />
              <div className="h-12 w-px bg-white/20" />
              <p className="text-white/50 text-sm italic">Votre partenaire en mobilier<br />depuis 2020</p>
            </div>

            {/* Values */}
            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Heart,
                  title: 'Passion & Savoir-faire',
                  desc: 'Chaque meuble est fabriqué avec soin et attention par nos artisans qualifiés.'
                },
                {
                  icon: Users,
                  title: 'Écoute & Personnalisation',
                  desc: 'Nous concevons chaque pièce selon vos besoins spécifiques et votre espace.'
                },
                {
                  icon: Target,
                  title: 'Qualité & Durabilité',
                  desc: 'Des matériaux premium et une fabrication rigoureuse pour des meubles qui durent.'
                },
              ].map((value) => (
                <div key={value.title} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <value.icon size={20} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{value.title}</h4>
                    <p className="text-white/60 text-sm mt-1">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
