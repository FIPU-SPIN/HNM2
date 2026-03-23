import Link from "next/link";

export default function OProjektuPage() {
  return (
    <main className="bodyoprojektu">
      {/* Breadcrumbs ako želiš */}
      <div className="nav-overlay"></div>
      <nav id="breadcrumbs" className="breadcrumbs"></nav>

      {/* Tri okvira / gumbi za podstranice */}
      <section className="tri-okvira">
        <Link href="/oprojektu" className="okvir">
          <img src="/assets/images/ciljevi.png" alt="O projektu" />
          <h3>O projektu</h3>
        </Link>

        <Link href="/oprojektu/rezultati" className="okvir">
          <img src="/assets/images/rezultati.png" alt="Rezultati projekta" />
          <h3>Rezultati projekta</h3>
        </Link>

        <Link href="/oprojektu/aplikacije" className="okvir">
          <img src="/assets/images/aplikacije.png" alt="O mrežnoj stranici i aplikacijama" />
          <h3>O mrežnoj stranici i aplikacijama</h3>
        </Link>
      </section>

      {/* Opis projekta */}
      <section className="opis-projekta">
        <h2>Dobro došli</h2>
        <p>
          Dobro došli na mrežnu stranicu za učenje naglasaka. Ovdje možete razviti tri osnovne kompetencije: 
          znanje o hrvatskim naglascima, vještinu percepcije naglasaka i intonacije (slušnoga prepoznavanja) 
          i vještinu produkcije naglasaka (izgovora). Stranica je namijenjena učenju i poučavanju naglasaka 
          u osnovnoj i srednjoj školi, na fakultetima koji obrazuju studente za javni govor te učenju i 
          poučavanju hrvatskoga jezika kao stranoga i drugoga jezika. Ona je ujedno i mjesto razvoja 
          mrežnih jezičnih alata za hrvatski jezik.
        </p>
        <p>
          Aplikacije će se nadopunjavati tijekom trajanja četverogodišnjega projekta. Zasad Vam je dostupna 
          prva aplikacija: <strong>Što sve znam?</strong> Provjerite svoje znanje o naglascima, odredite 
          svoj početni naglasni sustav i uživajte u putovanju najizazovnijom normom hrvatskoga standardnog jezika.
        </p>
      </section>
    </main>
  );
}