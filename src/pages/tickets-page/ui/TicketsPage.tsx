import { useMemo } from 'react';
import { useTickets } from '@entities/ticket';
import { useFilterByStops, StopsFilter } from '@features/filter-by-stops';
import { useSortTickets, SortTabs } from '@features/sort-tickets';
import { TicketList } from '@widgets/ticket-list';
import logo from '@shared/assets/logo.svg';
import s from './TicketsPage.module.css';

export function TicketsPage() {
  const { tickets: allTickets, isLoading, error } = useTickets();
  const filterState = useFilterByStops();
  const sortState = useSortTickets();

  const tickets = useMemo(() => {
    const filtered = filterState.filterTickets(allTickets);
    return sortState.sortTickets(filtered);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTickets, filterState.selectedStops, filterState.allSelected, sortState.sortType]);

  return (
    <div className={s.page}>
      <header className={s.header}>
        <img src={logo} alt="aviasales" />
      </header>

      <div className={s.layout}>
        <aside className={s.sidebar}>
          <StopsFilter state={filterState} />
        </aside>

        <main className={s.content}>
          <SortTabs state={sortState} />
          {error && <div className={s.error}>{error}</div>}
          <TicketList tickets={tickets} isLoading={isLoading} />
        </main>
      </div>
    </div>
  );
}
