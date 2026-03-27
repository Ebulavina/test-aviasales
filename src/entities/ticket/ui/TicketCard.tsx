import type { Ticket, Segment } from '../model/types';
import {
  formatPrice,
  formatDuration,
  formatTime,
  addMinutes,
  formatStops,
} from '@shared/lib/formatters';
import s from './TicketCard.module.css';

function TicketSegment({ segment }: { segment: Segment }) {
  return (
    <div className={s.segment}>
      <div className={s.field}>
        <span className={s.label}>
          {segment.origin} – {segment.destination}
        </span>
        <span className={s.value}>{formatTime(segment.date)} – {addMinutes(segment.date, segment.duration)}</span>
      </div>

      <div className={`${s.field} ${s.fieldCenter}`}>
        <span className={s.label}>В пути</span>
        <span className={s.value}>{formatDuration(segment.duration)}</span>
      </div>

      <div className={`${s.field} ${s.fieldRight}`}>
        <span className={s.label}>{formatStops(segment.stops)}</span>
        {segment.stops.length > 0 && (
          <span className={s.valueStops}>{segment.stops.join(', ')}</span>
        )}
      </div>
    </div>
  );
}

export function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className={s.card}>
      <div className={s.header}>
        <div className={s.price}>{formatPrice(ticket.price)}</div>
        <div className={s.carrier}>{ticket.carrier}</div>
      </div>

      <div className={s.segments}>
        {ticket.segments.map((segment, idx) => (
          <>
            {idx > 0 && <div key={`d-${idx}`} className={s.divider} />}
            <TicketSegment key={idx} segment={segment} />
          </>
        ))}
      </div>
    </div>
  );
}
