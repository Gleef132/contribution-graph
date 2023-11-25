import { FC } from 'react'
import cl from './Months.module.scss'
interface MonthsProps {
  months: string[];
}

const Months: FC<MonthsProps> = ({ months }) => {
  return (
    <nav className={cl.nav}>
      <ul className={cl.nav__list}>
        {months?.map(month => <li key={month} className={cl.nav__link}>{month}</li>)}
      </ul>
    </nav>
  )
}

export default Months