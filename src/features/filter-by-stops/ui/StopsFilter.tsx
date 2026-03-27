import type { FilterByStopsState, StopsCount } from '../model/useFilterByStops';
import s from './StopsFilter.module.css';

const STOPS_LABELS: Record<StopsCount, string> = {
  0: 'Без пересадок',
  1: '1 пересадка',
  2: '2 пересадки',
  3: '3 пересадки',
};

export function StopsFilter({ state }: { state: FilterByStopsState }) {
  const { selectedStops, allSelected, allStops, toggleAll, toggleStop, selectOnly } = state;

  return (
    <div className={s.filter}>
      <p className={s.title}>Количество пересадок</p>
      <ul className={s.list}>
        <li className={s.item}>
          <input
            className={s.checkbox}
            type="checkbox"
            id="stops-all"
            checked={allSelected}
            onChange={toggleAll}
          />
          <label className={s.label} htmlFor="stops-all">
            Все
          </label>
        </li>

        {allStops.map((stop) => (
          <li key={stop} className={s.item}>
            <input
              className={s.checkbox}
              type="checkbox"
              id={`stops-${stop}`}
              checked={selectedStops.has(stop)}
              onChange={() => toggleStop(stop)}
            />
            <label className={s.label} htmlFor={`stops-${stop}`}>
              {STOPS_LABELS[stop]}
            </label>
            <span
              className={s.onlyBtn}
              onClick={(e) => {
                e.preventDefault();
                selectOnly(stop);
              }}
            >
              Только
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
