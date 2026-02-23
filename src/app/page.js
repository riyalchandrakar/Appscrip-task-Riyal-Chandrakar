import PLPClient from "../components/PLPClient";

export const revalidate = 60; //  Better performance

export const metadata = {
  title: "Discover Our Products",
  description:
    "Browse high-quality fashion, electronics, furniture and lifestyle products at affordable prices. Shop trending collections curated for modern customers.",
};

async function getProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!res.ok) return [];

    const data = await res.json();
    return data.slice(0, 20);
  } catch (error) {
    console.error("Server Fetch Error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container">
      <h1 className="main-title">Discover Our Products</h1>

      <p className="subtitle">
        Browse high-quality fashion, electronics, furniture and lifestyle
        essentials at affordable prices. Discover trending collections curated
        for modern shoppers.
      </p>

      <PLPClient products={products} />
    </main>
  );
}
