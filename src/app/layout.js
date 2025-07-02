import "./globals.css";
import Header from "./header/Header";

export const metadata = {
  title: "Concesionaria",
  description: "Proyecto para la facultad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
