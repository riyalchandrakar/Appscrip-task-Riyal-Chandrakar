"use client";

import { useState } from "react";
import Image from "next/image";
import "../styles/product.css";

export default function ProductCard({ product }) {
  const fallbackImage = "/placeholder.png";
  const initialImage = product?.images?.[0] || fallbackImage;

  const [imageSrc, setImageSrc] = useState(initialImage);

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="image-wrapper">
        <Image
          src={imageSrc}
          alt={product?.title || "Product Image"}
          width={300}
          height={300}
          loading="lazy"
          unoptimized={true}
          style={{ objectFit: "cover" }}
          onError={() => setImageSrc(fallbackImage)}
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h2 className="product-title">{product?.title}</h2>

        <p className="product-price">₹ {product?.price}</p>

        <p className="product-subtext">Category: {product?.category?.name}</p>
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
