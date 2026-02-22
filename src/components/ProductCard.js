import "../styles/product.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="image-wrapper">
        <Image
          src={product.image}
          alt={product.title || "Product Image"}
          loading="lazy"
          width="300"
          height="300"
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>

        <p className="product-subtext">
          <span className="underline">Sign in</span> or Create an account to see
          pricing
        </p>
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
