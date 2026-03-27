import type { Ticket } from './types';

export const mockTickets: Ticket[] = [
  {
    id: '1',
    price: 13500,
    carrier: 'SU',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T06:20:00',
        duration: 210,
        stops: [],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T14:00:00',
        duration: 220,
        stops: [],
      },
    ],
  },
  {
    id: '2',
    price: 9800,
    carrier: 'U6',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T04:00:00',
        duration: 360,
        stops: ['FCO'],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T10:00:00',
        duration: 380,
        stops: ['AMS'],
      },
    ],
  },
  {
    id: '3',
    price: 18200,
    carrier: 'BA',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T11:00:00',
        duration: 195,
        stops: [],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T09:30:00',
        duration: 200,
        stops: [],
      },
    ],
  },
  {
    id: '4',
    price: 7500,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T22:00:00',
        duration: 480,
        stops: ['AMS', 'CDG'],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T20:00:00',
        duration: 510,
        stops: ['FCO', 'VIE'],
      },
    ],
  },
  {
    id: '5',
    price: 11300,
    carrier: 'SU',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T15:40:00',
        duration: 290,
        stops: ['HEL'],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T17:00:00',
        duration: 310,
        stops: ['HEL'],
      },
    ],
  },
  {
    id: '6',
    price: 15900,
    carrier: 'BA',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T08:30:00',
        duration: 220,
        stops: [],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T16:00:00',
        duration: 230,
        stops: [],
      },
    ],
  },
  {
    id: '7',
    price: 8900,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T13:00:00',
        duration: 340,
        stops: ['PRG'],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T12:00:00',
        duration: 350,
        stops: ['WAW'],
      },
    ],
  },
  {
    id: '8',
    price: 6200,
    carrier: 'U6',
    segments: [
      {
        origin: 'MOW',
        destination: 'LHR',
        date: '2026-05-12T01:00:00',
        duration: 560,
        stops: ['AMS', 'CDG', 'FCO'],
      },
      {
        origin: 'LHR',
        destination: 'MOW',
        date: '2026-05-19T03:00:00',
        duration: 590,
        stops: ['VIE', 'PRG', 'WAW'],
      },
    ],
  },
];
