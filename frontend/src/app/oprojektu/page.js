import HeaderImages from "../components/HeaderImg";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import Link from "next/link";

export default function OProjektuPage() {
  return (
    <main className="bodyoprojektu">
      <HeaderImages />
      <MainNav />

      <div className="nav-overlay"></div>
      <nav id="breadcrumbs" className="breadcrumbs"></nav>

      <section className="tri-okvira">
        <Link href="/oprojektu/ciljevi" className="okvir">
          <img src="/assets/images/ciljevi.png" alt="Ciljevi" />
          <h3>Ciljevi</h3>
        </Link>

        <Link href="/oprojektu/rezultati" className="okvir">
          <img src="/assets/images/rezultati.png" alt="Rezultati" />
          <h3>Rezultati</h3>
        </Link>

        <Link href="/oprojektu/tim" className="okvir">
          <img src="/assets/images/tim.png" alt="Tim" />
          <h3>Tim</h3>
        </Link>
      </section>

      <Footer />
    </main>
  );
}