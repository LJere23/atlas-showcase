import "./globals.css";

export const metadata = {
  title: "Atlas Showcase",
  description: "Cinematic memory storytelling",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Atlas Showcase",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050507",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}