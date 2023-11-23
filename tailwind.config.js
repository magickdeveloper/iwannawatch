import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            foreground: "#eeeeee",

            // default: {
            //   100: "#FFFDCC",
            //   200: "#FFFA99",
            //   300: "#FFF666",
            //   400: "#FFF33F",
            //   500: "#FFEE00",
            //   600: "#DBCB00",
            //   700: "#B7A800",
            //   800: "#938600",
            //   900: "#7A6E00",
            //   DEFAULT: "#FFEE00",
            //   foreground: "#1d1d1d",
            // },
            background: {
              100: "#e2e2e2",
              200: "#d9d9d9",
              300: "#d0d0d0",
              400: "#c7c7c7",
              500: "#f8f8f8",
              600: "#ebe8e8",
              700: "#e2e2e2",
              800: "#d9d9d9",
              900: "#d0d0d0",
              DEFAULT: "#1f1f1f",
              foreground: "#1d1d1d",
            },
            // #FF3838
            //#FFA24D
            //#FFD700
            //#42A5F5
            //#BF3EFF
            primary: {
              100: "#FFFDCC",
              200: "#FFFA99",
              300: "#FFF666",
              400: "#FFF33F",
              500: "#FFEE00",
              600: "#DBCB00",
              700: "#B7A800",
              800: "#938600",
              900: "#7A6E00",
              DEFAULT: "#FFEE00",
              foreground: "#1d1d1d",
            },
            success: {
              100: "#E8FDE2",
              200: "#CDFCC5",
              300: "#ABF8A7",
              400: "#8EF193",
              500: "#6AE87B",
              600: "#4DC769",
              700: "#35A759",
              800: "#21864B",
              900: "#146F42",
              DEFAULT: "#6AE87B",
              foreground: "#1d1d1d",
            },
            secondary: {
              100: "#CEF0FE",
              200: "#9DDCFE",
              300: "#6CC4FE",
              400: "#48ABFD",
              500: "#0C84FC",
              600: "#0866D8",
              700: "#064CB5",
              800: "#033592",
              900: "#022578",
              DEFAULT: "#0C84FC",
              foreground: "#020202",
            },
            warning: {
              100: "#FDFDCE",
              200: "#FCFA9D",
              300: "#F8F56C",
              400: "#F2ED47",
              500: "#EAE30E",
              600: "#C9C20A",
              700: "#A8A207",
              800: "#878204",
              900: "#706B02",
              DEFAULT: "#EAE30E",
              foreground: "#1d1d1d",
            },
            error: {
              100: "#FFEAD5",
              200: "#FFCFAC",
              300: "#FFAD82",
              400: "#FF8E63",
              500: "#FF5930",
              600: "#DB3923",
              700: "#B72018",
              800: "#930F12",
              900: "#7A0914",
              DEFAULT: "#FF5930",
              foreground: "#1d1d1d",
            },
          },
        },
      },
    }),
  ],
};
