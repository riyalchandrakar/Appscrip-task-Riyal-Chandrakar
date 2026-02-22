export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const data = JSON.parse(text);
      return Response.json(data);
    } catch {
      console.error("FakeStore returned HTML instead of JSON");
      return Response.json([], { status: 200 });
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return Response.json([], { status: 200 });
  }
}
