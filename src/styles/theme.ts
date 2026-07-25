// Global Design System Tokens

export const theme = {
  colors: {
    primary: {
      default: '#8b5cf6', // Vibrant Purple
      hover: '#7c3aed',
      glow: 'rgba(139, 92, 246, 0.5)',
    },
    background: {
      main: '#0B0914', // Deep space dark
      secondary: '#120f1c',
      card: 'rgba(255, 255, 255, 0.03)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af', // Gray-400
      muted: '#6b7280', // Gray-500
    },
    border: {
      default: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(255, 255, 255, 0.2)',
      active: 'rgba(139, 92, 246, 0.5)',
    },
  },
  typography: {
    fontFamily: {
      sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      display: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
    },
  },
  spacing: {
    section: 'px-6 md:px-12 lg:px-24 py-20 md:py-32',
    container: 'max-w-7xl mx-auto',
    element: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    }
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    glow: '0 0 20px rgba(139, 92, 246, 0.4)',
    card: '0 4px 30px rgba(0, 0, 0, 0.1)',
  },
  animations: {
    spring: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
    ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth transitions
    duration: {
      fast: 0.2,
      normal: 0.4,
      slow: 0.8,
    }
  }
};
