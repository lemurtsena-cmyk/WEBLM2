interface LogoProps {
  size?: number;
  variant?: 'dark' | 'light' | 'white';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 48, variant = 'dark', showText = true, className = '' }: LogoProps) {
  const cartColor = variant === 'white' ? '#ffffff' : variant === 'light' ? '#ffffff' : '#2D3659';
  const accentColor = '#5BBAD5';
  const textColor = variant === 'white' ? '#ffffff' : variant === 'light' ? '#ffffff' : '#2D3659';
  const scriptColor = variant === 'white' ? '#ffffff' : variant === 'light' ? '#ffffff' : '#5BBAD5';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Cart Icon SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Cart body - rounded rectangle */}
        <rect
          x="12"
          y="20"
          width="55"
          height="50"
          rx="12"
          ry="12"
          stroke={cartColor}
          strokeWidth="5"
          fill="none"
        />
        {/* Cart handle - curved line from top right */}
        <path
          d="M 62 22 Q 78 10, 82 28 Q 85 42, 78 38"
          stroke={cartColor}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Wheels */}
        <circle cx="28" cy="76" r="6" stroke={cartColor} strokeWidth="4" fill="none" />
        <circle cx="55" cy="76" r="6" stroke={cartColor} strokeWidth="4" fill="none" />
        {/* "l.t" script text inside the cart */}
        <text
          x="40"
          y="52"
          textAnchor="middle"
          fontFamily="'Dancing Script', cursive"
          fontSize="26"
          fontWeight="600"
          fill={accentColor}
        >
          l.t
        </text>
      </svg>

      {/* Brand text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-script text-xl sm:text-2xl tracking-wide"
            style={{ color: textColor }}
          >
            lemur<span style={{ color: scriptColor }}> . </span>tsena
          </span>
        </div>
      )}
    </div>
  );
}
