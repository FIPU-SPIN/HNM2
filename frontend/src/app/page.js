import Grid from "./components/Grid";

export default function HomePage() {
  const items = [
    { href: "/oprojektu", img: "/assets/images/oprojektu.jpg", label: "O projektu" },
    { href: "/stosveznam", img: "/assets/images/stosveznam.jpg", label: "Što sve znam?" },
    { href: "/slusam", img: "/assets/images/slusam.jpg", label: "Slušam" },
    { href: "/izgovaram", img: "/assets/images/izgovaram.jpg", label: "Izgovaram" },
    { href: "/sva4ponavljam", img: "/assets/images/ponavljam.jpg", label: "Ponavljam" },
    { href: "/glagoli", img: "/assets/images/glagoli.jpg", label: "Glagoli u mreži" },
  ];

  return (
    <main className="bodypocetna">
      <Grid items={items} />
    </main>
  );
}