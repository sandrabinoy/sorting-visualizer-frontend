import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomControlsComponent } from './bottom-controls.component';

describe('BottomControlsComponent', () => {
  let component: BottomControlsComponent;
  let fixture: ComponentFixture<BottomControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
