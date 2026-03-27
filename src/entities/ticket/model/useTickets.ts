import { mockTickets } from './mock';
import type { Ticket } from './types';

interface UseTicketsResult {
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
}

export function useTickets(): UseTicketsResult {
  return { tickets: mockTickets, isLoading: false, error: null };
}
