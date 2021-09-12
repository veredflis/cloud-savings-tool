import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiItemComponent } from './ri-item.component';

describe('RiItemComponent', () => {
  let component: RiItemComponent;
  let fixture: ComponentFixture<RiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
