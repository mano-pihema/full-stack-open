
type Weather = 'sunny'|'cloudy'|'windy'|'rainy'

type Visibility = 'poor'|'good'

export interface Note {
  id: number,
  content: string
}

export type NewNote = Omit<Note, 'id'>

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
} 