import { TestBed } from '@angular/core/testing';

import { Ng9ChartjsService } from './ng9-chartjs.service';

describe('Ng9ChartjsService', () => {
  let service: Ng9ChartjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng9ChartjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
