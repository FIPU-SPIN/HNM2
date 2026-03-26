import Grid from "../components/Grid";

export default function StoSveZnamPage() {
  const items = [
    {
      href: "/stosveznam/GovornaRijec",
      img: "/assets/images/Govorna_riječ.png",
      label: "Govorna riječ",
      className: "slike2",
    },
    {
      href: "/stosveznam/KojimNaglascima",
      img: "/assets/images/Kojim_naglascima_govorim.png",
      label: "Kojim naglascima govorim",
      className: "slike2",
    },
    {
      href: "/stosveznam/Inventar",
      img: "/assets/images/Inventar.png",
      label: "Inventar",
      className: "slike2",
    },
    {
      href: "/stosveznam/Distribucijska",
      img: "/assets/images/Distibucijska_pravila.png",
      label: "Distribucijska pravila",
      className: "slike2",
    },
    {
      href: "/stosveznam/paradigma",
      img: "/assets/images/Naglasci_u_paradigmi.png",
      label: "Naglasci u paradigmi",
      className: "slike2 sredina",
    },
  ];

  return (
    <main className="bodydruga">

      <div className="stosveznam-intro">
        <h1>Općenito o naglasku</h1>

        <p>
          Ovo je mjesto za provjeru znanja o naglascima i naglasnoj normi, o
          naglasnim sustavima, varijetetima i pravilima u hrvatskome jeziku.
          Vježbe su podijeljene u nekoliko cjelina i tema: <i>Koji je Vaš naglasni
          sustav?; Naglasni inventar; Distribucijska pravila; Govorna riječ s
          klitikama; Naglasak u paradigmi. </i> Nakon ove razine spremni ste za
          uvježbavanje percepcije i produkcije naglasaka.
        </p>
      </div>
      
      <Grid items={items} />
    </main>
  );
}