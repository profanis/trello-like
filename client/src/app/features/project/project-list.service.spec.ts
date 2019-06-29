import { TestBed } from '@angular/core/testing';

import { ProjectListService } from './project-list.service';

describe('ProjectListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectListService = TestBed.get(ProjectListService);
    expect(service).toBeTruthy();
  });
});
