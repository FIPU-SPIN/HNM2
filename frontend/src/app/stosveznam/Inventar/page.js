"use client";

import Image from "next/image";
import Quiz from "../../components/Quiz";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function InventarPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [kviz, setKviz] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const currentAudioRef = useRef(null);

  // Dohvati kviz4 s backenda
  useEffect(() => {
    fetch("http://localhost:5000/api/quiz/kviz4")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.order - b.order);
        setKviz(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Greska:", err);
        setLoading(false);
      });
  }, []);

  // Funkcija za reprodukciju zvuka
  const playSound = (soundName) => {
    if (!soundName) return;
    
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    
    const audio = new Audio(`/assets/fix_sounds/${soundName}.wav`);
    currentAudioRef.current = audio;
    audio.play().catch(error => console.error("Greska pri reprodukciji:", error));
  };

  const playZvukIzZnaka = (znak) => {
    const mapa = {
      "ȁ": "z1_ks",
      "ȃ": "z2_ds",
      "à": "z4_ku",
      "á": "z3_du",
      "ã": "z7_ak",
      "ā": "z5_znd",
      "a̍": "z9_ud",
    };
    const soundName = mapa[znak];
    if (soundName) {
      playSound(soundName);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleZnakClick = (e) => {
      const target = e.currentTarget;
      const zvuk = target.getAttribute("data-zvuk");
      if (zvuk) {
        playSound(zvuk);
      } else {
        const znak = target.textContent.trim();
        playZvukIzZnaka(znak);
      }
    };

    const handleGumbClick = (e) => {
      const target = e.currentTarget;
      const zvuk = target.getAttribute("data-zvuk");
      if (zvuk) {
        playSound(zvuk);
      }
    };

    const zvukLinkovi = document.querySelectorAll(".zvuk-link");
    zvukLinkovi.forEach((el) => {
      el.removeEventListener("click", handleZnakClick);
      el.addEventListener("click", handleZnakClick);
      el.style.cursor = "pointer";
    });

    const zvukGumbi = document.querySelectorAll(".zvuk-gumb");
    zvukGumbi.forEach((gumb) => {
      gumb.removeEventListener("click", handleGumbClick);
      gumb.addEventListener("click", handleGumbClick);
    });

    return () => {
      zvukLinkovi.forEach((el) => {
        el.removeEventListener("click", handleZnakClick);
      });
      zvukGumbi.forEach((gumb) => {
        gumb.removeEventListener("click", handleGumbClick);
      });
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
      }
    };
  }, []);

  return (
    <main className="bodydruga">

      {/* NASLOVNI DIO */}
      <div className="naslovna-rijec">
        <div className="content-container rijec">
          <h1 className="glavni-naslov">Inventar</h1>
          <div className="slika-rijec">
            <Image
              src="/assets/images/mjesto.png"
              alt="Naslovna slika stranice inventar"
              width={1000}
              height={800}
              priority
            />
          </div>
          <p className="uvodna-definicija">
                Naglasak je isticanje jednoga sloga u odnosu na druge slogove unutar rijeci.
                Naglasak je istodobni ostvaraj jacine (siline, intenziteta), trajanja (kvantitete) i tona (tonske visine).
          </p>
        </div>
      </div>

      <div className="inventar-sadrzaj">
        <div className="inventar-intro">
          <p>
            U hrvatskome standardnom jeziku 4 su naglaska. Naglasci u visinskome sustavu mogu biti dugi ili kratki, silazni ili uzlazni.
            Iza naglaska moze biti i zanaglasna duzina. U izgovoru se zanaglasna duzina sve vise reducira ili nestaje, ostvaruju je
            samo oni koji je i inace imaju u svome polaznom idiomu (nešto više u južnoj regiji nego istočnoj).
          </p>
          <p className="napomena-za-zvuk">
            <strong>📢 Poslusajte kako zvuče u rijecima klikom na naglašeni vokal.</strong>
          </p>
        </div>

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
                <td className="zvuk-link" data-zvuk="z1_ks">ȁ</td>
                <td className="zvuk-link" data-zvuk="z2_ds">ȃ</td>
                <td>ă</td>
                <td>ā</td>
              </tr>
              <tr>
                <td>Uzlazni</td>
                <td className="zvuk-link" data-zvuk="z4_ku">à</td>
                <td className="zvuk-link" data-zvuk="z3_du">á</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className="tablica-napomena"><em>🔊 Klikom na označene znakove (ȁ, ȃ, à, á) čujete izgovor</em></p>
        </div>

        <div className="primjeri-rijeci">
          <h3>Primjeri u rijecima</h3>
          <div className="primjeri-grid">
            <div className="primjer-kartica"><span className="naglasak-znak zvuk-link" data-zvuk="z1_ks">ȁ</span><span className="naglasak-ime">kratkosilazni</span><div className="rijeci">macka, kisa</div><button className="zvuk-gumb" data-zvuk="z1_ks">🔊</button></div>
            <div className="primjer-kartica"><span className="naglasak-znak zvuk-link" data-zvuk="z2_ds">ȃ</span><span className="naglasak-ime">dugosilazni</span><div className="rijeci">majka, sunce</div><button className="zvuk-gumb" data-zvuk="z2_ds">🔊</button></div>
            <div className="primjer-kartica"><span className="naglasak-znak zvuk-link" data-zvuk="z3_du">á</span><span className="naglasak-ime">dugouzlazni</span><div className="rijeci">macak, trava</div><button className="zvuk-gumb" data-zvuk="z3_du">🔊</button></div>
            <div className="primjer-kartica"><span className="naglasak-znak zvuk-link" data-zvuk="z4_ku">à</span><span className="naglasak-ime">kratkouzlazni</span><div className="rijeci">magla, rosa</div><button className="zvuk-gumb" data-zvuk="z4_ku">🔊</button></div>
            <div className="primjer-kartica"><span className="naglasak-znak zvuk-link" data-zvuk="z5_znd">ā</span><span className="naglasak-ime">zanaglasna duzina</span><div className="rijeci">mornar, mjesec</div><button className="zvuk-gumb" data-zvuk="z5_znd">🔊</button></div>
            <div className="primjer-kartica"><span className="naglasak-znak zvuk-link" data-zvuk="z6_znk">ă</span><span className="naglasak-ime">kracina</span><div className="rijeci">mandarina</div><button className="zvuk-gumb" data-zvuk="z6_znk">🔊</button></div>
          </div>
        </div>

        <div className="ostali-prozodemi">
          <h2>Ostali prozodemi</h2>
          <p>Osim prozodema koji pripadaju propisanome standardnom naglasnom sustavu postoje i prozodemi koji su specificni za neke dijalekte i gradske govore. Specifican naglasak koji se pojavljuje u govorima svih triju hrvatskih narjecja, a nije dio standarda jest <strong>akut (ã)</strong>.</p>
          <p>Razlika je izmedu standardnoga jezika i dijalekata i u tome što se u nekim dijalektima pojavljuje <strong>prednaglasna duzina (ā)</strong>.</p>
          <p>U mnogim govorima koji imaju jednonaglasni ili dvonaglasni udarni sustav pojavljuje se <strong>udarni (dinamicki) naglasak</strong>. Biljezi se ravnom, okomitom crtom, znakom za silinu (a̍).</p>

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
                  <td className="zvuk-link" data-zvuk="z7_ak">ã</td>
                  <td>mul, susa, balun, odavna</td>
                  <td><button className="zvuk-gumb mali" data-zvuk="z7_ak">🔊</button></td>
                </tr>
                <tr>
                  <td>prednaglasna duzina</td>
                  <td className="zvuk-link" data-zvuk="z8_pnd">ā</td>
                  <td>trava, necu, vojnici, glave, priblizi</td>
                  <td><button className="zvuk-gumb mali" data-zvuk="z8_pnd">🔊</button></td>
                </tr>
                <tr>
                  <td>udarni naglasak</td>
                  <td className="zvuk-link" data-zvuk="z9_ud">a̍</td>
                  <td>kisa, sunce, trava, rosa</td>
                  <td><button className="zvuk-gumb mali" data-zvuk="z9_ud">🔊</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="napomena-za-zvuk"><em>🔊 Klikom na znakove ili gumbe cujete primjere</em></p>
        </div>

        <div className="biljezenje-naglasaka">
          <h2>Biljezenje naglasaka na racunalu</h2>
          <p>Zelite li i Vi biljeziti naglaske pisući na racunalu, u Word dokumentu odaberite "Umetanje", zatim "Simbol" te ih potrazite medu fontovima. Uobicajeni fontovi, kao što su Times New Roman ili Arial, imaju samoglasnike sa znakovima za naglaske, no nemaju, primjerice, slogotvorni r s kratkouzlaznim naglaskom ili sa zanaglasnom duzinom.</p>
          <p>U dijalektoloskim se transkripcijama najcesce upotrebljava font <strong>ZRCola</strong>, koji se moze besplatno preuzeti na mreznoj stranici znanstvenoistrazivackoga centra Slovenske akademije znanosti i umjetnosti u Ljubljani.</p>
          
          <div className="zrcola-slika-container">
            <Image src="/assets/images/Picture2.png" alt="ZRCola font naslovnica" width={600} height={400} className="zrcola-slika" />
            <p className="slika-napomena"><em>Slika 08a - Naslovnica mrezne stranice ZRCola</em></p>
          </div>
          
          <div className="link-container">
            <a href="https://zrcola.zrc-sazu.si/" target="_blank" rel="noopener noreferrer" className="zrcola-link-button">🔗 ZRCola</a>
          </div>
          <p>Font je razvio Peter Weiss. U njemu se nalaze i naglasni znakovi koji nedostaju u uobicajenim fontovima.</p>
        </div>

        <div className="ipa-tablica">
          <div className="ipa-znakovlje">
            <h2>Medunarodno fonetsko znakovlje (IPA)</h2>
            <p>Mnogo je nacina biljezenja naglasaka, no u našem je jezikoslovlju uvrijezeno tradicionalno znakovlje, a uz njega se u znanstvenim radovima javlja i znakovlje Medunarodne fonetske organizacije (IPA), u kojemu se odvojeno prikazuju trajanje i ton. Trajanje moze biti kratko (a) ili dugo (a:), a ton uzlazan (ă) ili silazan (â).</p>
          </div>
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
              <tr><td>kratkosilazni naglasak</td><td>kisa</td><td>kisa</td></tr>
              <tr><td>kratkouzlazni naglasak</td><td>rosa</td><td>rosa</td></tr>
              <tr><td>dugosilazni naglasak</td><td>sunce</td><td>sunce</td></tr>
              <tr><td>dugouzlazni naglasak</td><td>trava</td><td>trava</td></tr>
              <tr><td>zanaglasna duzina</td><td>mjese c</td><td>mjese c</td></tr>
            </tbody>
          </table>
        </div>

        <div className="fonetska-analiza">
          <h2>Fonetska analiza naglasaka</h2>
          <p>Naglasak rijeci sastoji se od triju sastavnica: jacine, trajanja i tona. Jacina je najvaznija osobina naglaska u znacenju istaknutosti. Za ostvaraj silaznoga naglaska dovoljan je jedan slog. Uzlazni se pak naglasci ostvaruju u dva sloga: prvi je slog malo vece jacine, a visoki ton prostire se i na zanaglasni slog.</p>
          <p>S obzirom na jacinu slogovi mogu biti naglašeni ili nenaglašeni, s obzirom na trajanje mogu biti dugi ili kratki, a s obzirom na visinu naglasci mogu biti uzlazni ili silazni.</p>

          <div className="praat-sekcija">
            <p className="napomena-za-zvuk">
              <strong>📢 Poslusajte izgovor rijeci: kisa, sunce, trava, rosa i promotrite sliku.</strong>
              <br />
              <button className="zvuk-gumb praat-zvuk-gumb" data-zvuk="zvuk-1-2-1" onClick={() => playSound("zvuk-1-2-1")}>🔊 Poslusaj izgovor</button>
            </p>
            
            <div className="praat-slike-container">
              <Image src="/assets/images/Picture3.png" alt="Akusticki prikaz naglasaka u programu Praat" width={800} height={500} className="praat-slika" />
              <p className="slika-napomena"><em>Slika 08b - Akusticki prikaz naglasaka u programu Praat</em></p>
              <div className="praat-link-container">
                <a href="https://www.fon.hum.uva.nl/praat/" target="_blank" rel="noopener noreferrer" className="praat-link-button">🔗 Praat - program za fonetsku analizu</a>
              </div>
            </div>

            <p className="praat-opis">Slika prikazuje tijek tona, tijek intenziteta i trajanje vokala u rijecima kisa, sunce, trava i rosa. Prve dvije rijeci izgovorene su sa silaznim naglaskom, a druge dvije s uzlaznim naglaskom na prvom slogu; prva i zadnja izgovorene su s kratkim naglašenim vokalom, a druga i treca s dugim. Rijeci je izgovorila spikerica ciji je osnovni ton oko 170 Hz, a pripada rasponu tona koji nazivamo altom. Okomitim crtama obiljezeni su pocetak i kraj naglašenoga i zanaglasnoga sloga u rijecima.</p>
          </div>
        </div>

        <div className="mjesta-provjera">
          <h2>Mjesta za provjeru naglasnih podataka</h2>
          <ul className="link-lista">
            <li><a href="https://hjp.znanje.hr/" target="_blank" rel="noopener noreferrer">🔗 Hrvatski jezicni portal (HJP)</a></li>
            <li><a href="https://www.rjecnici.hr/" target="_blank" rel="noopener noreferrer">🔗 Veliki rjecnik hrvatskoga standardnog jezika (VRH)</a></li>
            <li><a href="https://rjecnik.hr/" target="_blank" rel="noopener noreferrer">🔗 Skolski rjecnik hrvatskoga jezika</a></li>
            <li><a href="http://ihjj.hr/mreznik/" target="_blank" rel="noopener noreferrer">🔗 Mreznik - Institut za hrvatski jezik i jezikoslovlje</a></li>
          </ul>
        </div>
      </div>

      {/* KVIZ DIO */}
      {!showQuiz ? (
        <div className="kviz-cta">
          <h3>🧠 Provjeri svoje znanje</h3>
          <p>Nakon lekcije pokreni kratki kviz i provjeri koliko dobro razumijes naglasne sustave.</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowQuiz(true);
            }}
            className="start-quiz-btn"
            type="button"
          >
            Pokreni kviz
          </button>
        </div>
      ) : (
        <div className="kviz-container">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowQuiz(false);
            }}
            className="zatvori-kviz-btn"
            type="button"
          >
            ✕ Zatvori kviz
          </button>
          {loading && <p>Ucitavanje kviza...</p>}
          {!loading && kviz.length === 0 && <p>Nema pitanja za ovaj kviz.</p>}
          {!loading && kviz.length > 0 && <Quiz steps={kviz} />}
        </div>
      )}

    </main>
  );
}