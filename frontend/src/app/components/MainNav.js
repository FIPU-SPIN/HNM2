import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="main-nav">
      <div className="nav-row">
        <span className="navnaslov">
          <Link href="/">Hrvatski naglasci na mreži</Link>
        </span>

        <ul className="nav-linkovi">
          <li><Link href="/oprojektu">O projektu</Link></li>
          <li><Link href="/stosveznam">Što sve znam?</Link></li>
          <li><Link href="/slusam">Slušam</Link></li>
          <li><Link href="/izgovaram">Izgovaram</Link></li>
          <li><Link href="/sva4ponavljam">Sva 4 ponavljam</Link></li>
          <li><Link href="/glagoli">Glagoli u mreži</Link></li>
        </ul>
      </div>
    </nav>
  );
}