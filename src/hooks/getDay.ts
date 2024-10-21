export function getDay(dateString: string): string {
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date: Date = new Date(dateString);
    
  const dayIndex: number = date.getDay();
    
  return daysOfWeek[dayIndex];
}