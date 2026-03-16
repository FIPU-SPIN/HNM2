export default function HomePage() {
  return (
    <main>
      <h2 className="text-2xl font-bold mb-4">Dobrodošli!</h2>
      <p>Ovo je početna stranica.</p>
    </main>
  )
}

import Grid from './components/Grid'

export default function HomePage() {
  return (
    <main>
      <h2 className="text-2xl font-bold mb-4">Dobrodošli!</h2>
      <p>Ovo je početna stranica.</p>
      <Grid />
    </main>
  )
}