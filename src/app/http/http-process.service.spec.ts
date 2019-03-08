import { TestBed, inject } from '@angular/core/testing';

import { HttpProcessService } from './http-process.service';

describe('HttpProcessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProcessService]
    });
  });

  it('should be created', inject([HttpProcessService], (service: HttpProcessService) => {
    expect(service).toBeTruthy();
  }));
});
