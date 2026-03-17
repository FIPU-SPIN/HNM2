export default function MainNav() {
  return (
    <nav className="main-nav">
      <div className="nav-row">
        <span className="navnaslov">
          <a href="/">Hrvatski naglasci na mreži</a>
        </span>

        <ul className="nav-linkovi">
          <li><a href="/oprojektu">O projektu</a></li>
          <li><a href="/stosveznam">Što sve znam?</a></li>
          <li><a href="/slusam">Slušam</a></li>
          <li><a href="/izgovaram">Izgovaram</a></li>
          <li><a href="/sva4ponavljam">Sva 4 ponavljam</a></li>
          <li><a href="/glagoli">Glagoli u mreži</a></li>
        </ul>
      </div>
    </nav>
  );
}