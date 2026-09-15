import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  className = "w-6 h-6",
  size,
}) => {
  const normalized = name.toLowerCase().trim();
  const style = size ? { width: size, height: size } : undefined;

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path
          d="M149.508 157.438L69.1414 54H54V125.965H66.8636V69.8828L139.387 163.504C142.923 161.642 146.31 159.605 149.508 157.438Z"
          fill="url(#paint0_linear_next)"
        />
        <rect
          x="115"
          y="54"
          width="12.8636"
          height="71.9653"
          fill="url(#paint1_linear_next)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_next"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_next"
            x1="121.432"
            y1="54"
            x2="121.432"
            y2="104.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // React / React Native
  if (normalized.includes("react")) {
    return (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Vite
  if (normalized.includes("vite")) {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <path
          d="M29.56 5.89L16.78 28.53a1.5 1.5 0 0 1-2.6 0L2.44 5.89c-.64-1.13.3-2.52 1.56-2.35l11.45 1.54a1.5 1.5 0 0 0 1.1 0l11.45-1.54c1.26-.17 2.2 1.22 1.56 2.35z"
          fill="url(#paint0_linear_vite)"
        />
        <path
          d="M21.2 2.6L12.5 17.6h4.3l-2.9 8.7 9.8-13.8h-4.3l3.8-9.9h-2z"
          fill="url(#paint1_linear_vite)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_vite"
            x1="2.4"
            y1="3.5"
            x2="29.6"
            y2="28.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_vite"
            x1="13.9"
            y1="2.6"
            x2="21.2"
            y2="26.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEA83" />
            <stop offset=".08" stopColor="#FFDD35" />
            <stop offset="1" stopColor="#FFA800" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Python
  if (normalized.includes("python")) {
    return (
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <path
          fill="url(#python-blue)"
          d="M63.59 5.008c-14.88 0-25.04 6.776-25.04 19.988v14.73h25.04v4.21H23.94C10.73 43.936 0 54.095 0 68.977c0 14.88 10.73 24.364 23.94 24.364h7.705V79.336c0-9.822 8.432-17.96 17.962-17.96h25.04c7.705 0 14.032-6.326 14.032-14.032V24.996C88.679 11.784 78.47 5.008 63.59 5.008zm-13.68 11.226c3.86 0 6.666 3.157 6.666 7.016 0 3.86-2.806 6.665-6.666 6.665-3.859 0-7.016-2.806-7.016-6.665 0-3.86 3.157-7.016 7.016-7.016z"
        />
        <path
          fill="url(#python-yellow)"
          d="M64.41 122.992c14.88 0 25.04-6.776 25.04-19.988V88.274H64.41v-4.21h39.65c13.21 0 23.94-10.16 23.94-25.04 0-14.883-10.73-24.366-23.94-24.366h-7.705v14.004c0 9.822-8.432 17.96-17.962 17.96H53.353c-7.705 0-14.032 6.326-14.032 14.032v22.345c0 13.212 10.209 19.988 25.089 19.988zm13.68-11.226c-3.86 0-6.666-3.157-6.666-7.016 0-3.86 2.806-6.665 6.666-6.665 3.859 0 7.016 2.806 7.016 6.665 0 3.86-3.157 7.016-7.016 7.016z"
        />
        <defs>
          <linearGradient
            id="python-blue"
            x1="18.89"
            y1="10.87"
            x2="78.89"
            y2="70.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient
            id="python-yellow"
            x1="109.11"
            y1="117.13"
            x2="49.11"
            y2="57.13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE873" />
            <stop offset="1" stopColor="#FFD43B" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Node.js & TypeScript
  if (normalized.includes("node") || normalized.includes("typescript")) {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <path
          d="M16 2L3 9.5V24.5L16 32L29 24.5V9.5L16 2Z"
          fill="#339933"
        />
        <path
          d="M16 5.5L6 11.2V22.8L16 28.5L26 22.8V11.2L16 5.5Z"
          fill="#3E863D"
        />
        <text
          x="16"
          y="20"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          JS
        </text>
      </svg>
    );
  }

  // Laravel
  if (normalized.includes("laravel")) {
    return (
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <path
          fill="#FF2D20"
          d="M44.5 12.8L28.1 3.3c-1.9-1.1-4.3-1.1-6.2 0L5.5 12.8c-1.9 1.1-3.1 3.2-3.1 5.4v19c0 2.2 1.2 4.3 3.1 5.4l16.4 9.5c1.9 1.1 4.3 1.1 6.2 0l16.4-9.5c1.9-1.1 3.1-3.2 3.1-5.4v-19c0-2.2-1.2-4.3-3.1-5.4z"
        />
        <path
          fill="#FFFFFF"
          d="M25 15l10 5.8v11.5L25 38.1l-10-5.8V20.8L25 15z"
          opacity="0.9"
        />
        <path
          fill="#FF2D20"
          d="M25 19.5l6.5 3.8v7.5L25 34.5l-6.5-3.8v-7.5L25 19.5z"
        />
      </svg>
    );
  }

  // Flutter
  if (normalized.includes("flutter")) {
    return (
      <svg
        viewBox="0 0 166 202"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <path
          d="M103.5 0L0 103.5l31.5 31.5L166 0h-62.5z"
          fill="#42A5F5"
        />
        <path
          d="M103.5 99.5L50.5 152.5l31.5 31.5 53-53 31-31.5h-62.5z"
          fill="#0D47A1"
        />
        <path
          d="M82 184l31 31.5 53-53-31-31.5-53 53z"
          fill="#00B0FF"
        />
      </svg>
    );
  }

  // Kotlin
  if (normalized.includes("kotlin")) {
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <defs>
          <linearGradient id="kotlin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C757BC" />
            <stop offset="50%" stopColor="#7F52FF" />
            <stop offset="100%" stopColor="#E08B38" />
          </linearGradient>
        </defs>
        <path
          d="M24 24H0V0h24L12 12Z"
          fill="url(#kotlin-grad)"
        />
      </svg>
    );
  }

  // WordPress & Elementor
  if (normalized.includes("wordpress") || normalized.includes("elementor")) {
    return (
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <circle cx="64" cy="64" r="64" fill="#21759B" />
        <path
          fill="#FFFFFF"
          d="M12.08 64c0 21.84 13.56 40.54 32.74 48.06L18.42 41.04C14.36 47.98 12.08 55.76 12.08 64zm91.56-4.64c0-7.38-2.66-12.5-4.94-16.5-3.04-4.94-5.9-9.12-5.9-14.02 0-5.5 4.18-10.64 10.1-10.64.44 0 .86.06 1.3.1-10.4-9.52-24.3-15.3-39.6-15.3-20.26 0-38.08 10.12-48.82 25.68 1.4.04 2.7.08 3.8.08 6.08 0 15.54-.76 15.54-.76 3.04-.18 3.42 4.2.38 4.56 0 0-3.08.38-6.5.56l20.7 61.64 12.44-37.32-8.86-24.32c-3.04-.18-5.94-.56-5.94-.56-3.04-.18-2.66-4.74.38-4.56 0 0 9.68.76 15.34.76 6.08 0 15.54-.76 15.54-.76 3.04-.18 3.42 4.2.38 4.56 0 0-3.08.38-6.5.56l20.52 61.04 5.7-19.12c2.44-7.8 4.3-13.4 4.3-18.16zm-38.4 12.38l-17.1-49.62c-3.34.18-6.46.36-9.28.54l26.38 78.44 19.3-56.12c-.22-.04-.44-.06-.66-.06-11.4 0-17.62 17.62-18.64 26.82zm-4.74 15.72l-14.8-43.08c-1.8.1-3.62.2-5.52.32L54.4 86.8c3.22 1.04 6.64 1.62 10.18 1.62 3.12 0 6.14-.46 9-1.32l-13.08-19.64z"
        />
      </svg>
    );
  }

  // Figma
  if (normalized.includes("figma")) {
    return (
      <svg
        viewBox="0 0 38 57"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
      </svg>
    );
  }

  // Canva
  if (normalized.includes("canva")) {
    return (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <circle cx="16" cy="16" r="16" fill="url(#canva-grad)" />
        <path
          d="M17.8 8.8c-4.4 0-7.8 3.5-7.8 8.3 0 4.9 3.5 8.1 7.9 8.1 2.8 0 5-1.1 6.5-2.7l-1.6-1.5c-1.2 1.3-2.9 2.1-4.9 2.1-3.1 0-5.6-2.2-5.6-6 0-3.6 2.3-6.1 5.5-6.1 1.9 0 3.5.8 4.7 2.1l1.7-1.4c-1.7-1.8-3.9-2.9-6.4-2.9z"
          fill="#FFFFFF"
        />
        <defs>
          <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="100%" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // cPanel
  if (normalized.includes("cpanel")) {
    return (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <rect width="32" height="32" rx="6" fill="#FF6C2C" />
        <path
          d="M10.8 19.5c-2.4 0-4.1-1.8-4.1-4.3 0-2.5 1.7-4.3 4.1-4.3 1.6 0 2.8.8 3.5 1.9l-1.9 1.2c-.4-.7-1-1.1-1.6-1.1-1.1 0-1.8.9-1.8 2.3s.7 2.3 1.8 2.3c.7 0 1.3-.4 1.7-1.1l1.9 1.1c-.8 1.2-2 2-3.6 2zm8.4.5V8.5h4.1c2.6 0 4.2 1.5 4.2 3.8 0 2.2-1.6 3.7-4.2 3.7H21v4H19.2zm1.8-6.1h2.2c1.3 0 2.1-.7 2.1-1.7s-.8-1.7-2.1-1.7H21v3.4z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // AWS / Cloudflare
  if (normalized.includes("aws") || normalized.includes("cloudflare")) {
    return (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      >
        <rect width="32" height="32" rx="6" fill="#232F3E" />
        <path
          d="M19.2 12.4c-.1 0-.3.1-.3.2l-.4 1.2c-.1.2 0 .4.2.4.9.4 1.9.9 1.9 2 0 1.2-1.1 1.9-2.3 1.9-1.4 0-2.3-.9-2.4-2.1 0-.2-.2-.3-.4-.3h-1.2c-.2 0-.4.2-.4.4.1 2.3 1.9 4 4.4 4 2.4 0 4.4-1.5 4.4-3.9.1-2.4-1.9-3.3-3.5-3.9zm-9.7 7.2h1.4c.2 0 .4-.2.4-.4l2.1-6.9c.1-.2 0-.4-.2-.4h-1.4c-.2 0-.4.1-.4.3l-1.2 4.4-1.2-4.4c-.1-.2-.2-.3-.4-.3H7.2c-.2 0-.4.2-.3.4l2.1 6.9c.1.2.3.3.5.3zm15.4-.4l-1.5-6.9c0-.2-.2-.3-.4-.3h-1.3c-.2 0-.4.2-.4.4l-1.1 4.7-1.1-4.7c0-.2-.2-.4-.4-.4h-1.3c-.2 0-.4.2-.4.4l-1.5 6.9c0 .2.1.4.3.4h1.3c.2 0 .3-.1.4-.3l.9-4.5 1.1 4.5c0 .2.2.3.4.3h.8c.2 0 .3-.1.4-.3l1.1-4.5.9 4.5c0 .2.2.3.4.3h1.3c.2 0 .4-.2.4-.4z"
          fill="#FF9900"
        />
      </svg>
    );
  }

  // Generic Tech Fallback
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#18CB96"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
};
