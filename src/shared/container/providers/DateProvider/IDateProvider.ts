interface IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  addDaysToNow(days: number): Date;
  addHoursToNow(hours: number): Date;
  compareInDays(start_date: Date, end_date: Date): number;
  compareIfBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
