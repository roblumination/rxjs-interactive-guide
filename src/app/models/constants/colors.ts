import { MarbleColor } from '../common.types';

export const MarbleColorNamesList = [
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'violet',
  'purple',
] as const;

export const colorPalette: Record<MarbleColor, string> = {
  red: '#f00',
  orange: '#f80',
  yellow: '#ff0',
  green: '#0f0',
  cyan: '#0ff',
  blue: '#00f',
  violet: '#60f',
  purple: '#f0f',
};
