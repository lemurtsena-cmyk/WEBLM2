import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ando Rakoto',
    role: 'Propriétaire à Antananarivo',
    content: 'J\'ai commandé un bureau et une bibliothèque sur mesure. La qualité est exceptionnelle et la structure métallique donne un look vraiment moderne à mon salon. Je recommande vivement !',
    rating: 5,
    avatar: 'AR',
  },
  {
    name: 'Nirina Rasolofo',
    role: 'Entrepreneur',
    content: 'LEMUR TSENA a aménagé tout mon espace de bureau. Le résultat est au-delà de mes attentes. Les meubles sont solides, élégants et le service client est irréprochable.',
    rating: 5,
    avatar: 'NR',
  },
  {
    name: 'Hanta Rabe',
    role: 'Mère de famille',
    content: 'Le dressing sur mesure est parfait ! Il s\'adapte exactement à notre chambre. La combinaison mélamine et métal est très pratique et facile à entretenir.',
    rating: 5,
    avatar: 'HR',
  },
  {
    name: 'Tiana Andria',
    role: 'Architecte d\'intérieur',
    content: 'En tant que professionnel, j\'apprécie la précision et la qualité de fabrication de LEMUR TSENA. Je les recommande régulièrement à mes clients pour leurs projets d\'aménagement.',
    rating: 5,
    avatar: 'TA',
  },
  {
    name: 'Fidy Rajaonarivo',
    role: 'Directeur d\'entreprise',
    content: 'Nous avons équipé nos bureaux avec des meubles LEMUR TSENA. Excellent rapport qualité-prix et livraison dans les délais. Le rendu professionnel est parfait.',
    rating: 5,
    avatar: 'FR',
  },
  {
    name: 'Voahirana R.',
    role: 'Propriétaire à Ivato',
    content: 'La table à manger que j\'ai commandée est magnifique. Les finitions sont soignées et la structure métallique apporte une touche industrielle très tendance.',
    rating: 5,
    avatar: 'VR',
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Témoignages</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary mt-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            La satisfaction de nos clients est notre plus grande fierté.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-accent/10 absolute top-6 right-6 group-hover:text-accent/20 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-text leading-relaxed text-sm sm:text-base mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                  <div className="text-text-light text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook CTA */}
        <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-sm max-w-2xl mx-auto">
          <p className="text-text mb-4">
            Retrouvez plus d'avis et nos réalisations sur notre page Facebook
          </p>
          <a
            href="https://web.facebook.com/lemurtsena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-xl font-semibold hover:bg-[#166FE5] transition-colors hover:shadow-lg"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Suivez-nous sur Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
