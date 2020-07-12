import { TestBed } from '@angular/core/testing';

import { CheakFormService } from './cheak-form.service';

describe('CheakFormService', () => {
  let service: CheakFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheakFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
