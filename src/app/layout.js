import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Meta Muse",
    template: "%s | Meta Muse",
  },
  description: "Premium lifestyle products and accessories.",
  openGraph: {
    title: "Meta Muse",
    description: "Premium lifestyle products and accessories.",
    type: "website",
  },
};

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
