module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
            'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
            'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
  
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
