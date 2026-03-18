import Link from "next/link";

export default function ParadigmaPage() {
  return (
    <main className="bodyslusam2">
      <header className="header-slike">
        <Link href="#"><img src="/assets/images/kisa.png" alt="slika 1" /></Link>
        <Link href="#"><img src="/assets/images/sunce.png" alt="slika 2" /></Link>
        <Link href="#"><img src="/assets/images/trava.png" alt="slika 3" /></Link>
        <Link href="#"><img src="/assets/images/rosa.png" alt="slika 4" /></Link>
      </header>

      <nav className="main-nav">
        <div className="nav-row">
          <span className="navnaslov">
            <Link href="/">Hrvatski naglasci na mreži</Link>
          </span>

          <ul>
            <li className="dropdown">
              <Link href="/oprojektu">O projektu</Link>
              <ul className="dropdown-menu">
                <li><Link href="/oprojektu/ciljevi">Ciljevi</Link></li>
                <li><Link href="/oprojektu/rezultati">Rezultati</Link></li>
                <li><Link href="/oprojektu/tim">Tim</Link></li>
              </ul>
            </li>
            <li><Link href="/stosveznam">Što sve znam?</Link></li>
            <li><Link href="/slusam">Slušam</Link></li>
            <li><Link href="/izgovaram">Izgovaram</Link></li>
            <li><Link href="/sva4ponavljam">Sva 4 ponavljam</Link></li>
            <li><Link href="/glagoli">Glagoli u mreži</Link></li>
          </ul>

          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className="nav-overlay"></div>
      <nav id="breadcrumbs" className="breadcrumbs"></nav>

      <div className="iznadslika">Rečenica</div>

      <div className="okvirslike">
        <section className="glavne-slike">
          <div className="slike-grid">
            {/* Ovdje možeš dodati slike/komponente ako želiš prikazati sadržaj paradigme */}
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footersadrzaj">
          <div className="footerlijevo">
            <img src="/assets/images/knjiga1.png" alt="KSTR" />
            <img src="/assets/images/knjiga2.png" alt="KSTR" />
          </div>
          <div className="footerdesno">
            <a href="#">poveznica1</a>
            <a href="#">poveznica2</a>
          </div>
        </div>
        <div className="footerispod">
          ©2025 Sva prava pridržana.
        </div>
      </footer>
    </main>
  );
}