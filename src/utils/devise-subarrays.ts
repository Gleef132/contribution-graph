import { IDay } from "@/models/IDay";

export const divisionIntoSubarrays = (arr: IDay[], size: number): IDay[][] => {
  const subarray = []
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subarray[i] = arr.slice((i * size), (i * size) + size);
  }
  return subarray
}