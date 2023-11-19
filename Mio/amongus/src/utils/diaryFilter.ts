import { Visibility, Weather } from '../enum';
import { NewDiaryEntry } from '../types';


const parseComment = (commentFromRequest: string): string => {
	if (!isString(commentFromRequest)) {
		throw new Error('Incorrect or missing comment');
	}

	return commentFromRequest;
}

const parseDate = (dateFromRequest: string): string => {
	if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
		throw new Error('Incorrect or missing date');
	}

	return String(parseDate);
}

const parseWeather = (weatherFromRequest: Weather): Weather => {
	if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest))
		throw new Error('Incorrect or missing Weather');
	return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: Visibility): Visibility => {
	if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest))
		throw new Error('Incorrect or missing Visibility');

	return visibilityFromRequest;
}

const isString = (string: unknown): boolean => {
	return typeof string === 'string' || string instanceof String
}

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
}

const isWeather = (string: Weather): boolean => {
	//Mejor usa enums
	return Object.values(Weather).includes(string);
	//Mal
	//return ['sunny' , 'rainy' , 'cloudy' , 'windy' , 'stormy'].includes(string);
}

const isVisibility = (string: Visibility): boolean => {
	return Object.values(Visibility).includes(string);
}



export const toNewDiaryEntry = (value: NewDiaryEntry): NewDiaryEntry => {
	const newEntry: NewDiaryEntry = {
		comment: parseComment(value.comment),
		date: parseDate(value.date),
		weather: parseWeather(value.weather),
		visibility: parseVisibility(value.visibility)
	}

	return newEntry;
}

