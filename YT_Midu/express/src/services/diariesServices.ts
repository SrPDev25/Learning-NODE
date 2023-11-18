import { Diary } from '../types'
import diaryData from './diaries.json'

export const getDiaries = ():Diary[] => diaryData as Diary[]

export const addDiaries = () => null