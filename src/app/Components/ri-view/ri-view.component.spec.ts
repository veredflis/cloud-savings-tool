import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiViewComponent } from './ri-view.component';

describe('RiViewComponent', () => {
  let component: RiViewComponent;
  let fixture: ComponentFixture<RiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
