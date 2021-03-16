import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SateliteCommunityComponent } from './satelite-community.component';

describe('SateliteCommunityComponent', () => {
  let component: SateliteCommunityComponent;
  let fixture: ComponentFixture<SateliteCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SateliteCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SateliteCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
