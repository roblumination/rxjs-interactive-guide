import { MarbleColor } from '../common.types';

export const marbleColorNamesList = [
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
  yellow: '#aa0',
  green: '#0a0',
  cyan: '#0aa',
  blue: '#00f',
  violet: '#60f',
  purple: '#a0a',
};
