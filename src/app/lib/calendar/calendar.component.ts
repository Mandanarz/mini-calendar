import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  weekdays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  allDays: number[] = Array.from(Array(31).keys()).map(x => x + 1);
  daysBeforeFirstDay: number[];
  currentDay: number;
  currentDate: Date = new Date();
  currentMonth: string;
  currentYear: number;

  constructor() {
  }

  ngOnInit() {
    this.getToday();
  }

  getToday(): void {
    this.getDateInfo(this.currentDate);
  }

  getNextMonth(): void {
    const nextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.getDateInfo(nextMonth);
    this.currentDate = nextMonth;
  }

  getPreviousMonth(): void {
    const previousMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.getDateInfo(previousMonth);
    this.currentDate = previousMonth;
  }

  private getDateInfo(date: Date): void {
    this.getBlankDays(date);
    this.getCurrentDate(date);
  }

  private getBlankDays(date) : void {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toString().replace(/ .*/, '');
    const index = this.weekdays.findIndex(e => e.toLowerCase() === firstDay.toLowerCase());
    this.daysBeforeFirstDay = Array.from(Array(index).keys());
  }

  private getCurrentDate(date) : void {
    this.currentYear = date.getFullYear();
    this.currentMonth = this.getMonthName(date);
    this.currentDay = date.getDate();
  }

  private getMonthName(date): string {
    return this.monthNames[date.getMonth()];
  }

  isToday(dayNumber: number) : boolean{
    return dayNumber === new Date().getDate() && this.currentYear === new Date().getFullYear() && this.currentMonth === this.getMonthName(new Date());
  }
}
