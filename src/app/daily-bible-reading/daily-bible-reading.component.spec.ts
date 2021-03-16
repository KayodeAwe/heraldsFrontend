import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBibleReadingComponent } from './daily-bible-reading.component';

describe('DailyBibleReadingComponent', () => {
  let component: DailyBibleReadingComponent;
  let fixture: ComponentFixture<DailyBibleReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyBibleReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyBibleReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
