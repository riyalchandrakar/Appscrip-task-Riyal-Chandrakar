export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch from FakeStore");
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error("API Route Error:", error);

    return Response.json([], { status: 200 });
  }
}
