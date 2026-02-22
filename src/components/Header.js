import Navbar from "./Navbar";
import "../styles/header.css";
import Image from "next/image";
export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        {/* Left Logo Icon */}
        <div className="left-section">
          <div className="brand-icon">
            <Image src="/Logo.svg" alt="Brand Logo" width={28} height={28} />
          </div>
        </div>

        {/* Center Logo */}
        <div className="logo">LOGO</div>

        {/* Right Icons */}
        <div className="right-section">
          {/* Search */}
          <svg className="icon" viewBox="0 0 24 24">
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="black"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="16"
              y1="16"
              x2="21"
              y2="21"
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>

          {/* Heart */}
          <svg className="icon" viewBox="0 0 24 24">
            <path
              d="M12 21s-7-4.35-9-8.5C1 8 3.5 5 7 6.5 9 7.5 12 10 12 10s3-2.5 5-3.5C20.5 5 23 8 21 12.5 19 16.65 12 21 12 21z"
              stroke="black"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>

          {/* Bag */}
          <svg className="icon" viewBox="0 0 24 24">
            <path
              d="M6 8h12l-1 12H7L6 8z"
              stroke="black"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M9 8a3 3 0 0 1 6 0"
              stroke="black"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>

          {/* User */}
          <svg className="icon desktop-only" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke="black"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M4 20c1.5-4 14.5-4 16 0"
              stroke="black"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>

          {/* Language */}
          <div className="lang desktop-only">ENG ▾</div>
        </div>
      </div>

      <Navbar />
    </header>
  );
}
