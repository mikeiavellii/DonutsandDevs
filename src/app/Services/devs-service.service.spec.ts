import { TestBed } from '@angular/core/testing';

import { DevsServiceService } from './devs-service.service';

describe('DevsServiceService', () => {
  let service: DevsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
