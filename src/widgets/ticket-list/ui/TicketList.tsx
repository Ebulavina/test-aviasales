import { TicketCard } from '@entities/ticket';
import type { Ticket } from '@entities/ticket';
import s from './TicketList.module.css';

interface TicketListProps {
  tickets: Ticket[];
  isLoading: boolean;
}

export function TicketList({ tickets, isLoading }: TicketListProps) {
  if (isLoading && tickets.length === 0) {
    return (
      <div className={s.empty}>Загрузка билетов...</div>
    );
  }

  if (tickets.length === 0) {
    return (
      <div className={s.empty}>Билетов по заданным фильтрам не найдено</div>
    );
  }

  return (
    <div className={s.list}>
      {tickets.map((ticket, idx) => (
        <TicketCard key={idx} ticket={ticket} />
      ))}
    </div>
  );
}
