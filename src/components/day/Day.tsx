'use client'
import { FC } from 'react'
import cl from './Day.module.scss'
import { useAppDispatch } from '@/hooks/redux';
import { helperSlice } from '@/store/reducers/HelperSlice';
import { IDay } from '@/models/IDay';

const Day: FC<IDay> = ({ contribution, date, color }) => {

  const { showHelper } = helperSlice.actions
  const dispatch = useAppDispatch()

  const showHelperHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const { x, y } = e.currentTarget.getBoundingClientRect()
    dispatch(showHelper({ contribution, date, x: x, y: y, opacity: 1 }))
  }

  return (
    <div className={cl.day} style={{ background: color }}
      onClick={showHelperHandle}
    >
    </div>
  )
}

export default Day