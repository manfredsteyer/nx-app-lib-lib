import { async, TestBed } from '@angular/core/testing';
import { FrameworkModule } from './framework.module';

describe('FrameworkModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrameworkModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrameworkModule).toBeDefined();
  });
});
