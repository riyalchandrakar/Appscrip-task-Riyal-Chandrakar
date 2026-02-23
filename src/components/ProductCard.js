import "../styles/product.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  const imageUrl = product.images?.[0] || "/placeholder.png";

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          alt={product.title || "Product Image"}
          width={300}
          height={300}
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>

        <p className="product-price">₹ {product.price}</p>

        <p className="product-subtext">Category: {product.category?.name}</p>
      </div>

      {/* Wishlist Icon */}
      <div className="wishlist">
        <svg viewBox="0 0 24 24">
          <path
            d="M12 21s-7-4.35-9-8.5C1 8 3.5 5 7 6.5 9 7.5 12 10 12 10s3-2.5 5-3.5C20.5 5 23 8 21 12.5 19 16.65 12 21 12 21z"
            stroke="black"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
