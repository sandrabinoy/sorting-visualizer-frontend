import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPatchComponent } from './display-patch.component';

describe('DisplayPatchComponent', () => {
  let component: DisplayPatchComponent;
  let fixture: ComponentFixture<DisplayPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
