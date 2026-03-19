import HeaderImages from "../components/HeaderImg";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import Link from "next/link";

export default function StoSveZnamPage() {
  return (
    <main className="bodydruga">
      <HeaderImages />
      <MainNav />

      <div className="nav-overlay"></div>
      <nav id="breadcrumbs" className="breadcrumbs"></nav>

      <div className="okvirslike">
        <section className="glavne-slike">
          <div className="slike-grid">
            <div className="slike2">
              <Link href="/govornarijec">
                <img src="/assets/images/Govorna_riječ.png" alt="govor" />
              </Link>
              <p>Govorna riječ</p>
            </div>

            <div className="slike2">
              <Link href="/kojimnaglascima">
                <img src="/assets/images/Kojim_naglascima_govorim.png" alt="koji" />
              </Link>
              <p>Kojim naglascima govorim</p>
            </div>

            <div className="slike2">
              <Link href="/inventar">
                <img src="/assets/images/Inventar.png" alt="inv" />
              </Link>
              <p>Inventar</p>
            </div>

            <div className="slike2">
              <Link href="/distribucijska">
                <img src="/assets/images/Distibucijska_pravila.png" alt="pravilo" />
              </Link>
              <p>Distribucijska pravila</p>
            </div>

            <div className="slike2 sredina">
              <Link href="/paradigma">
                <img src="/assets/images/Naglasci_u_paradigmi.png" alt="paradigma" />
              </Link>
              <p>Naglasci u paradigmi</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}