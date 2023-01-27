import { OperatorList } from '../common.types';

export const OperatorGroupNamesList = [
  'creation',
  'join creation',
  'transformation',
  'filtering',
  'join',
  'multicasting',
  'error handling',
] as const;

export const operatorsNames: OperatorList = {
  creation: [
    'interval',
    'from',
    'fromEvent',
    'of',
    'range',
    'timer',
    'defer',
    'throwError',
  ],
  join: [],
  'error handling': [],
  'join creation': [
    'combineLatest',
    'concat',
    'forkJoin',
    'merge',
    'partition',
    'race',
    'zip',
  ],
  filtering: [],
  multicasting: [],
  transformation: [
    'buffer',
    'bufferCount',
    'bufferTime',
    'bufferToggle',
    'bufferWhen',
    'concatMap',
    'concatMapTo',
    'exhaust',
    'exhaustMap',
    'expand',
    'groupBy',
    'map',
    'mapTo',
    'mergeMap',
    'mergeMapTo',
    'mergeScan',
    'pairwise',
    'partition',
    'pluck',
    'scan',
    'switchScan',
    'switchMap',
    'switchMapTo',
    'window',
    'windowCount',
    'windowTime',
    'windowToggle',
    'windowWhen',
  ],
};