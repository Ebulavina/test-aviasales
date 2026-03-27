import { useState } from 'react';
import type { Ticket } from '@entities/ticket';

export type SortType = 'cheapest' | 'fastest' | 'optimal';

export interface SortTicketsState {
  sortType: SortType;
  setSortType: (type: SortType) => void;
  sortTickets: (tickets: Ticket[]) => Ticket[];
}

const getTotalDuration = (ticket: Ticket): number =>
  ticket.segments.reduce((sum, s) => sum + s.duration, 0);

export function useSortTickets(): SortTicketsState {
  const [sortType, setSortType] = useState<SortType>('cheapest');

  const sortTickets = (tickets: Ticket[]): Ticket[] => {
    const copy = [...tickets];
    if (sortType === 'cheapest') {
      return copy.sort((a, b) => a.price - b.price);
    }
    return copy.sort((a, b) => getTotalDuration(a) - getTotalDuration(b));
  };

  return { sortType, setSortType, sortTickets };
}
