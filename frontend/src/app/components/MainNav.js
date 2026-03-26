"use client";

import { useState } from "react";
import Link from "next/link";

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setDropdownOpen] = useState(null);

  return (
    <nav className="main-nav">
      <div className="nav-row">

        <span className="navnaslov">
          <Link href="/">Hrvatski naglasci na mreži</Link>
        </span>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

        <ul className={`nav-linkovi ${menuOpen ? "active" : ""}`}>

          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/oprojektu" className="dropdown-trigger">O projektu</Link>
              <span onClick={() => setDropdownOpen(openDropdown === "oprojektu" ? null : "oprojektu")}></span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "oprojektu" ? "open" : ""}`}>
              <li><Link href="/oprojektu/oprojektu-opis">Opis projekta</Link></li>
              <li><Link href="/oprojektu/oprojektu-cilj">Ciljevi</Link></li>
              <li><Link href="/oprojektu/oprojektu-rez">Rezultati</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/stosveznam" className="dropdown-trigger">Što sve znam?</Link>
              <span onClick={() => setDropdownOpen(openDropdown === "stosveznam" ? null : "stosveznam")}></span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "stosveznam" ? "open" : ""}`}>
              <li><Link href="/stosveznam/GovornaRijec">Govorna riječ</Link></li>
              <li><Link href="/stosveznam/KojimNaglascima">Kojim naglascima govorim</Link></li>
              <li><Link href="/stosveznam/Inventar">Inventar</Link></li>
              <li><Link href="/stosveznam/Distribucijska">Distribucijska pravila</Link></li>
              <li><Link href="/stosveznam/paradigma">Naglasci u paradigmi</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/slusam" className="dropdown-trigger">Slušam</Link>
              <span onClick={() => setDropdownOpen(openDropdown === "slusam" ? null : "slusam")}></span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "slusam" ? "open" : ""}`}>
              <li><Link href="/slusam/placeholder1">placeholder</Link></li>
            
            </ul>
          </li>

          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/izgovaram" className="dropdown-trigger">Izgovaram</Link>
              <span onClick={() => setDropdownOpen(openDropdown === "izgovaram" ? null : "izgovaram")}></span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "izgovaram" ? "open" : ""}`}>
              <li><Link href="/izgovaram/placeholder1">placeholder</Link></li>
              
            </ul>
          </li>

          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/sva4ponavljam" className="dropdown-trigger">Sva 4 ponavljam</Link>
              <span onClick={() => setDropdownOpen(openDropdown === "sva4ponavljam" ? null : "sva4ponavljam")}></span>
            </div>
            <ul className={`dropdown-menu ${openDropdown === "sva4ponavljam" ? "open" : ""}`}>
              <li><Link href="/sva4ponavljam/placeholder1">placeholder</Link></li>
              
            </ul>
          </li>

          <li className="dropdown">
            <div className="dropdown-header">
              <Link href="/glagoli-u-mrezi" className="dropdown-trigger">Glagoli u mreži</Link>
              <span onClick={() => setDropdownOpen(openDropdown === "glagoli-u-mrezi" ? null : "glagoli-u-mrezi")}></span>
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