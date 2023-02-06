import { TestBed } from '@angular/core/testing';

import { TransformEscapeRoomService } from './transform-escape-room.service';

describe('TransformEscapeRoomService', () => {
  let service: TransformEscapeRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformEscapeRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
