import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaBarchartComponent } from './kafka-barchart.component';

describe('KafkaBarchartComponent', () => {
  let component: KafkaBarchartComponent;
  let fixture: ComponentFixture<KafkaBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafkaBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafkaBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
