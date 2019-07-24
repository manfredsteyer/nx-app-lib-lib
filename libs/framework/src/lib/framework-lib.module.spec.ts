import { async, TestBed } from '@angular/core/testing';
import { FrameworkLibModule } from './framework-lib.module';

describe('FrameworkLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrameworkLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrameworkLibModule).toBeDefined();
  });
});
