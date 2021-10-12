import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailsLatestComponent } from './video-details-latest.component';

describe('VideoDetailsLatestComponent', () => {
  let component: VideoDetailsLatestComponent;
  let fixture: ComponentFixture<VideoDetailsLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDetailsLatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
