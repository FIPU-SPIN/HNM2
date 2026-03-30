"use client";

import Image from "next/image";

export default function DistribucijskaPravilaPage() {
  return (
    <main className="bodydruga">
      

      <div className="naslovna">
        <div className="content-container distribucijska">
          
          <h1 className="glavni-naslov">Distribucijska pravila</h1>

          <div className="slika-distribucijska">
            <Image
              src="/assets/images/Distibucijska_pravila.png"
              alt="Naslovna slika stranice distribucijska pravila"
              width={1000}
              height={800}
              priority
            />
          </div>

        </div>
      </div>

      <div className="inventar-intro">

      <h2 className="distribucijska-naslov">
        Tri su osnovna pravila raspodjele ili distribucije prozodema u standardnom jeziku:
      </h2>

      <div className="distribucijska-lista">

        <p className="pravilo">
          <strong>1.</strong> Jednosložne riječi mogu imati samo silazne naglaske 
          (pȁs, pȗž).
        </p>

        <p className="pravilo">
          <strong>2.</strong> Višesložne riječi mogu imati bilo koji od četiriju naglasaka na prvom slogu 
          (kȉša, ròsa, sȗnce, tráva), na središnjem slogu dolaze uzlazni naglasci 
          (slobòda, mandarína), a na zadnjem slogu najčešće nema naglaska. 
          U određenim slučajevima mogu se javiti dublete: silazni naglasci i na središnjem slogu 
          (poljoprȉvreda, jugozȃpad) i na zadnjem slogu (vijadȕkt, rokokȏ).
        </p>

        <p className="pravilo">
          <strong>3.</strong> Dužina se ostvaruje iza naglaska i pripada ili osnovi riječi 
          (kàpūt, dȍdīr, kȁjkāvka, ȕ grād), ili sufiksima / sufiksalnim morfemima 
          (mȍmčād, rȁdōst), ili nastavcima / gramatičkim morfemima 
          (bez sèstrē, sa sèstrōm, bez sestárā, jȃkōga, plȇšēmo).
        </p>

      </div>

    </div>

    </main>
  );
}