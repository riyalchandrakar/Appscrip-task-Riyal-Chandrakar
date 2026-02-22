"use client";

import { useState } from "react";
import "../styles/sidebar.css";

export default function Sidebar({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  const categories = [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <aside className="sidebar">
      {/* CATEGORY FILTER */}
      <div className="sidebar-block">
        <div className="sidebar-header" onClick={() => setOpen(!open)}>
          <span>CATEGORY</span>
          <span className="chevron">{open ? "⌃" : "⌄"}</span>
        </div>

        {/* Selected value preview */}
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
