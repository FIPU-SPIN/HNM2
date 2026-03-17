export default function Grid() {
  const items = [
    { href: "/oprojektu", img: "/assets/images/arena.png", label: "O projektu" },
    { href: "/stosveznam", img: "/assets/images/ruka.png", label: "Što sve znam?" },
    { href: "/slusam", img: "/assets/images/naglasci.png", label: "Slušam" },
    { href: "/izgovaram", img: "/assets/images/izgovor.png", label: "Izgovaram" },
    { href: "/sva4ponavljam", img: "/assets/images/mis.png", label: "Sve 4 ponavljam" },
    { href: "/glagoli", img: "/assets/images/vrana.png", label: "Glagoli u mreži" },
  ]

  return (
    <div className="okvirslike">
      <section className="glavne-slike">
        <div className="slike-grid">
          {items.map((item, i) => (
            <div key={i} className="glslike">
              <a href={item.href}>
                <img src={item.img} alt={item.label} />
              </a>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}