export const zeroPadding = (num, length) => {
  return ('0'.repeat(length) + num).slice(-length);
}

export const formatMonthDate = d => {
  const month = zeroPadding(d.getMonth() + 1, 2);
  const date = zeroPadding(d.getDate(), 2);
  return `${month}/${date}`;
};

export const minutesToTimeText = minutes => {
  const h = zeroPadding(Math.floor(minutes / 60), 2);
  const m = zeroPadding(minutes % 60, 2);
  return `${h}:${m}`;
};

export const minutesToHours = minutes => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h + m / 60.0;
};
