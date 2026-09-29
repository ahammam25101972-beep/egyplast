import React from 'react';

interface HomePlastLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withGlow?: boolean;
}

export const HomePlastLogo: React.FC<HomePlastLogoProps> = ({
  className = '',
  size = 'md',
  withGlow = false,
}) => {
  const sizeMap = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group ${className}`}
      dir="ltr"
    >
      {/* Subtle Ambient Neon Glow Background */}
      {withGlow && (
        <div className="absolute inset-0 -m-3 bg-gradient-to-r from-red-600/25 via-cyan-500/20 to-red-600/25 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      <svg
        viewBox="0 0 420 185"
        className={`${sizeMap[size]} w-auto filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="HomePlast هوم بلاست"
      >
        <defs>
          {/* Red 3D Gradient */}
          <linearGradient id="hpRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="35%" stopColor="#ef2323" />
            <stop offset="85%" stopColor="#b90d0d" />
            <stop offset="100%" stopColor="#7a0505" />
          </linearGradient>

          {/* Red Specular Highlight */}
          <linearGradient id="hpRedShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
          </linearGradient>

          {/* Black/Gunmetal 3D Gradient */}
          <linearGradient id="hpBlackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a4d53" />
            <stop offset="30%" stopColor="#25272a" />
            <stop offset="70%" stopColor="#141517" />
            <stop offset="100%" stopColor="#0a0a0b" />
          </linearGradient>

          {/* Roof Gradient */}
          <linearGradient id="hpRoofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3d3f44" />
            <stop offset="50%" stopColor="#191a1d" />
            <stop offset="100%" stopColor="#080809" />
          </linearGradient>

          {/* Metallic Bar Gradient */}
          <linearGradient id="hpBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#121316" />
            <stop offset="25%" stopColor="#45484f" />
            <stop offset="50%" stopColor="#1b1c20" />
            <stop offset="75%" stopColor="#45484f" />
            <stop offset="100%" stopColor="#121316" />
          </linearGradient>

          {/* Drop Shadows */}
          <filter id="shadow3d" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* 1. ROOF SHIELD (House motif) */}
        <g filter="url(#shadow3d)">
          {/* Outer Roof Path */}
          <path
            d="M 24 54 L 210 12 L 396 54 L 388 67 L 210 27 L 32 67 Z"
            fill="url(#hpRoofGrad)"
            stroke="#5c6068"
            strokeWidth="1.2"
          />
          {/* Subtle Roof Red Accent Tip */}
          <path
            d="M 205 13 L 210 11 L 215 13 L 212 16 L 208 16 Z"
            fill="#ef2323"
          />
        </g>

        {/* 2. LATIN BRAND: "HomePlast" */}
        <g filter="url(#shadow3d)" transform="translate(14, 52)">
          {/* Letter 'H' (RED 3D) */}
          <path
            d="M 12 12 L 26 12 L 26 27 L 42 27 L 42 12 L 56 12 L 56 50 L 42 50 L 42 37 L 26 37 L 26 50 L 12 50 Z"
            fill="url(#hpRedGrad)"
            stroke="#ff8080"
            strokeWidth="0.8"
          />
          {/* Letter 'o' (BLACK 3D) */}
          <path
            d="M 64 24 C 64 16 71 11 81 11 C 91 11 98 16 98 24 L 98 38 C 98 46 91 51 81 51 C 71 51 64 46 64 38 Z M 76 25 C 76 21 78 19 81 19 C 84 19 86 21 86 25 L 86 37 C 86 41 84 43 81 43 C 78 43 76 41 76 37 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />
          {/* Letter 'm' (BLACK 3D) */}
          <path
            d="M 106 13 L 118 13 L 118 20 C 121 15 127 12 134 12 C 140 12 144 14 147 19 C 151 14 157 12 164 12 C 172 12 176 16 176 24 L 176 50 L 164 50 L 164 26 C 164 22 162 20 159 20 C 155 20 152 23 152 27 L 152 50 L 140 50 L 140 26 C 140 22 138 20 135 20 C 131 20 128 23 128 27 L 128 50 L 116 50 L 116 13 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />
          {/* Letter 'e' (BLACK 3D) */}
          <path
            d="M 184 31 L 214 31 C 214 22 209 12 199 12 C 189 12 184 20 184 31 Z M 184 37 C 185 45 190 51 199 51 C 205 51 210 48 213 43 L 223 48 C 218 57 210 61 199 61 C 181 61 172 49 172 32 C 172 17 183 4 199 4 C 215 4 225 15 225 32 L 225 37 Z"
            transform="scale(0.85) translate(30, 0)"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />

          {/* Letter 'P' (RED 3D) */}
          <path
            d="M 224 12 L 246 12 C 255 12 263 17 263 26 C 263 35 255 40 246 40 L 237 40 L 237 50 L 224 50 Z M 237 21 L 237 31 L 245 31 C 248 31 251 29 251 26 C 251 23 248 21 245 21 Z"
            fill="url(#hpRedGrad)"
            stroke="#ff8080"
            strokeWidth="0.8"
          />

          {/* Letter 'l' (BLACK 3D) */}
          <path
            d="M 271 8 L 282 8 L 282 50 L 271 50 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />

          {/* Letter 'a' (BLACK 3D) */}
          <path
            d="M 290 28 C 290 20 297 14 306 14 C 314 14 319 18 320 23 L 320 15 L 331 15 L 331 50 L 321 50 L 321 44 C 319 48 314 51 306 51 C 296 51 290 44 290 35 Z M 302 33 C 302 39 306 43 311 43 C 316 43 320 39 320 33 L 320 31 C 320 25 316 22 311 22 C 306 22 302 26 302 33 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />

          {/* Letter 's' (BLACK 3D) */}
          <path
            d="M 339 42 L 349 40 C 350 44 353 46 357 46 C 361 46 363 44 363 41 C 363 38 360 36 354 34 C 344 31 340 27 340 21 C 340 14 347 11 356 11 C 364 11 370 15 372 21 L 362 23 C 361 20 359 19 356 19 C 353 19 351 20 351 22 C 351 24 353 25 358 27 C 368 29 373 33 373 40 C 373 48 365 52 356 52 C 346 52 340 48 339 42 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />

          {/* Letter 't' (BLACK 3D) */}
          <path
            d="M 382 12 L 382 18 L 391 18 L 391 26 L 382 26 L 382 43 C 382 46 384 47 387 47 L 391 47 L 391 53 C 388 54 384 54 380 54 C 374 54 371 50 371 43 L 371 26 L 365 26 L 365 18 L 371 18 L 371 12 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />
        </g>

        {/* 3. DIVIDER METALLIC BAR */}
        <g filter="url(#shadow3d)">
          <rect
            x="20"
            y="114"
            width="380"
            height="5"
            rx="2.5"
            fill="url(#hpBarGrad)"
            stroke="#3d4047"
            strokeWidth="0.8"
          />
        </g>

        {/* 4. ARABIC BRAND: "هوم بلاست" */}
        <g filter="url(#shadow3d)" transform="translate(20, 126)">
          {/* 'هوم' (BLACK 3D) */}
          <path
            d="M 370 12 C 370 4 360 0 350 0 C 340 0 332 4 326 12 L 315 12 C 305 12 300 16 300 24 L 300 36 C 300 44 306 48 316 48 L 370 48 L 370 36 L 318 36 C 314 36 313 34 313 31 C 313 28 315 26 319 26 L 332 26 C 337 32 344 36 352 36 C 362 36 370 30 370 20 Z M 356 18 C 356 21 354 24 350 24 C 346 24 343 21 343 18 C 343 15 346 12 350 12 C 354 12 356 15 356 18 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />

          {/* 'بـ' and dot (RED 3D) */}
          <path
            d="M 230 48 L 290 48 L 290 14 L 274 14 L 274 36 L 230 36 Z"
            fill="url(#hpRedGrad)"
            stroke="#ff8080"
            strokeWidth="0.8"
          />
          {/* Dot of Baa (RED) */}
          <rect
            x="248"
            y="53"
            width="12"
            height="12"
            rx="2"
            fill="url(#hpRedGrad)"
            stroke="#ff8080"
            strokeWidth="0.8"
          />

          {/* 'ـلا' (BLACK 3D) */}
          <path
            d="M 120 48 L 222 48 L 222 12 L 208 12 L 208 36 L 175 36 L 175 12 L 160 12 L 160 36 L 120 36 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />

          {/* 'ست' with Red accent loop (Red & Black 3D) */}
          <path
            d="M 10 48 L 115 48 L 115 36 L 85 36 L 85 16 L 72 16 L 72 36 L 50 36 L 50 16 L 38 16 L 38 36 L 10 36 Z"
            fill="url(#hpBlackGrad)"
            stroke="#555861"
            strokeWidth="0.8"
          />

          {/* 'ت' dots / red loop accent */}
          <path
            d="M 10 36 L 10 16 L 25 16 L 25 36 Z"
            fill="url(#hpRedGrad)"
            stroke="#ff8080"
            strokeWidth="0.8"
          />
          <circle cx="17" cy="8" r="4" fill="url(#hpRedGrad)" />
          <circle cx="28" cy="8" r="4" fill="url(#hpRedGrad)" />
        </g>
      </svg>
    </div>
  );
};
