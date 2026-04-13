interface LogoProps {
  size?: number;
  variant?: 'dark' | 'light' | 'white';
  showText?: boolean; // gardé pour compatibilité, mais non utilisé
  className?: string;
}

export default function Logo({ size = 48, variant = 'dark', className = '' }: LogoProps) {
  // Pour les variantes 'light' et 'white', on inverse les couleurs de l'image
  const isLight = variant === 'white' || variant === 'light';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo-lemur-tsena.png"
        alt="lemur . tsena"
        width={size * 3}
        height={size * 2.2}
        className={`object-contain flex-shrink-0 ${isLight ? 'invert brightness-0' : ''}`}
        style={{ 
          height: size * 1.8, // contrôle la taille avec la prop 'size'
          width: 'auto' 
        }}
      />
    </div>
  );
}
