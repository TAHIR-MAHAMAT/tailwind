module.exports = {
  // 1. Fichiers analysés par Tailwind pour détecter les classes utilisées
  content: [
    "./src//*.{html,js,jsx,ts,tsx,vue}", // Scanne les fichiers HTML, JS, JSX, etc.
    "./public//*.html",                 // Inclut les fichiers HTML publics
  ],

  // 2. Mode sombre : 'media' (préférences système) ou 'class' (via une classe CSS)
  darkMode: 'class', // Permet d'activer le mode sombre en ajoutant la classe "dark"

  // 3. Thème : personnalisation des styles
  theme: {
    extend: {
      // Ajout de nouvelles couleurs
      colors: {
        primary: {
          light: '#4fb3f5',
          DEFAULT: '#1E90FF', // Couleur par défaut
          dark: '#1c7ed6',
        },
        secondary: {
          light: '#ff9ff3',
          DEFAULT: '#ff6b6b',
          dark: '#c44569',
        },
        neutral: '#f5f5f5',
      },

      // Ajout de nouveaux espacements
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },

      // Ajout de coins arrondis personnalisés
      borderRadius: {
        '4xl': '2.5rem',
      },

      // Personnalisation des polices
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      // Ajout de points de rupture personnalisés
      screens: {
        xs: '480px', // Point de rupture supplémentaire
      },

      // Animations personnalisées
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },

  // 4. Variantes : étendre les comportements pour les états (hover, focus, etc.)
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
      textColor: ['focus-visible', 'group-hover'],
      opacity: ['disabled'],
      scale: ['active', 'group-hover'],
    },
  },

  // 5. Plugins : ajout de fonctionnalités supplémentaires
  plugins: [
    require('@tailwindcss/forms'), // Plugin pour styliser les formulaires
    require('@tailwindcss/typography'), // Plugin pour la typographie
    require('@tailwindcss/aspect-ratio'), // Plugin pour gérer les ratios d'aspect
    plugin(function ({ addUtilities }) { // Plugin personnalisé
      addUtilities({
        '.skew-10deg': { transform: 'skewY(-10deg)' },
        '.skew-15deg': { transform: 'skewY(-15deg)' },
      });
    }),
  ],

  // 6. Désactivation de certains plugins natifs de Tailwind
  corePlugins: {
    preflight: true, // Désactiver si vous n'utilisez pas le reset CSS de Tailwind
  },
};