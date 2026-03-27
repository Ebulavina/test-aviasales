import type { SortTicketsState, SortType } from '../model/useSortTickets';
import s from './SortTabs.module.css';

const TABS: { type: SortType; label: string }[] = [
  { type: 'cheapest', label: 'Самый дешевый' },
  { type: 'fastest', label: 'Самый быстрый' },
  { type: 'optimal', label: 'Оптимальный' },
];

export function SortTabs({ state }: { state: SortTicketsState }) {
  return (
    <div className={s.tabs}>
      {TABS.map(({ type, label }) => (
        <button
          key={type}
          className={`${s.tab}${state.sortType === type ? ` ${s.active}` : ''}`}
          onClick={() => state.setSortType(type)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
