import { FC } from 'react'
import cl from './Week.module.scss'
import Day from '../day/Day'
import { IDay } from '@/models/IDay'
interface IWeek {
  data: IDay[]
}

const Week: FC<IWeek> = ({ data }) => {
  return (
    <div className={cl.week}>
      {data.map(item => <Day key={`${item.date}` + Math.random() * 1000} color={item.color} contribution={item.contribution} date={item.date} />)}
    </div>
  )
}

export default Week