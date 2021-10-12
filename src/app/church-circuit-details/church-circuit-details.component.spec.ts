import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchCircuitDetailsComponent } from './church-circuit-details.component';

describe('ChurchCircuitDetailsComponent', () => {
  let component: ChurchCircuitDetailsComponent;
  let fixture: ComponentFixture<ChurchCircuitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchCircuitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchCircuitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
