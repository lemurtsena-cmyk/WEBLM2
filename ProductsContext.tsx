import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  price: string;
}

const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Bureau Simple',
    category: 'Bureau',
    description: 'Bureau spacieux en mélamine avec structure métallique noire. Design épuré et fonctionnel pour votre espace de travail.',
    image: '/images/product-bureau.jpg',
    features: ['Plateau mélamine 18mm', 'Structure acier noir brillant', 'Bord melamine arrondi', 'Mélamine sortie usine'],
    price: 'À partir de 100 000 Ar',
  },
  {
    id: 2,
    name: 'Étagère Modulaire',
    category: 'Rangement',
    description: 'Étagère ouverte modulaire alliant mélamine et métal. Parfaite pour organiser et décorer votre espace.',
    image: '/images/product-etagere.jpg',
    features: ['Étagères réglables', 'Structure tubulaire', 'Large gamme de couleur', 'Montage facile'],
    price: 'sur devis',
  },
  {
    id: 3,
    name: 'Table à Manger',
    category: 'Salle à manger',
    description: 'Table à manger  avec plateau en mélamine et pieds en métal. Idéale pour vos repas en famille.',
    image: '/images/product-table.jpg',
    features: ['Plateau lavable', 'Pieds en acier renforcé', '2 à 8 places', 'Facile à nettoyer'],
    price: 'À partir de 135 000 Ar',
  },
  {
    id: 4,
    name: 'Dressing Sur Mesure',
    category: 'Chambre',
    description: 'Dressing personnalisé en mélamine avec structure métallique ou tout en mélamine. Optimisez votre espace de rangement.',
    image: '/images/product-dressing.jpg',
    features: ['Configuration personnalisée', 'Portes coulissantes', 'Éclairage LED optionnel', 'Penderies et tiroirs'],
    price: 'Sur devis',
  },
  {
    id: 5,
    name: 'Bibliothèque Design',
    category: 'Rangement',
    description: 'Bibliothèque murale moderne combinant mélamine et structure métallique géométrique.',
    image: '/images/product-bibliotheque.jpg',
    features: ['Design géométrique', 'Fixation murale sécurisée', 'Multi-compartiments', 'Finition premium'],
    price: 'Sur devis',
  },
  {
    id: 6,
    name: 'Commode Moderne',
    category: 'Chambre',
    description: 'Commode élégante en mélamine avec base métallique. Rangement pratique et design contemporain.',
    image: '/images/product-commode.jpg',
    features: ['Tiroirs spacieux', 'Base métallique stable', 'Poignées discrètes', 'Finition soignée'],
    price: 'Sur devis',
  },
  {
    id: 7,
    name: 'Meuble TV',
    category: 'Salon',
    description: 'Meuble TV bas en mélamine avec structure métallique. Design minimaliste pour votre salon.',
    image: '/images/product-meuble-tv.jpg',
    features: ['Compartiments câbles', 'Étagères réglables', 'Design bas et épuré', 'Structure renforcée'],
    price: 'Sur devis',
  },
  {
    id: 8,
    name: 'Bureau personaliser',
    category: 'Bureau',
    description: 'Bureau compact idéal pour les petits espaces. Mélamine de qualité avec structure métallique légère.',
    image: '/images/product-bureau.jpg',
    features: ['Format compact', 'Léger et robuste', 'Idéal télétravail', 'Design minimaliste'],
    price: 'À partir de 245 000 Ar',
  },
];

interface ProductsContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
  updateProduct: (id: number, data: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  resetProducts: () => void;
}

const ProductsContext = createContext<ProductsContextType | null>(null);

const STORAGE_KEY = 'lemurtsena_products';

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProductsState] = useState<Product[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultProducts;
    } catch {
      return defaultProducts;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const setProducts = (p: Product[]) => setProductsState(p);

  const updateProduct = (id: number, data: Partial<Product>) => {
    setProductsState(prev =>
      prev.map(p => (p.id === id ? { ...p, ...data } : p))
    );
  };

  const deleteProduct = (id: number) => {
    setProductsState(prev => prev.filter(p => p.id !== id));
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newId = Math.max(0, ...products.map(p => p.id)) + 1;
    setProductsState(prev => [...prev, { ...product, id: newId }]);
  };

  const resetProducts = () => {
    setProductsState(defaultProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, updateProduct, deleteProduct, addProduct, resetProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts must be used within ProductsProvider');
  return ctx;
}
