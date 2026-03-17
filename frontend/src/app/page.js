import HeaderImages from './components/HeaderImg'
import Grid from './components/Grid'
import Footer from './components/Footer'
import MainNav from './components/MainNav'

export default function HomePage() {
  return (
    <main className="bodypocetna">
      <HeaderImages />
      <MainNav />
      <Grid />
      <Footer />
    </main>
  )
}