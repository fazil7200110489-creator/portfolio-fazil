import "./globals.css";

export const metadata = {
  title: "Mohamed Fazil | Portfolio",
  description:
    "Animated 3D portfolio of Mohamed Fazil, MERN Stack and PHP Developer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
