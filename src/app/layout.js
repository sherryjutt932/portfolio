import './globals.css'
import { Inter, Poppins} from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Sheharyar Saeed | Portfolio ',
  description: 'sheharyar saeed portfolio of Web developer and graphic designer ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
