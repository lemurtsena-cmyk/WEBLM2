import { Shield, Palette, Wrench, Truck, Award, Leaf } from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: 'Robustesse Exceptionnelle',
    description: 'La combinaison du mélamine et de la structure métallique garantit une résistance supérieure aux chocs, rayures et à l\'usure quotidienne.',
    color: 'from-[#2D3659] to-[#3A4570]',
  },
  {
    icon: Palette,
    title: 'Design Personnalisable',
    description: 'Large choix de couleurs, textures et finitions mélamine. Chaque meuble est conçu selon vos goûts et l\'agencement de votre intérieur.',
    color: 'from-[#5BBAD5] to-[#4A9BB5]',
  },
  {
    icon: Wrench,
    title: 'Fabrication Sur Mesure',
    description: 'Chaque meuble est fabriqué sur commande selon vos dimensions exactes. Nous nous adaptons à tous les espaces et configurations.',
    color: 'from-[#3A4570] to-[#2D3659]',
  },
  {
    icon: Truck,
    title: 'Livraison & Installation',
    description: 'Service de livraison et d\'installation professionnel à Antananarivo et environs. Montage rapide et soigné garanti.',
    color: 'from-[#4A9BB5] to-[#5BBAD5]',
  },
  {
    icon: Award,
    title: 'Garantie 5 Ans',
    description: 'Tous nos meubles bénéficient d\'une garantie de 5 ans. Votre satisfaction et la durabilité de nos produits sont notre priorité.',
    color: 'from-[#2D3659] to-[#5BBAD5]',
  },
  {
    icon: Leaf,
    title: 'Matériaux de Qualité',
    description: 'Nous utilisons des panneaux mélamine de haute qualité et des structures en acier traité anti-corrosion pour une longévité maximale.',
    color: 'from-[#5BBAD5] to-[#2D3659]',
  },
];

export default function Advantages() {
  return (
    <section id="avantages" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Pourquoi Nous Choisir</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary mt-4">
            Nos Avantages
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            L'alliance parfaite entre le mélamine et la structure métallique pour des meubles 
            qui traversent le temps avec élégance.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group relative p-6 sm:p-8 rounded-2xl bg-warm hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-accent/20"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <advantage.icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                {advantage.title}
              </h3>
              <p className="text-text-light leading-relaxed text-sm sm:text-base">
                {advantage.description}
              </p>

              {/* Decorative number */}
              <span className="absolute top-4 right-4 text-5xl font-display font-bold text-primary/[0.03] group-hover:text-accent/[0.08] transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Notre Processus
            </h3>
            <p className="text-text-light mt-3">De votre idée à la livraison, nous vous accompagnons à chaque étape</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Échange sur vos besoins, dimensions et préférences de design' },
              { step: '02', title: 'Conception', desc: 'Création d\'un plan 3D personnalisé pour validation' },
              { step: '03', title: 'Fabrication', desc: 'Production artisanale avec des matériaux de qualité premium' },
              { step: '04', title: 'Livraison', desc: 'Livraison et installation soignée à votre domicile' },
            ].map((item) => (
              <div key={item.step} className="relative text-center p-6 group">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white font-display font-bold text-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  {item.step}
                </div>
                <h4 className="font-display font-bold text-lg text-primary mb-2">{item.title}</h4>
                <p className="text-text-light text-sm">{item.desc}</p>
                {/* Connector line */}
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
