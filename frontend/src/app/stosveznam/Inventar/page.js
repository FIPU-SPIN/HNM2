"use client";

import Image from "next/image";

export default function InventarPage() {
  return (
    <main className="bodydruga">
      

      <div className="naslovna-inventar">
        <div className="content-container inventar">
          
          <h1 className="glavni-naslov">Inventar</h1>
          <p><i>Naglasak je isticanje jednoga sloga u odnosu na druge slogove unutar riječi.
                Naglasak je istodobni ostvaraj jačine (siline, intenziteta), trajanja (kvantitete) i tona (tonske visine).</i></p>

          <div className="slika-inventar">
            <Image
              src="/assets/images/mjesto.png"
              alt="Naslovna slika stranice sto sve znam"
              width={1000}
              height={800}
              priority
            />
          </div>

        </div>
      </div>

      <div className="inventar-intro">
        <p>
          U hrvatskome standardnom jeziku 4 su naglaska. Naglasci u visinskome sustavu mogu biti dugi ili kratki, silazni ili uzlazni. 
          Iza naglaska može biti i zanaglasna dužina.</p>
        <div className="inventar-tablica">
  <h3>Visinski naglasni sustav</h3>

        <table>
          <thead>
            <tr>
              <th></th>
              <th colSpan="2">Naglašeni slog</th>
              <th colSpan="2">Nenaglašeni slogovi</th>
            </tr>
            <tr>
              <th>Naglasci</th>
              <th>Kratki</th>
              <th>Dugi</th>
              <th>Kratki</th>
              <th>Zanaglasni dugi</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Silazni</td>
              <td>ȁ</td>
              <td>ȃ</td>
              <td>ă</td>
              <td>ā</td>
            </tr>
            <tr>
              <td>Uzlazni</td>
              <td>à</td>
              <td>á</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

        <p>U izgovoru se zanaglasna dužina sve više reducira ili nestaje, ostvaruju je samo oni koji je i inače imaju u svome polaznom idiomu (nešto više u južnoj regiji nego istočnoj).</p>
      </div>

    </main>
  );
}