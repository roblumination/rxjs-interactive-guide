const MarbleColor = [
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'violet',
  'purple',
];

export type MarbleColor = typeof MarbleColor[number];
export type MarbleData = { value: string; color: MarbleColor };
