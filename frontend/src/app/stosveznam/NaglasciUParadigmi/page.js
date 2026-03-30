"use client";

import Image from "next/image";

export default function NaglasciUParadigmiPage() {
  return (
    <main className="bodydruga">
      

      <div className="naslovna">
        <div className="content-container paradigma">
          
          <h1 className="glavni-naslov">Naglasci u paradigmi</h1>

          <div className="slika-paradigma">
            <Image
              src="/assets/images/Naglasci_u_paradigmi.png"
              alt="Naslovna slika stranice naglasci u paradigmi"
              width={1000}
              height={800}
              priority
            />
          </div>

        </div>
      </div>

      <div className="paradigma-intro">
        <h2>Naslov</h2>
        <p>
          Placeholder
        </p>
      </div>

    </main>
  );
}