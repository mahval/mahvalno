const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/; // 2020-10-29

export const prettifyToMonthYear = (date: Date | undefined): string | null => {
  if (typeof date === 'undefined') {
    return null;
  }

  const isoDateTime = date.toISOString();
  const [isoDate] = isoDateTime.split('T');

  console.log('isoDate:', isoDate);

  if (isoDate === null || !isoDateRegex.test(isoDate)) {
    return null;
  }

  return isoDate.split('-').reverse().slice(1).join('.');
};
