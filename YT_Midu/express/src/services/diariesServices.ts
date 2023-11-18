import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEnty } from '../types'
import dairyData from '../dtb/diaries.json'

// el as lo que hace es asegurar a TS que ese dato es de ese tipo
const diaries: DiaryEntry[] = dairyData as DiaryEntry[]
export const getEntries = () => diaries

//Encuentra la id pero sin los datos importantes
export const findById = (id: number): NonSensitiveInfoDiaryEnty | undefined => {
	const entry = diaries.find((d: DiaryEntry) => d.id === id)
	if (entry) {
		const { comment, ...diaryRest } = entry;
		return {...diaryRest}
	}
	return undefined
}

//Pide la información filtrada
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEnty[] => {
	return diaries.map((value: DiaryEntry) => {
		const { id, date, visibility, weather } = value;
		return { id, date, visibility, weather }
	})
}
//Omito la id y solo hay que pasar el resto de valores
export const addDiary = (newDiaryEntry:NewDiaryEntry): DiaryEntry => {
	const newDiary: DiaryEntry = {
		id: Math.max(...diaries.map((diary)=>diary.id)) + 1,
		...newDiaryEntry
	};
	
	diaries.push(newDiary)

	return newDiary
}
