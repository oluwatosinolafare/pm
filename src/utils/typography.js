import Typography from "typography"

const typography = new Typography({
  includeNormalize: true,
  omitGoogleFont: false,
  googleFonts: [
    {
      name: "Ubuntu",
      styles: ["400"],
    },
    {
      name: "Open Sans",
      styles: ["400"],
    },
    {
      name: "Open Sans Condensed",
      styles: ["400"],
    },
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Ubuntu", "sans-serif"],
  headerWeight: "normal",
  bodyFontFamily: ["Open Sans", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
