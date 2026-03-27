"use client";

import Image from "next/image";

export default function StoSveZnamPage() {
  return (
    <main className="bodydruga">

      <div className="naslovna">
        <div className="content-container stosveznam">
          
          <h1 className="glavni-naslov">Što sve znam</h1>

          <div className="slika-stosveznam">
            <Image
              src="/assets/images/stosveznam.jpg"
              alt="Naslovna slika stranice sto sve znam"
              width={1000}
              height={800}
              priority
            />
          </div>

        </div>
      </div>

      <div className="stosveznam-intro">
        <h2>Općenito o naglasku</h2>
        <p>
          Ovo je mjesto za provjeru znanja o naglascima i naglasnoj normi, o
          naglasnim sustavima, varijetetima i pravilima u hrvatskome jeziku.
          Vježbe su podijeljene u nekoliko cjelina i tema:{" "}
          <i>
            Koji je Vaš naglasni sustav?; Naglasni inventar; Distribucijska
            pravila; Govorna riječ s klitikama; Naglasak u paradigmi.
          </i>{" "}
          Nakon ove razine spremni ste za uvježbavanje percepcije i produkcije
          naglasaka.
        </p>
      </div>

    </main>
  );
}