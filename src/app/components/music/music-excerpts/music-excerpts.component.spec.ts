import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicExcerptsComponent } from './music-excerpts.component';

describe('MusicExcerptsComponent', () => {
  let component: MusicExcerptsComponent;
  let fixture: ComponentFixture<MusicExcerptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicExcerptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicExcerptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
