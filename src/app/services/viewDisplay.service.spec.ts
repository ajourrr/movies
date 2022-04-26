/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewDisplayService } from './viewDisplay.service';

describe('Service: ViewDisplay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewDisplayService]
    });
  });

  it('should ...', inject([ViewDisplayService], (service: ViewDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
