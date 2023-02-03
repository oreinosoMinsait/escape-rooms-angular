import { TestBed } from '@angular/core/testing';

import { EscapeRoomsService } from './escape-rooms.service';

describe('EscapeRoomsService', () => {
  let service: EscapeRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscapeRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
