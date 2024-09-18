import { TestBed } from '@angular/core/testing';

import { ExcerptsService } from './excerpts.service';

describe('ExcerptsService', () => {
  let service: ExcerptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcerptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
