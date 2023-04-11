import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartComponent } from './barchart.component';

describe('BarchartComponentTsComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
