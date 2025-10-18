import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
