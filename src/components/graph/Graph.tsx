'use client'
import { FC } from 'react'
import cl from './Graph.module.scss'
import Months from '../months/Months'
import Day from '../day/Day'
import Helper from '../helper/Helper'
import { useAppDispatch } from '@/hooks/redux'
import { helperSlice } from '@/store/reducers/HelperSlice'
import { getColor } from '@/utils/get-colors'
import { getDate } from '@/utils/get-date'
import { getDays } from '@/utils/get-days'
import { divisionIntoSubarrays } from '@/utils/devise-subarrays'
import Week from '../week/Week'
import { getMonts } from '@/utils/get-months'

interface IGraphProps {
  data: { [key: string]: number }
}

const Graph: FC<IGraphProps> = (data) => {

  const { hiddenHelper } = helperSlice.actions
  const dispatch = useAppDispatch()

  const weeks = divisionIntoSubarrays(getDays(data), 7).reverse()
  const months = getMonts()

  return (
    <div className={cl.graph} onClick={() => dispatch(hiddenHelper())}>
      <div className={cl.graph__body}>
        <Months months={months} />
        <div className={cl.graph__content}>
          <ul className={cl.graph__days}>
            <li className={cl.graph__day}>Пн</li>
            <li className={cl.graph__day}>Ср</li>
            <li className={cl.graph__day}>Пт</li>
          </ul>
          <div className={cl.graph__weeks}>
            {weeks.map(item => <Week key={'' + Math.random() * 10000} data={item} />)}
          </div>
        </div>
        <div className={cl.graph__item}>
          <span>Меньше</span>
          <Day contribution={'No Contribution'} color={getColor(0)} />
          <Day contribution={'1-9 Contributions'} color={getColor(1)} />
          <Day contribution={'10-19 Contributions'} color={getColor(10)} />
          <Day contribution={'20-29 Contributions'} color={getColor(20)} />
          <Day contribution={'30+ Contributions'} color={getColor(30)} />
          <span>Больше</span>
        </div>
        <Helper />
      </div>
    </div>
  )
}

export default Graph