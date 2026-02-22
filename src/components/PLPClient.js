"use client";

import { useState, useMemo } from "react";
import FilterBar from "./FilterBar";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

export default function PLPClient({ products }) {

  /* =========================
     STATE
  ========================= */

  const [sortType, setSortType] = useState("recommended");
  const [showFilter, setShowFilter] = useState(true);

  const [filters, setFilters] = useState({
    CATEGORY: "All",
  });

  /* =========================
     FILTER + SORT LOGIC
  ========================= */

  const processedProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    let updated = [...products];

    /* -------- CATEGORY FILTER -------- */
    if (filters.CATEGORY && filters.CATEGORY !== "All") {
      updated = updated.filter(
        (item) =>
          item.category.toLowerCase() === filters.CATEGORY.toLowerCase()
      );
    }

    /* -------- SORTING -------- */
    const sortFunctions = {
      high: (a, b) => b.price - a.price,
      low: (a, b) => a.price - b.price,
      newest: (a, b) => b.id - a.id,
      popular: (a, b) => b.rating.rate - a.rating.rate,
      recommended: (a, b) =>
        (b.rating.rate * b.rating.count) -
        (a.rating.rate * a.rating.count),
    };

    const sortFn = sortFunctions[sortType];

    if (sortFn) {
      updated.sort(sortFn);
    }

    return updated;

  }, [products, sortType, filters]);

  /* =========================
     RENDER
  ========================= */

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
        {showFilter && (
          <Sidebar
            filters={filters}
            setFilters={setFilters}
          />
        )}

        <div className="products-section">
          <div className="product-grid">
            {processedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}