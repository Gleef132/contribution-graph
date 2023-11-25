import Graph from '@/components/graph/Graph'
import styles from './page.module.scss'
import axios from 'axios'

export default async function Home() {
  const data = await axios.get('https://dpg.gg/test/calendar.json').then(res => res.data)

  return (
    <main className={styles.main}>
      <Graph data={data} />
    </main>
  )
}
