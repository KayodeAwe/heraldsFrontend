import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDashbordComponent } from './members-dashbord.component';

describe('MembersDashbordComponent', () => {
  let component: MembersDashbordComponent;
  let fixture: ComponentFixture<MembersDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
