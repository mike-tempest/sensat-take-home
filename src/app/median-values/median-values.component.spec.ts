import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianValuesComponent } from './median-values.component';

describe('MedianValuesComponent', () => {
  let component: MedianValuesComponent;
  let fixture: ComponentFixture<MedianValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedianValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedianValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
