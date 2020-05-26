import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng9ChartjsComponent } from './ng9-chartjs.component';

describe('Ng9ChartjsComponent', () => {
  let component: Ng9ChartjsComponent;
  let fixture: ComponentFixture<Ng9ChartjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng9ChartjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng9ChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
