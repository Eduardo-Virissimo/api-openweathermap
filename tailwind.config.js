module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Ubuntu',
      secondary: 'Rubik',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpeg')",
        services: "url('./assets/services.svg')",
        about: "url('./assets/about.png')",
        banner: "url('./assets/bg-banner.png')",
      },
    },
  },
  plugins: [],
};