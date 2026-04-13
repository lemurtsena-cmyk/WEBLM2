import { useState } from 'react';
import { useProducts, Product } from '../context/ProductsContext';
import {
  Plus, Pencil, Trash2, Save, X, RotateCcw,
  ImageIcon, Tag, AlignLeft, List, ShieldCheck, LogOut, Eye, EyeOff,
  ChevronDown, ChevronUp, Package
} from 'lucide-react';
import Logo from './Logo';

const ADMIN_PASSWORD = 'lemurtsena2026';
const CATEGORIES = ['Bureau', 'Rangement', 'Salle à manger', 'Chambre', 'Salon'];

const emptyProduct: Omit<Product, 'id'> = {
  name: '',
  category: 'Bureau',
  description: '',
  image: '',
  features: ['', '', '', ''],
  price: '',
};

interface AdminProps {
  onExit?: () => void;
}

export default function Admin({ onExit }: AdminProps) {
  const { products, updateProduct, deleteProduct, addProduct, resetProducts } = useProducts();

  // Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // UI State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<Product>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>(emptyProduct);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');
  const [filterCat, setFilterCat] = useState('Tous');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Mot de passe incorrect. Réessayez.');
    }
  };

  const showSaved = (msg = 'Modifications enregistrées !') => {
    setSavedMsg(msg);
    setTimeout(() => setSavedMsg(''), 3000);
  };

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setEditData({ ...product, features: [...product.features] });
    setIsAdding(false);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  const saveEdit = () => {
    if (editingId !== null) {
      updateProduct(editingId, editData);
      setEditingId(null);
      setEditData({});
      showSaved('Produit modifié avec succès !');
    }
  };

  const handleEditFeature = (idx: number, val: string) => {
    const features = [...((editData.features as string[]) || [])];
    features[idx] = val;
    setEditData(prev => ({ ...prev, features }));
  };

  const handleNewFeature = (idx: number, val: string) => {
    const features = [...newProduct.features];
    features[idx] = val;
    setNewProduct(prev => ({ ...prev, features }));
  };

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) return;
    addProduct({ ...newProduct, features: newProduct.features.filter(f => f.trim()) });
    setNewProduct(emptyProduct);
    setIsAdding(false);
    showSaved('Nouveau produit ajouté !');
  };

  const handleDelete = (id: number) => {
    deleteProduct(id);
    setConfirmDelete(null);
    showSaved('Produit supprimé.');
  };

  const handleReset = () => {
    resetProducts();
    setConfirmReset(false);
    showSaved('Catalogue réinitialisé !');
  };

  const filtered = filterCat === 'Tous' ? products : products.filter(p => p.category === filterCat);

  // ─── LOGIN SCREEN ────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-accent flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-8 py-10 text-center">
            <div className="flex justify-center mb-4">
              <Logo size={52} variant="white" showText={true} />
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <ShieldCheck size={18} className="text-accent" />
              <span className="text-white/80 text-sm font-medium uppercase tracking-widest">Espace Administration</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8">
            <h2 className="text-2xl font-display font-bold text-primary mb-2">Connexion</h2>
            <p className="text-text-light text-sm mb-6">Entrez votre mot de passe pour accéder au panneau d'administration.</p>

            <label className="block text-sm font-medium text-primary mb-2">Mot de passe</label>
            <div className="relative mb-2">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {authError && (
              <p className="text-red-500 text-xs mb-4 flex items-center gap-1">
                <X size={12} /> {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-4 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/30"
            >
              Accéder au panneau
            </button>

            <p className="text-center mt-4 text-xs text-text-light">
              <a href="#accueil" className="text-accent hover:underline">← Retour au site</a>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // ─── ADMIN DASHBOARD ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-primary text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={36} variant="white" showText={false} />
            <div>
              <h1 className="font-display font-bold text-lg leading-tight">Panneau d'administration</h1>
              <p className="text-white/60 text-xs">Lemur · Tsena — Gestion du catalogue</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-white/20 transition-colors"
            >
              <Eye size={14} /> Voir le site
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-1.5 px-4 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-red-500/80 transition-colors"
            >
              <LogOut size={14} /> Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Saved notification */}
      {savedMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-fade-up">
          <Save size={16} /> {savedMsg}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Produits total', value: products.length, color: 'bg-primary' },
            { label: 'Bureaux', value: products.filter(p => p.category === 'Bureau').length, color: 'bg-accent' },
            { label: 'Rangements', value: products.filter(p => p.category === 'Rangement').length, color: 'bg-blue-500' },
            { label: 'Autres', value: products.filter(p => !['Bureau','Rangement'].includes(p.category)).length, color: 'bg-indigo-500' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                <Package size={16} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-text-light mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {['Tous', ...CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filterCat === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { setIsAdding(true); setEditingId(null); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-accent-dark transition-all shadow-sm hover:shadow-accent/30"
            >
              <Plus size={16} /> Ajouter un produit
            </button>
            <button
              onClick={() => setConfirmReset(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm hover:bg-red-50 hover:text-red-500 transition-all"
              title="Réinitialiser le catalogue"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Add Product Form */}
        {isAdding && (
          <div className="bg-white rounded-2xl shadow-sm border-2 border-accent/30 p-6 mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-xl text-primary flex items-center gap-2">
                <Plus size={20} className="text-accent" /> Nouveau produit
              </h3>
              <button onClick={() => setIsAdding(false)} className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                <X size={20} />
              </button>
            </div>
            <ProductForm
              data={newProduct}
              onChange={setNewProduct}
              onFeatureChange={handleNewFeature}
              onSave={handleAdd}
              onCancel={() => setIsAdding(false)}
              isNew
            />
          </div>
        )}

        {/* Products List */}
        <div className="space-y-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${
                editingId === product.id ? 'border-accent/50 ring-2 ring-accent/20' : 'border-gray-100 hover:border-accent/30'
              }`}
            >
              {/* Product Header */}
              <div className="flex items-center gap-4 p-4">
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect fill="%23f3f4f6" width="64" height="64"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="24">🪑</text></svg>';
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-display font-bold text-primary">{product.name}</h4>
                    <span className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">{product.category}</span>
                  </div>
                  <p className="text-text-light text-sm truncate mt-0.5">{product.description}</p>
                  <p className="text-accent font-bold text-sm mt-1">{product.price}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                    className="p-2 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
                    title="Voir les détails"
                  >
                    {expandedId === product.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <button
                    onClick={() => editingId === product.id ? cancelEdit() : startEdit(product)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      editingId === product.id
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                    }`}
                  >
                    {editingId === product.id ? <X size={15} /> : <Pencil size={15} />}
                    <span className="hidden sm:inline">{editingId === product.id ? 'Annuler' : 'Modifier'}</span>
                  </button>
                  <button
                    onClick={() => setConfirmDelete(product.id)}
                    className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-400 rounded-lg text-sm font-medium hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={15} />
                    <span className="hidden sm:inline">Supprimer</span>
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === product.id && editingId !== product.id && (
                <div className="px-4 pb-4 border-t border-gray-50 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-2">URL de l'image</p>
                      <p className="text-sm text-text-light break-all bg-gray-50 rounded-lg p-2">{product.image}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-2">Caractéristiques</p>
                      <ul className="space-y-1">
                        {product.features.map((f, i) => (
                          <li key={i} className="text-sm text-text flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Edit Form */}
              {editingId === product.id && (
                <div className="px-4 pb-4 border-t border-accent/10 pt-4">
                  <ProductForm
                    data={editData as Omit<Product, 'id'>}
                    onChange={(d) => setEditData(d)}
                    onFeatureChange={handleEditFeature}
                    onSave={saveEdit}
                    onCancel={cancelEdit}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text-light">
            <Package size={48} className="mx-auto mb-4 opacity-30" />
            <p>Aucun produit dans cette catégorie.</p>
          </div>
        )}
      </div>

      {/* Confirm Delete Modal */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={24} className="text-red-500" />
            </div>
            <h3 className="font-display font-bold text-xl text-center text-primary mb-2">Confirmer la suppression</h3>
            <p className="text-text-light text-sm text-center mb-6">
              Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est irréversible.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Reset Modal */}
      {confirmReset && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw size={24} className="text-orange-500" />
            </div>
            <h3 className="font-display font-bold text-xl text-center text-primary mb-2">Réinitialiser le catalogue</h3>
            <p className="text-text-light text-sm text-center mb-6">
              Toutes vos modifications seront perdues et le catalogue sera restauré à son état d'origine.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ProductForm Sub-component ────────────────────────────────────────────────
interface ProductFormProps {
  data: Omit<Product, 'id'>;
  onChange: (data: Omit<Product, 'id'>) => void;
  onFeatureChange: (idx: number, val: string) => void;
  onSave: () => void;
  onCancel: () => void;
  isNew?: boolean;
}

function ProductForm({ data, onChange, onFeatureChange, onSave, onCancel, isNew }: ProductFormProps) {
  const features = data.features as string[];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-2">
            <Tag size={14} className="text-accent" /> Nom du produit *
          </label>
          <input
            type="text"
            value={data.name}
            onChange={e => onChange({ ...data, name: e.target.value })}
            placeholder="Ex: Bureau Exécutif"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
          />
        </div>

        {/* Category */}
        <div>
          <label className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-2">
            <List size={14} className="text-accent" /> Catégorie *
          </label>
          <select
            value={data.category}
            onChange={e => onChange({ ...data, category: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-white"
          >
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-2">
          <AlignLeft size={14} className="text-accent" /> Description
        </label>
        <textarea
          value={data.description}
          onChange={e => onChange({ ...data, description: e.target.value })}
          placeholder="Décrivez le produit..."
          rows={2}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Image URL */}
        <div>
          <label className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-2">
            <ImageIcon size={14} className="text-accent" /> URL de l'image *
          </label>
          <input
            type="text"
            value={data.image}
            onChange={e => onChange({ ...data, image: e.target.value })}
            placeholder="/images/mon-meuble.jpg ou https://..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
          />
          {data.image && (
            <div className="mt-2 w-full h-24 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={data.image}
                alt="preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-2">
            <span className="text-accent font-bold text-xs">Ar</span> Prix *
          </label>
          <input
            type="text"
            value={data.price}
            onChange={e => onChange({ ...data, price: e.target.value })}
            placeholder="Ex: À partir de 450 000 Ar"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
          />
          <p className="text-xs text-text-light mt-1.5">Ex: "À partir de 450 000 Ar" ou "Sur devis"</p>
        </div>
      </div>

      {/* Features */}
      <div>
        <label className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-2">
          <List size={14} className="text-accent" /> Caractéristiques (max 4)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[0, 1, 2, 3].map(idx => (
            <input
              key={idx}
              type="text"
              value={features[idx] ?? ''}
              onChange={e => onFeatureChange(idx, e.target.value)}
              placeholder={`Caractéristique ${idx + 1}`}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onSave}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-accent-dark transition-all shadow-sm hover:shadow-accent/30"
        >
          <Save size={16} /> {isNew ? 'Ajouter le produit' : 'Enregistrer les modifications'}
        </button>
        <button
          onClick={onCancel}
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-all"
        >
          <X size={16} /> Annuler
        </button>
      </div>
    </div>
  );
}
