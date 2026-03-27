import { useState } from 'react';
import type { Ticket } from '@entities/ticket';

const ALL_STOPS = [0, 1, 2, 3] as const;

export type StopsCount = (typeof ALL_STOPS)[number];

export interface FilterByStopsState {
  selectedStops: Set<StopsCount>;
  allSelected: boolean;
  allStops: readonly StopsCount[];
  toggleAll: () => void;
  toggleStop: (stop: StopsCount) => void;
  selectOnly: (stop: StopsCount) => void;
  filterTickets: (tickets: Ticket[]) => Ticket[];
}

export function useFilterByStops(): FilterByStopsState {
  const [selectedStops, setSelectedStops] = useState<Set<StopsCount>>(
    new Set(ALL_STOPS),
  );

  const allSelected = selectedStops.size === ALL_STOPS.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedStops(new Set());
    } else {
      setSelectedStops(new Set(ALL_STOPS));
    }
  };

  const toggleStop = (stop: StopsCount) => {
    setSelectedStops((prev) => {
      const next = new Set(prev);
      if (next.has(stop)) {
        next.delete(stop);
      } else {
        next.add(stop);
      }
      return next;
    });
  };

  const selectOnly = (stop: StopsCount) => {
    setSelectedStops(new Set([stop]));
  };

  const filterTickets = (tickets: Ticket[]): Ticket[] => {
    if (allSelected) return tickets;
    return tickets.filter((ticket) =>
      ticket.segments.every((segment) =>
        selectedStops.has(segment.stops.length as StopsCount),
      ),
    );
  };

  return { selectedStops, allSelected, allStops: ALL_STOPS, toggleAll, toggleStop, selectOnly, filterTickets };
}
