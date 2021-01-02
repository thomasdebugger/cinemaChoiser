import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChoiserMovieComponent } from './random-choiser-movie.component';

describe('RandomChoiserMovieComponent', () => {
  let component: RandomChoiserMovieComponent;
  let fixture: ComponentFixture<RandomChoiserMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChoiserMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomChoiserMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
