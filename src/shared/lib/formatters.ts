export const formatPrice = (price: number): string =>
  price.toLocaleString('ru-RU') + '\u00a0₽';

export const formatDuration = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}ч ${m}м`;
};

export const formatTime = (dateStr: string): string =>
  new Date(dateStr).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

export const addMinutes = (dateStr: string, minutes: number): string => {
  const date = new Date(dateStr);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatStops = (stops: string[]): string => {
  if (stops.length === 0) return 'Без пересадок';
  if (stops.length === 1) return '1 пересадка';
  if (stops.length < 5) return `${stops.length} пересадки`;
  return `${stops.length} пересадок`;
};
