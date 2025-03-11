import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuponeditComponent } from './popuponedit.component';

describe('PopuponeditComponent', () => {
  let component: PopuponeditComponent;
  let fixture: ComponentFixture<PopuponeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopuponeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopuponeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
