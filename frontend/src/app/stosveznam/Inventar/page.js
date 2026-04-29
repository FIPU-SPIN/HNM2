"use client";

import Image from "next/image";
import Quiz from "../../components/Quiz";
import kviz4 from "../../data/kviz4";
import { useState } from "react";

export default function InventarPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <main className="bodydruga">
      {/* NASLOVNI DIO */}
      <div className="naslovna-inventar">
        <div className="content-container inventar">
          <h1 className="glavni-naslov">Inventar</h1>

          <div className="slika-inventar">
            <Image
              src="/assets/images/mjesto.png"
              alt="Naslovna slika stranice inventar"
              width={1000}
              height={800}
              priority
            />
          </div>

          <p className="uvodna-definicija">
            <i>
              Naglasak je isticanje jednoga sloga u odnosu na druge slogove unutar riječi.
              Naglasak je istodobni ostvaraj jačine (siline, intenziteta), trajanja (kvantitete) i tona (tonske visine).
            </i>
          </p>

        </div>
      </div>
       
      {/* GLAVNI SADRŽAJ */}
      <div className="inventar-sadrzaj">
        {/* UVODNI TEKST */}
        <div className="inventar-intro">
          <p>
            U hrvatskome standardnom jeziku 4 su naglaska. Naglasci u visinskome sustavu mogu biti dugi ili kratki, silazni ili uzlazni. 
            Iza naglaska može biti i zanaglasna dužina. U izgovoru se zanaglasna dužina sve više reducira ili nestaje, ostvaruju je 
            samo oni koji je i inače imaju u svome polaznom idiomu (nešto više u južnoj regiji nego istočnoj).
          </p>
          <p className="napomena-za-zvuk">
            <strong>📢 Poslušajte kako zvuče u riječima klikom na naglašeni vokal.</strong>
          </p>
        </div>

        {/* GLAVNA TABLICA - VISINSKI NAGLASNI SUSTAV */}
        <div className="inventar-tablica">
          <h3>Visinski naglasni sustav</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th colSpan={2}>Naglašeni slog</th>
                <th colSpan={2}>Nenaglašeni slogovi</th>
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
                <td className="zvuk-link" data-zvuk="kratkosilazni">ȁ</td>
                <td className="zvuk-link" data-zvuk="dugosilazni">ȃ</td>
                <td>ă</td>
                <td>ā</td>
              </tr>
              <tr>
                <td>Uzlazni</td>
                <td className="zvuk-link" data-zvuk="kratkouzlazni">à</td>
                <td className="zvuk-link" data-zvuk="dugouzlazni">á</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className="tablica-napomena">
            <em>🔊 Zvuk 1-2-2 - klikom na označene znakove (ȁ, ȃ, à, á) čujete izgovor</em>
          </p>
        </div>

        {/* PRIMJERI S RIJEČIMA */}
        <div className="primjeri-rijeci">
          <h3>Primjeri u riječima</h3>
          <div className="primjeri-grid">
            <div className="primjer-kartica">
              <span className="naglasak-znak">ȁ</span>
              <span className="naglasak-ime">kratkosilazni</span>
              <div className="rijeci">mȁčka, kȉša</div>
              <button className="zvuk-gumb" data-zvuk="kratkosilazni">🔊</button>
            </div>
            <div className="primjer-kartica">
              <span className="naglasak-znak">ȃ</span>
              <span className="naglasak-ime">dugosilazni</span>
              <div className="rijeci">mȃjka, sȗnce</div>
              <button className="zvuk-gumb" data-zvuk="dugosilazni">🔊</button>
            </div>
            <div className="primjer-kartica">
              <span className="naglasak-znak">á</span>
              <span className="naglasak-ime">dugouzlazni</span>
              <div className="rijeci">máčak, tráva</div>
              <button className="zvuk-gumb" data-zvuk="dugouzlazni">🔊</button>
            </div>
            <div className="primjer-kartica">
              <span className="naglasak-znak">à</span>
              <span className="naglasak-ime">kratkouzlazni</span>
              <div className="rijeci">màgla, ròsa</div>
              <button className="zvuk-gumb" data-zvuk="kratkouzlazni">🔊</button>
            </div>
            <div className="primjer-kartica">
              <span className="naglasak-znak">ā</span>
              <span className="naglasak-ime">zanaglasna dužina</span>
              <div className="rijeci">mòrnār, mjȅsēc</div>
              <button className="zvuk-gumb" data-zvuk="zanaglasna-duzina">🔊</button>
            </div>
            <div className="primjer-kartica">
              <span className="naglasak-znak">ă / a</span>
              <span className="naglasak-ime">kračina</span>
              <div className="rijeci">măndărínă / mandarína</div>
              <button className="zvuk-gumb" data-zvuk="kracina">🔊</button>
            </div>
          </div>
        </div>

        {/* OSTALI PROZODEMI */}
        <div className="ostali-prozodemi">
          <h2>Ostali prozodemi</h2>
          <p>
            Osim prozodema koji pripadaju propisanome standardnom naglasnom sustavu postoje i prozodemi koji su specifični za neke 
            dijalekte i gradske govore. Specifičan naglasak koji se pojavljuje u govorima svih triju hrvatskih narječja, a nije dio 
            standarda jest <strong>akut (ã)</strong>. Akut je u nekim govorima sličan dugouzlaznome naglasku, no osnovna je razlika 
            da se akut može ostvariti na jednom slogu, pa stoga i na jednosložnim riječima, i na posljednjem slogu u riječi.
          </p>
          <p>
            Razlika je između standardnoga jezika i dijalekata i u tome što se u nekim dijalektima pojavljuje <strong>prednaglasna dužina (ā)</strong>.
          </p>
          <p>
            U mnogim govorima koji imaju jednonaglasni ili dvonaglasni udarni sustav pojavljuje se <strong>udarni (dinamički) naglasak</strong>. 
            Bilježi se ravnom, okomitom crtom, znakom za silinu (a̍). Udarni se naglasak u literaturi katkad bilježi i sa znakom za silinu 
            ispred vokala (ˈa). Kod nekih se govornika može razlikovati u trajanju (postoji razlika kratkoga i dugoga naglašenog vokala), 
            no u ovom ćemo priručniku i duge i kratke udarne naglaske bilježiti tim istim znakom.
          </p>

          <div className="prozodemi-tablica">
            <h3>Pregled ostalih prozodema</h3>
            <table>
              <thead>
                <tr>
                  <th>Prozodem</th>
                  <th>Znak</th>
                  <th>Primjeri</th>
                  <th>Zvuk</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>akut</td>
                  <td className="zvuk-link" data-zvuk="akut">ã</td>
                  <td>mũl, sũša, balũn, odãvna</td>
                  <td><button className="zvuk-gumb mali" data-zvuk="akut">🔊</button></td>
                </tr>
                <tr>
                  <td>prednaglasna dužina</td>
                  <td className="zvuk-link" data-zvuk="prednaglasna">ā</td>
                  <td>trāvȁ, nēćȕ, vojnīcȉ, glāvẽ, priblīžȋ</td>
                  <td><button className="zvuk-gumb mali" data-zvuk="prednaglasna">🔊</button></td>
                </tr>
                <tr>
                  <td>udarni naglasak</td>
                  <td className="zvuk-link" data-zvuk="udarni">a̍</td>
                  <td>ki̍ša, su̍nce, tra̍va, ro̍sa</td>
                  <td><button className="zvuk-gumb mali" data-zvuk="udarni">🔊</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="napomena-za-zvuk">
            <em>🔊 Zvuk 1-2-3 - klikom na znakove ili gumbe čujete primjere</em>
          </p>
        </div>

        {/* BILJEŽENJE NAGLASAKA */}
        <div className="biljezenje-naglasaka">
          <h2>Bilježenje naglasaka na računalu</h2>
          <p>
            Želite li i Vi bilježiti naglaske pišući na računalu, u Word dokumentu odaberite "Umetanje", zatim "Simbol" te ih potražite 
            među fontovima. Uobičajeni fontovi, kao što su Times New Roman ili Arial, imaju samoglasnike sa znakovima za naglaske, no 
            nemaju, primjerice, slogotvorni r s kratkouzlaznim naglaskom ili sa zanaglasnom dužinom.
          </p>
          <p>
            U dijalektološkim se transkripcijama najčešće upotrebljava font <strong>ZRCola</strong>, koji se može besplatno preuzeti na 
            mrežnoj stranici znanstvenoistraživačkoga centra Slovenske akademije znanosti i umjetnosti u Ljubljani:
          </p>
          <p className="link-container">
            <a href="https://zrcola.zrc-sazu.si/" target="_blank" rel="noopener noreferrer">
              🔗 https://zrcola.zrc-sazu.si/
            </a>
          </p>
          <p>
            Font je razvio Peter Weiss. U njemu se nalaze i naglasni znakovi koji nedostaju u uobičajenim fontovima.
          </p>
        </div>

        {/* IPA ZNAKOVLJE I TABLICA*/}
  
          <div className="ipa-tablica">
            <div className="ipa-znakovlje">
          <h2>Međunarodno fonetsko znakovlje (IPA)</h2>
          <p>
            Mnogo je načina bilježenja naglasaka, no u našem je jezikoslovlju uvriježeno tradicionalno znakovlje, a uz njega se u 
            znanstvenim radovima javlja i znakovlje Međunarodne fonetske organizacije (IPA), u kojemu se odvojeno prikazuju trajanje i ton. 
            Trajanje može biti kratko (a) ili dugo (a:), a ton uzlazan (ă) ili silazan (â).
          </p>
            <h3>Usporedba znakovlja</h3>
            <table>
              <thead>
                <tr>
                  <th>Prozodem</th>
                  <th>Tradicionalno znakovlje</th>
                  <th>IPA znakovlje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>kratkosilazni naglasak</td>
                  <td>kȉša</td>
                  <td>kîša</td>
                </tr>
                <tr>
                  <td>kratkouzlazni naglasak</td>
                  <td>ròsa</td>
                  <td>rŏsa</td>
                </tr>
                <tr>
                  <td>dugosilazni naglasak</td>
                  <td>sȗnce</td>
                  <td>sû:nce</td>
                </tr>
                <tr>
                  <td>dugouzlazni naglasak</td>
                  <td>tráva</td>
                  <td>tră:va</td>
                </tr>
                <tr>
                  <td>zanaglasna dužina</td>
                  <td>mjȅsēc</td>
                  <td>mjêse:c</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FONETSKA ANALIZA */}
        <div className="fonetska-analiza">
          <h2>Fonetska analiza naglasaka</h2>
          <p>
            Naglasak riječi sastoji se od triju sastavnica (elemenata, osobina): jačine (siline, intenziteta, jakosti), trajanja (kvantitete) 
            i tona (tonske visine i/ili kretanja tona). Jačina je najvažnija osobina naglaska u značenju istaknutosti. To je mjesto/slog na 
            kojem se naglasak ostvaruje. Za ostvaraj silaznoga naglaska dovoljan je jedan slog. Uzlazni se pak naglasci ostvaruju u dva sloga: 
            prvi je slog malo veće jačine, a visoki ton prostire se i na zanaglasni slog. Upravo zbog toga prostiranja tona na zanaglasni slog 
            uzlazni se naglasci ne ostvaruju na zadnjem slogu riječi.
          </p>
          <p>
            S obzirom na jačinu slogovi mogu biti naglašeni ili nenaglašeni, s obzirom na trajanje mogu biti dugi ili kratki, a s obzirom na 
            visinu naglasci mogu biti uzlazni ili silazni.
          </p>

          <div className="praat-sekcija">
            <p className="napomena-za-zvuk">
              <strong>📢 Poslušajte izgovor riječi: kiša, sunce, trava, rosa i promotrite sliku.</strong>
              <br />
              <em>🔊 Zvuk 1-2-1</em>
            </p>
            <div className="praat-slike-placeholder">
              <div className="placeholder-box">
                <p>📊 Slika iz programa Praat</p>
                <p className="placeholder-napomena">
                  (Prikaz tijeka tona, intenziteta i trajanja vokala u riječima kiša, sunce, trava, rosa)
                </p>
                <a href="https://www.fon.hum.uva.nl/praat/" target="_blank" rel="noopener noreferrer">
                  🔗 https://www.fon.hum.uva.nl/praat/
                </a>
              </div>
            </div>
            <p className="praat-opis">
              Slika prikazuje tijek tona, tijek intenziteta i trajanje vokala u riječima kiša, sunce, trava i rosa. Prve dvije riječi 
              izgovorene su sa silaznim naglaskom, a druge dvije s uzlaznim naglaskom na prvom slogu; prva i zadnja izgovorene su s kratkim 
              naglašenim vokalom, a druga i treća s dugim. Riječi je izgovorila spikerica čiji je osnovni ton oko 170 Hz, a pripada rasponu 
              tona koji nazivamo altom. Okomitim crtama obilježeni su početak i kraj naglašenoga i zanaglasnoga sloga u riječima.
            </p>
          </div>
        </div>

        {/* MJESTA ZA PROVJERU */}
        <div className="mjesta-provjera">
          <h2>Mjesta za provjeru naglasnih podataka</h2>
          <ul className="link-lista">
            <li>
              <a href="https://hjp.znanje.hr/" target="_blank" rel="noopener noreferrer">
                🔗 Hrvatski jezični portal (HJP)
              </a>
            </li>
            <li>
              <a href="https://www.rjecnici.hr/" target="_blank" rel="noopener noreferrer">
                🔗 Veliki rječnik hrvatskoga standardnog jezika (VRH) - Rječnici Školske knjige
              </a>
            </li>
            <li>
              <a href="https://rjecnik.hr/" target="_blank" rel="noopener noreferrer">
                🔗 Školski rječnik hrvatskoga jezika
              </a>
            </li>
            <li>
              <a href="http://ihjj.hr/mreznik/" target="_blank" rel="noopener noreferrer">
                🔗 Mrežnik - Institut za hrvatski jezik i jezikoslovlje
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="kviz-cta">
        <h3>🧠 Provjeri svoje znanje</h3>

        <p>
          Nakon lekcije pokreni kratki kviz i provjeri koliko dobro razumiješ naglasne sustave.
        </p>

        <button
          onClick={() => setShowQuiz(true)}
          className="start-quiz-btn"
        >
          Pokreni kviz
        </button>
      </div>

      {showQuiz && <Quiz steps={kviz4} />}
    </main>
  );
}