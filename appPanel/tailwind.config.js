/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        global:"#002542",
        rouge: "#FF0F0F",
        rouge_fonce:"#B60000",


      },
    },
    screens: {
      xss: "210px",
      xs: "320px",
      sx: "450px",
      ss: "620px",
      sm: "740px",
      sms: "764px",
      ssm: "800px",
      sssm: "860px",
      dmd: "1055px",
      md: "1100px",
      mdd: "1170px",
      mddd: "1055px",
      lg: "1210px",
      xl: "1700px",
    },
  },
  plugins: [],
}

