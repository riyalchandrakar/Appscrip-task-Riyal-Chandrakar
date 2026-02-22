import PLPClient from "../components/PLPClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Discover Our Products",
  description: "Browse our latest premium collection curated just for you.",
};

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    console.log("STATUS:", res.status);

    const data = await res.json();

    console.log("PRODUCT COUNT:", data.length);

    return data;
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Product List",
          }),
        }}
      />
    </main>
  );
}
