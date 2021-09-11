import { TestBed } from '@angular/core/testing';

import { DataConvertorService } from './data-convertor.service';

describe('DataConvertorService', () => {
  let service: DataConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
