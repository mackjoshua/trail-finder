import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import SearchForm from './SearchForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <SearchForm />
      </div>
    </main>
  )
}
