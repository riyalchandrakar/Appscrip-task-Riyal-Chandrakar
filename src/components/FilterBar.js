"use client";

import { useState } from "react";
import "../styles/filterbar.css";

export default function FilterBar({
  total,
  sortType,
  onSortChange,
  showFilter,
  onToggleFilter,
}) {
  const [open, setOpen] = useState(false);

  const options = [
    { label: "RECOMMENDED", value: "recommended" },
    { label: "NEWEST FIRST", value: "newest" },
    { label: "POPULAR", value: "popular" },
    { label: "PRICE : HIGH TO LOW", value: "high" },
    { label: "PRICE : LOW TO HIGH", value: "low" },
  ];

  const selectedLabel =
    options.find((opt) => opt.value === sortType)?.label || "RECOMMENDED";

  const handleSelect = (option) => {
    onSortChange(option.value); // 🔥 send to parent
    setOpen(false);
  };

  return (
    <div className="filterbar">
      {/* LEFT */}
      <div className="filter-left">
        <span className="items-count">{total} ITEMS</span>

        <button onClick={onToggleFilter} className="show-filter">
          {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      {/* RIGHT */}
      <div className="filter-right">
        <div className="sort-label" onClick={() => setOpen(!open)}>
          {selectedLabel} ▾
        </div>

        {open && (
          <div className="dropdown">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-item ${
                  sortType === option.value ? "active" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {sortType === option.value && "✓ "}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
