import './style.css';

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>
        {children}
      </body>
    </html>
  )
}