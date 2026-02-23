import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://appscrip-task-riyal-chandrakar.vercel.app"),

  title: {
    default: "Meta Muse",
    template: "%s | Meta Muse",
  },

  description:
    "Meta Muse offers premium fashion, electronics and lifestyle products curated for modern shoppers.",

  keywords: [
    "Meta Muse",
    "online shopping",
    "fashion store",
    "electronics",
    "lifestyle products",
  ],

  openGraph: {
    title: "Meta Muse",
    description:
      "Discover premium fashion, electronics and lifestyle essentials at affordable prices.",
    url: "https://appscrip-task-riyal-chandrakar.vercel.app",
    siteName: "Meta Muse",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meta Muse",
    description:
      "Shop premium fashion, electronics and lifestyle products online.",
  },

  robots: {
    index: true,
    follow: true,
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
