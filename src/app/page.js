import PLPClient from "../components/PLPClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();

    // Optional: limit products (API bohot zyada deta hai)
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
      <h1 className="main-title">DISCOVER OUR PRODUCTS</h1>
      <PLPClient products={products} />
    </main>
  );
}
