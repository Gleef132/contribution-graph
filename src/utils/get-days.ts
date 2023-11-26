import { IDay } from "@/models/IDay";
import { getColor } from "./get-colors";
import { getDate } from "./get-date";

interface IData {
  data: { [key: string]: number };
}


export const getDays = ({ data }: IData): IDay[] => {
  const result = []
  const dataKeys = Object.keys(data).reverse()
  const date = new Date(2023, 10, 25)
  let year = date.getFullYear()
  let number = date.getDate()
  let month = date.getMonth()
  const amountDays = 357
  let keyIndex = 0
  for (let i = 0; i < amountDays; i++) {
    let monthWithZero = (month + 1) > 9 ? month + 1 : `0${month + 1}`
    let numberWithZero = number > 9 ? number : `0${number}`
    let date = `${year}-${monthWithZero}-${numberWithZero}`
    if (date == dataKeys[keyIndex]) {
      const contribution = data[date]
      const obj: IDay = {
        date: getDate(date),
        color: getColor(contribution),
        contribution
      }
      result.push(obj)
      keyIndex++
    } else {
      const obj: IDay = {
        color: getColor(0),
        contribution: 0,
      }
      result.push(obj)
    }
    if (number === 1) {
      if (month === 0) {
        year = year - 1
        month = 11
      } else {
        month = month - 1
      }
      number = daysInMonth(year, month)
    } else {
      number = number - 1
    }
  }
  return result
}

const daysInMonth = (year: number, month: number): number => {
  return 32 - new Date(year, month, 32).getDate();
}