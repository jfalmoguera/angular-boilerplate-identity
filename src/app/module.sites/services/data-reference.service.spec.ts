/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataReferenceService } from './data-reference.service';

describe('Service: DataReference', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataReferenceService]
    });
  });

  it('should ...', inject([DataReferenceService], (service: DataReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
