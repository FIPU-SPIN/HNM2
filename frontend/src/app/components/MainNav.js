"use client";

import { useState } from "react";
import Link from "next/link";
import Burger from "./Burger";

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setDropdownOpen] = useState(null);

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setDropdownOpen(null);  
    } else {
      setDropdownOpen(dropdownName);  
    }
  };

  return (
    <nav className="main-nav">
      <div className="nav-row">
        <span className="navnaslov">
          <Link href="/">Hrvatski naglasci na mreži</Link>
        </span>

        <Burger 
          isOpen={menuOpen} 
          onClick={() => setMenuOpen(!menuOpen)} 
        />

        <ul className={`nav-linkovi ${menuOpen ? "active" : ""}`}>
          {/* O PROJEKTU */}
          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/oprojektu" className="dropdown-trigger">O projektu</Link>
              <span 
                className={openDropdown === "oprojektu" ? "open" : ""}
                onClick={() => toggleDropdown("oprojektu")}
              >
                ▼
              </span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "oprojektu" ? "open" : ""}`}>
              <li><Link href="/oprojektu/oprojektu-opis">Opis projekta</Link></li>
              <li><Link href="/oprojektu/oprojektu-rez">Rezultati projekta</Link></li>
              <li><Link href="/oprojektu/oprojektu-ostranici">O mrežnim stranicama i aplikaciji</Link></li>
            </ul>
          </li>

          {/* ŠTO SVE ZNAM */}
          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/stosveznam" className="dropdown-trigger">Što sve znam?</Link>
              <span 
                className={openDropdown === "stosveznam" ? "open" : ""}
                onClick={() => toggleDropdown("stosveznam")}
              >
                ▼
              </span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "stosveznam" ? "open" : ""}`}>
              <li><Link href="/stosveznam/GovornaRijec">Govorna riječ</Link></li>
              <li><Link href="/stosveznam/KojimNaglascima">Kojim naglascima govorim</Link></li>
              <li><Link href="/stosveznam/Inventar">Inventar</Link></li>
              <li><Link href="/stosveznam/Distribucijska">Distribucijska pravila</Link></li>
              <li><Link href="/stosveznam/NaglasciUParadigmi">Naglasci u paradigmi</Link></li>
            </ul>
          </li>

          {/* SLUŠAM */}
          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/slusam" className="dropdown-trigger">Slušam</Link>
              <span 
                className={openDropdown === "slusam" ? "open" : ""}
                onClick={() => toggleDropdown("slusam")}
              >
                ▼
              </span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "slusam" ? "open" : ""}`}>
              <li><Link href="/slusam/MjestoTonTrajanje">Mjesto, ton i trajanje</Link></li>
              <li><Link href="/slusam/Zanaglasna">Naglasci i zanaglasna dužina</Link></li>  
              <li><Link href="/slusam/NaglasciUporaba">Naglasci u uporabi</Link></li>
            </ul>
          </li>

          {/* IZGOVARAM */}
          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/izgovaram" className="dropdown-trigger">Izgovaram</Link>
              <span 
                className={openDropdown === "izgovaram" ? "open" : ""}
                onClick={() => toggleDropdown("izgovaram")}
              >
                ▼
              </span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "izgovaram" ? "open" : ""}`}>
              <li><Link href="/izgovaram/placeholder1">placeholder</Link></li>
            </ul>
          </li>

          {/* SVA 4 PONAVLJAM */}
          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/sva4ponavljam" className="dropdown-trigger">Sva 4 ponavljam</Link>
              <span 
                className={openDropdown === "sva4ponavljam" ? "open" : ""}
                onClick={() => toggleDropdown("sva4ponavljam")}
              >
                ▼
              </span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "sva4ponavljam" ? "open" : ""}`}>
              <li><Link href="/sva4ponavljam/placeholder1">placeholder</Link></li>
            </ul>
          </li>

          {/* GLAGOLI U MREŽI */}
          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/glagoli-u-mrezi" className="dropdown-trigger">Glagoli u mreži</Link>
              <span 
                className={openDropdown === "glagoli-u-mrezi" ? "open" : ""}
                onClick={() => toggleDropdown("glagoli-u-mrezi")}
              >
                ▼
              </span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "glagoli-u-mrezi" ? "open" : ""}`}>
              <li><Link href="/glagoli-u-mrezi/placeholder1">placeholder</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="nav-overlay active" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}