import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchCircuitComponent } from './church-circuit.component';

describe('ChurchCircuitComponent', () => {
  let component: ChurchCircuitComponent;
  let fixture: ComponentFixture<ChurchCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchCircuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
