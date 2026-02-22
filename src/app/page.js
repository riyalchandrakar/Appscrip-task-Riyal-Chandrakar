import PLPClient from "../components/PLPClient";

export const dynamic = "force-dynamic"; // 🔥 Force runtime render
export const revalidate = 0; // 🔥 Disable static cache

export const metadata = {
  title: "Discover Our Products",
  description: "Browse our latest premium collection curated just for you.",
};

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    const contentType = res.headers.get("content-type");

    // 🔥 Safety check (Very Important)
    if (!res.ok || !contentType?.includes("application/json")) {
      console.error("Invalid response from FakeStore");
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Server Fetch Error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container">
      <h1 className="main-title">DISCOVER OUR PRODUCTS</h1>
      <p className="subtitle">
        Browse our latest premium collection curated just for you.
      </p>

      <PLPClient products={products} />
    </main>
  );
}
