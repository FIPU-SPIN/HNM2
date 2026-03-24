import Grid from "../components/Grid";

export default function SlusamPage() {
  const items = [
    {
      href: "/slusam/mjesto",
      img: "/assets/images/mjesto.png",
      label: "Mjesto, ton i trajanje"
    },
    {
      href: "/slusam/zanaglasna",
      img: "/assets/images/zanaglasna.png",
      label: "Naglasci i zanaglasna dužina"
    },
    {
      href: "/slusam/kojim-naglascima",
      img: "/assets/images/uporaba.png",
      label: "Naglasci u uporabi",
      className: "sredina"
    }
  ];

  return (
    <main className="bodyslusam">
      <Grid items={items} />
    </main>
  );
}