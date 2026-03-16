import HeaderImages from './components/HeaderImg'

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>
        <HeaderImages />
        {children}
      </body>
    </html>
  )
}