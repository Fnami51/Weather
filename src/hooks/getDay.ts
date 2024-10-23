export function getDay(dateString: string): string | null {
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date: Date = new Date(dateString);

  if (isNaN(date.getTime())) {
      return null; 
  }

  const dayIndex: number = date.getDay();
  return daysOfWeek[dayIndex];
}
