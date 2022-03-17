import dayjs from 'dayjs';
import { ViewStyle } from 'react-native';

export interface BaseEvent {
  start: Date;
  end: Date;
  title: string;
  name: string;
  status: string;
  type: string;
  id: string;
  level: string;
  parentId: string;
  location: string;
  description: string;
}

export interface DayJSConvertedEvent {
  start: dayjs.Dayjs;
  end: dayjs.Dayjs;
  name: string;
  status: string;
  type: string;
  id: string;
  level: string;
  diff: number;
  parentId: string;
  location: string;
  description: string;
}

export type Event<T> = BaseEvent & T;

export type Mode = '3days' | 'week' | 'day';

export type EventCellStyle<T> = ViewStyle | ((event: Event<T>) => ViewStyle);

export type WeekNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type HasDateRange = [Date, Date];

export type DateRangeHandler = ([start, end]: HasDateRange) => void;

export type HorizontalDirection = 'RIGHT' | 'LEFT';
