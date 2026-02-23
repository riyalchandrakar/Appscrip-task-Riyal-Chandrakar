"use client";

import { useState, useMemo } from "react";
import FilterBar from "./FilterBar";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

export default function PLPClient({ products = [] }) {
  const [sortType, setSortType] = useState("recommended");
  const [showFilter, setShowFilter] = useState(true);

  const [filters, setFilters] = useState({
    CATEGORY: "All",
  });

  const processedProducts = useMemo(() => {
    let updated = [...products];

    // ✅ Category filter (Platzi structure)
    if (filters.CATEGORY !== "All") {
      updated = updated.filter(
        (item) =>
          item.category?.name?.toLowerCase() === filters.CATEGORY.toLowerCase(),
      );
    }

    // ✅ Sorting (rating not available in Platzi API)
    const sortFunctions = {
      high: (a, b) => b.price - a.price,
      low: (a, b) => a.price - b.price,
      newest: (a, b) => b.id - a.id,
      popular: (a, b) => b.price - a.price, // fallback
      recommended: (a, b) => b.price - a.price, // fallback
    };

    const sortFn = sortFunctions[sortType];
    if (sortFn) {
      updated.sort(sortFn);
    }

    return updated;
  }, [products, sortType, filters]);

  return (
    <>
      <FilterBar
        total={processedProducts.length}
        sortType={sortType}
        onSortChange={setSortType}
        showFilter={showFilter}
        onToggleFilter={() => setShowFilter((prev) => !prev)}
      />

      <div className="plp-layout">
        {/* ✅ Pass products to Sidebar for dynamic categories */}
        {showFilter && (
          <Sidebar
            products={products}
            filters={filters}
            setFilters={setFilters}
          />
        )}

        <div className="products-section">
          <div className="product-grid">
            {processedProducts.length > 0 ? (
              processedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p style={{ textAlign: "center", width: "100%" }}>
                No products available at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
