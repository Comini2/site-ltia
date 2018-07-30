import { TestBed, inject } from '@angular/core/testing';

import { AcessibilityService } from './acessibility.service';

describe('AcessibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcessibilityService]
    });
  });

  it('should be created', inject([AcessibilityService], (service: AcessibilityService) => {
    expect(service).toBeTruthy();
  }));
});
