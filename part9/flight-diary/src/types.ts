
export enum Weather {
  sunny = 'sunny',
  rainy = 'rainy',
  cloudy = 'cloudy',
  stormy = 'stormy',
  windy = 'windy'
} 

export enum Visibility {

  great = 'great',
  good = 'good',
  ok = 'ok',
  poor = 'poor', 


}


export type NewEntry = Omit<DiaryEntry, 'id'>

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?:string

} 

