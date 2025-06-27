import localFont from "next/font/local";

export const customFont = localFont({
  src: [
    // Thin weight
    {
      path: "../public/fonts/Carlgine-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    // Extra Light weight
    {
      path: "../public/fonts/Carlgine-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    // Light weight
    {
      path: "../public/fonts/Carlgine-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    // Regular weight
    {
      path: "../public/fonts/Carlgine-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    // Medium weight (your current regular mapped to 500)
    {
      path: "../public/fonts/Carlgine-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    // Semi Bold weight
    {
      path: "../public/fonts/Carlgine-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    // Bold weight
    {
      path: "../public/fonts/Carlgine-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    // Extra Bold weight
    {
      path: "../public/fonts/Carlgine-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    // Black weight
    {
      path: "../public/fonts/Carlgine-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Carlgine-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-carlgine",
  display: "swap",
});
