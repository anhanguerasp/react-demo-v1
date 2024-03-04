/** @type {import('tailwindcss').Config} */

const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  //darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('//assets/images/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('//assets/images/bg-sidebar-desktop.svg')",
        "logo-dark": "url('/img/logo-anhanguera-branco.png')",
        "logo-light": "url('/img/logo.svg')",
        "home-mobile-banner": "url(/img/banner-home-mobile.png)",
        "home-banner": "url(/img/inscricao.png)",
      },
      animation: {
        "ping-slow": "ping 3s linear infinite",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    addVariablesForColors,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
