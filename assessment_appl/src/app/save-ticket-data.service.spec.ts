import { TestBed } from '@angular/core/testing';

import { SaveTicketDataService } from './save-ticket-data.service';

describe('SaveTicketDataService', () => {
  let service: SaveTicketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveTicketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
