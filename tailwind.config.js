/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-gray": "#D5D6D2",
        "base-zinc": "#3A5199",
      },
      fontFamily: {
        thin: ["gteestiThin"],
        ultraBold: ["gteestiUltraBold"],
        bold: ["gteestiBold"],
        light: ["gteestiLight"],
        medium: ["gteestiMedium"],
        regular: ["gteestiRegular"],
      },
      backgroundImage: {
        "hero-pattern":
          'linear-gradient(0deg, #2F2E33 0%, rgba(47, 46, 51, 0) 100%), url("./Images/537bcd9d7a68711989a5cff4c4c65716.jpg")',
        radialGrad:
          "radial-gradient(closest-side, rgba(255, 255, 255, 0.09) 2.5947827845811844%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
});
