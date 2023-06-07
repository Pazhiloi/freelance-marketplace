export const getDayString = (days: number): string => {
  if (days === 1) {
    return "день";
  } else if (days >= 2 && days <= 4) {
    return "дня";
  } else {
    return "днів";
  }
};