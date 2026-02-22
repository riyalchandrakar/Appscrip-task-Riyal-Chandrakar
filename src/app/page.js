import Header from "../components/Header";
import Footer from "../components/Footer";
import PLPClient from "../components/PLPClient";

export const metadata = {
  title: "Discover Our Products | Meta Muse",
  description:
    "Browse our premium collection of lifestyle products and accessories.",
};

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Header />

      <main className="container">
        <h1 className="main-title">DISCOVER OUR PRODUCTS</h1>
        <p className="subtitle">
          Browse our latest premium collection curated just for you.
        </p>

        <PLPClient products={products} />
      </main>

      <Footer />
    </>
  );
}
