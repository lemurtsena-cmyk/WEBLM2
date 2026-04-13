import { useState } from 'react';
import { Eye, ArrowRight, Check } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';

const WHATSAPP_URL = `https://wa.me/261327867051?text=Bonjour%20Lemur%20Tsena%2C%20je%20souhaite%20un%20devis%20pour%20un%20meuble.`;
const categories = ['Tous', 'Bureau', 'Rangement', 'Salle à manger', 'Chambre', 'Salon'];

export default function Products() {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = activeCategory === 'Tous'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="produits" className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Notre Collection</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary mt-4">
            Nos Meubles
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Découvrez notre gamme de meubles en mélamine à structure métallique, 
            conçus pour allier esthétique moderne et durabilité exceptionnelle.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white text-text hover:bg-accent hover:text-white hover:shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary rounded-full">
                  {product.category}
                </span>

                {/* Quick view button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent-dark"
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-primary group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-text-light text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-accent font-bold text-sm">{product.price}</span>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1 text-primary text-sm font-medium hover:text-accent transition-colors"
                  >
                    Détails <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-text-light mb-4">Vous ne trouvez pas ce que vous cherchez ?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Commander sur mesure <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full aspect-[16/9] object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
              >
                ✕
              </button>
              <span className="absolute bottom-4 left-4 px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full">
                {selectedProduct.category}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
                {selectedProduct.name}
              </h3>
              <p className="text-text-light mt-3 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-primary mb-3">Caractéristiques :</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-text">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-4 bg-warm rounded-xl">
                <span className="text-accent font-bold text-xl">{selectedProduct.price}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 text-center px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent-dark transition-colors"
                >
                  Demander un devis
                </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
