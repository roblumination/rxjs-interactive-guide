import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        stagger(100, [
          animate(
            '300ms ease-out',
            style({ opacity: 1, transform: 'scale(1)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
  transition(':decrement', [
    style({ opacity: 1, transform: 'scale(1)' }),
    query(':enter', [
      stagger(20, [
        animate('100ms ease-out', style({ opacity: 0, width: 300 })),
      ]),
    ]),
    query(':leave', [
      stagger(20, [
        animate('100ms ease-out', style({ opacity: 0, width: 300 })),
      ]),
    ]),
  ]),
]);

export const fadeUpwards = trigger('fadeUpwards', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(2vh)', position: 'absolute' }),
    animate(
      '200ms ease-out',
      style({ opacity: 1, transform: 'translateY(0vh)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0vh)' }),
    animate(
      '200ms ease-out',
      style({ opacity: 0, transform: 'translateY(2vh)' })
    ),
  ]),
]);

export const fadeDownwards = trigger('fadeDownwards', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-2vh)', position: 'absolute' }),
    animate(
      '100ms ease-out',
      style({ opacity: 1, transform: 'translateY(0vh)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0vh)' }),
    animate(
      '100ms ease-out',
      style({ opacity: 0, transform: 'translateY(0vh)' })
    ),
  ]),
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(150, style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate(150, style({ opacity: 0 })),
  ]),
]);
