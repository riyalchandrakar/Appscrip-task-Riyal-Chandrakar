"use client";

import { useState, useMemo } from "react";
import "../styles/sidebar.css";

export default function Sidebar({ products = [], filters, setFilters }) {
  const [open, setOpen] = useState(true);

  // Generate categories dynamically from products
  const categories = useMemo(() => {
    const unique = new Set(
      products.map((p) => p.category?.name).filter(Boolean),
    );

    return ["All", ...Array.from(unique)];
  }, [products]);

  return (
    <aside className="sidebar">
      <div className="sidebar-block">
        <div className="sidebar-header" onClick={() => setOpen(!open)}>
          <span>CATEGORY</span>
          <span className="chevron">{open ? "⌃" : "⌄"}</span>
        </div>

        <div className="sidebar-subtext">{filters.CATEGORY}</div>

        {open && (
          <div className="sidebar-options">
            {categories.map((cat) => (
              <label key={cat}>
                <input
                  type="radio"
                  name="category"
                  checked={filters.CATEGORY === cat}
                  onChange={() =>
                    setFilters((prev) => ({
                      ...prev,
                      CATEGORY: cat,
                    }))
                  }
                />
                {cat}
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
