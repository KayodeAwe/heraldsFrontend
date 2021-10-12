import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForEnvangelismComponent } from './call-for-envangelism.component';

describe('CallForEnvangelismComponent', () => {
  let component: CallForEnvangelismComponent;
  let fixture: ComponentFixture<CallForEnvangelismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForEnvangelismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForEnvangelismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
