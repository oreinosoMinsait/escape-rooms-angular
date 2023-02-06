import { TestBed } from '@angular/core/testing';

import { ApiEscapeRoomService } from './api-escape-room.service';

describe('ApiEscapeRoomService', () => {
  let service: ApiEscapeRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEscapeRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
