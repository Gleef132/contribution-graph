'use client'

import { FC } from 'react'
import cl from './Helper.module.scss'
import { useAppSelector } from '@/hooks/redux'

const Helper: FC = () => {

  const { contribution, date, x, y, opacity } = useAppSelector(state => state.helperSlice)

  return (
    <div className={cl.helper} style={{ top: y, left: x, opacity }} onClick={(e) => e.stopPropagation()}>
      <div className={cl.helper__title}>{contribution === 0 ? 'No Contributions' : `${contribution} Contributions`}</div>
      {date && <div className={cl.helper__text}>{date}</div>}
    </div>
  )
}

export default Helper