import "./globals.css";

export const metadata = {
  title: "Skateschool - скейт школа в москве",
  description: "Skateschool - скейт школа в москве",
  icons: {
    icon: ["/metadata/favicon.ico?v=4"],
    apple: ["/metadata/apple-touch-icon.png?v=4"],
    shortcut: ["/metadata/apple-touch-icon.png"]
  },
  manifest: "/metadata/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
