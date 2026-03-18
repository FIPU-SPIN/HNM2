import Link from "next/link";

export default function SlusamPage() {
  return (
    <main className="bodyslusam2">
      <header className="header-slike">
        <Link href="#">
          <img src="/assets/images/kisa.png" alt="slika 1" />
        </Link>
        <Link href="#">
          <img src="/assets/images/sunce.png" alt="slika 2" />
        </Link>
        <Link href="#">
          <img src="/assets/images/trava.png" alt="slika 3" />
        </Link>
        <Link href="#">
          <img src="/assets/images/rosa.png" alt="slika 4" />
        </Link>
      </header>

      <nav className="main-nav">
        <div className="nav-row">
          <span className="navnaslov">
            <a href="/">Hrvatski naglasci na mreži</a>
          </span>

          <ul>
            <li className="dropdown">
              <a href="/oprojektu">O projektu</a>
              <ul className="dropdown-menu">
                <li><a href="/oprojektu/ciljevi">Ciljevi</a></li>
                <li><a href="/oprojektu/rezultati">Rezultati</a></li>
                <li><a href="/oprojektu/tim">Tim</a></li>
              </ul>
            </li>
            <li><a href="/stosveznam">Što sve znam?</a></li>
            <li><a href="/slusam">Slušam</a></li>
            <li><a href="/izgovaram">Izgovaram</a></li>
            <li><a href="/sva4ponavljam">Sva 4 ponavljam</a></li>
            <li><a href="/glagoli">Glagoli u mreži</a></li>
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

      <div className="quiz-wrapper">
        <div id="quiz-intro" className="quiz-intro">
          <h2 className="kviz">Pogodi naglasak</h2>
          <p>
            U ovom kratkom kvizu provjerit ćeš možeš li prepoznati
            hrvatske naglaske u riječima.
          </p>
          <button id="start-quiz">Započni</button>
        </div>

        <div id="quiz-ready" className="quiz-intro" style={{ display: "none" }}>
          <h2>🎧 Jeste li spremni?</h2>
          <p>
            Čekaju te <strong>3 pitanja</strong>. Klikni kada si spreman/na!
          </p>
          <button id="begin-quiz">Krenimo!</button>
        </div>

        <div id="quiz">
          <p id="question"></p>
          <div id="answers">
            <button data-answer="kratkosilazni"><b>Kratkosilazni</b></button>
            <button data-answer="kratkouzlazni"><b>Kratkouzlazni</b></button>
            <button data-answer="dugosilazni"><b>Dugosilazni</b></button>
            <button data-answer="dugouzlazni"><b>Dugouzlazni</b></button>
          </div>
          <p id="feedback"></p>
          <p id="progress"></p>
        </div>
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