import { TestBed } from '@angular/core/testing';

import { CardModalService } from './card-modal.service';

describe('CardModalService', () => {
  let service: CardModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
