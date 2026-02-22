import PLPClient from "../components/PLPClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/api/products`,
      { cache: "no-store" },
    );

    if (!res.ok) return [];

    return await res.json();
  } catch (error) {
    console.error("Page Fetch Error:", error);
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
