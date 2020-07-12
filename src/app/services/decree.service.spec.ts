import { TestBed } from '@angular/core/testing';

import { DecreeService } from './decree.service';

describe('DecreeService', () => {
  let service: DecreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
