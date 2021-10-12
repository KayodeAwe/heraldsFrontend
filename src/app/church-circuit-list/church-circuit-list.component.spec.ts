import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchCircuitListComponent } from './church-circuit-list.component';

describe('ChurchCircuitListComponent', () => {
  let component: ChurchCircuitListComponent;
  let fixture: ComponentFixture<ChurchCircuitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchCircuitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchCircuitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
