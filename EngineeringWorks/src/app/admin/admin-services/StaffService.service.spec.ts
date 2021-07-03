/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaffServiceService } from './StaffService.service';

describe('Service: StaffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffServiceService]
    });
  });

  it('should ...', inject([StaffServiceService], (service: StaffServiceService) => {
    expect(service).toBeTruthy();
  }));
});
