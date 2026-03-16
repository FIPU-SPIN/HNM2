import Link from 'next/link'

export default function Grid() {
  const gridItems = [
    { href: '/oprojektu', src: '/assets/images/arena.png', alt: 'Arena', title: 'O projektu' },
    { href: '/stosveznam', src: '/assets/images/ruka.png', alt: 'Ruka', title: 'Što sve znam?' },
    { href: '/slusam', src: '/assets/images/naglasci.png', alt: 'Miš', title: 'Slušam' },
    { href: '/izgovaram', src: '/assets/images/izgovor.png', alt: 'Vrana', title: 'Izgovaram' },
    { href: '/sva4ponavljam', src: '/assets/images/mis.png', alt: 'Naglasci', title: 'Sve 4 ponavljam' },
    { href: '/glagoli', src: '/assets/images/vrana.png', alt: 'Izgovor', title: 'Glagoli u mreži' },
  ]

  return (
    <section className="glavne-slike">
      <div className="slike-grid">
        {gridItems.map((item, idx) => (
          <div key={idx} className="glslike">
            <Link href={item.href}>
              <img src={item.src} alt={item.alt} />
            </Link>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}