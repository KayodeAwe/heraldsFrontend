import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSermonVideoComponent } from './past-sermon-video.component';

describe('PastSermonVideoComponent', () => {
  let component: PastSermonVideoComponent;
  let fixture: ComponentFixture<PastSermonVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastSermonVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSermonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
