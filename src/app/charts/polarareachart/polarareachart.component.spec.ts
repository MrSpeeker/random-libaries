import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarareachartComponent } from './polarareachart.component';

describe('PolarareachartComponent', () => {
  let component: PolarareachartComponent;
  let fixture: ComponentFixture<PolarareachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarareachartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolarareachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
