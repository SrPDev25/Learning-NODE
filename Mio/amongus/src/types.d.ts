//Con el types.d.ts el ".d" indica que solo son definiciones y no codigo reutilizable
//Los enum son codigo reutilizable

import { Visibility, Weather } from "./enum"

export interface DiaryEntry {
	id: number
	date: string
	weather: Weather
	visibility: Visibility
	comment: string
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
//Coge los valores que necesita
//export type NonSensitiveInfoDiaryEnty = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
//Coge todo menos lo que se le indica
export type NonSensitiveInfoDiaryEnty = Omit<DiaryEntry, 'comment'>
//En total existen estas tre: Omit, Pick y Partial  y se pueden combinar con Omit & Pick