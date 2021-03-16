import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSermonAudioComponent } from './past-sermon-audio.component';

describe('PastSermonAudioComponent', () => {
  let component: PastSermonAudioComponent;
  let fixture: ComponentFixture<PastSermonAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastSermonAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSermonAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
