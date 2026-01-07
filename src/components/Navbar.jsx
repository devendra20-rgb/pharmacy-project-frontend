"use client";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <span
          onMouseEnter={() => setActiveMenu("Conditions")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Conditions
        </span>

        <span
          onMouseEnter={() => setActiveMenu("Drugs & Supplements")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Drugs & Supplements
        </span>
      </div>

      <div
        onMouseEnter={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <MegaMenu activeMenu={activeMenu} />
      </div>
    </nav>
  );
}
