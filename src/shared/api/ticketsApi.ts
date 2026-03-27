import type { Ticket } from '@entities/ticket';

const BASE_URL = 'https://front-test.dev.aviasales.ru';

export async function getSearchId(): Promise<string> {
  const response = await fetch(`${BASE_URL}/search`);
  if (!response.ok) throw new Error('Failed to get searchId');
  const data = await response.json();
  return data.searchId;
}

interface TicketsResponse {
  tickets: Ticket[];
  stop: boolean;
}

export async function getTickets(searchId: string): Promise<TicketsResponse> {
  const response = await fetch(`${BASE_URL}/tickets?searchId=${searchId}`);
  if (!response.ok) throw new Error('Failed to fetch tickets');
  return response.json();
}
