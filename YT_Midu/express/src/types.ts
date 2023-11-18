export type Diary = {
    id: number,
    date: string,
    weather: Weather,
    visibility: any,
    comment: string
}

export enum Visibility {
    GREAT = 'great',
    GOOD = 'good',
    OK = 'ok',
    POOR = 'poor'
}

export enum Weather {
    WINDY= 'windy',
    RAINNY = 'rainny',
    CLOUDY = 'cloudy',
    SUNNY = 'sunny'

}