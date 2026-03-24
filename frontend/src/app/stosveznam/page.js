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
      <Grid items={items} />
    </main>
  );
}