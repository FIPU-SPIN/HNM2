import "./style.css";
import HeaderImg from "./components/HeaderImg";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>

        <HeaderImg />
        <MainNav />

        {children}

        <Footer />

      </body>
    </html>
  );
}