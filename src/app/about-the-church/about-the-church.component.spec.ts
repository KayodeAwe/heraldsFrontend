import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheChurchComponent } from './about-the-church.component';

describe('AboutTheChurchComponent', () => {
  let component: AboutTheChurchComponent;
  let fixture: ComponentFixture<AboutTheChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
