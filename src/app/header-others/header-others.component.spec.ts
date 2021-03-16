import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOthersComponent } from './header-others.component';

describe('HeaderOthersComponent', () => {
  let component: HeaderOthersComponent;
  let fixture: ComponentFixture<HeaderOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
