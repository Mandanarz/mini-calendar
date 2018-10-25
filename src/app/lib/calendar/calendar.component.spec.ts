import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Calendar component', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentDay correctly', () => {
    expect(component.currentDate.toString()).toBe(new Date().toString(), 'Show today at first');
  });

  it('should show the next month correctly', () => {
    component.currentDate = new Date('October 22, 2018 00:00:00');
    component.getNextMonth();
    expect(component.currentDate.toDateString()).toBe('Thu Nov 01 2018', 'Show next month');
    component.currentDate = new Date('December 22, 2018 00:00:00');
    component.getNextMonth();
    expect(component.currentDate.toDateString()).toBe('Tue Jan 01 2019', 'Show next month which is next year as well');
  });

  it('should show the previous month correctly', () => {
    component.currentDate = new Date('October 22, 2018 00:00:00');
    component.getPreviousMonth();
    expect(component.currentDate.toDateString()).toBe('Sat Sep 01 2018', 'Show previous month');
    component.currentDate = new Date('January 22, 2018 00:00:00');
    component.getPreviousMonth();
    expect(component.currentDate.toDateString()).toBe('Fri Dec 01 2017', 'Show previous month which is previous year as well');
  });
});
