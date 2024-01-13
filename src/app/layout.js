import { Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
