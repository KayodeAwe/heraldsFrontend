import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBibleComponent } from './d-bible.component';

describe('DBibleComponent', () => {
  let component: DBibleComponent;
  let fixture: ComponentFixture<DBibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
