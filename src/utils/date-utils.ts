export const prettifyToYear = (date: Date | undefined): string | null => {
  if (typeof date === 'undefined') {
    return null;
  }

  return date.getFullYear().toString();
};
