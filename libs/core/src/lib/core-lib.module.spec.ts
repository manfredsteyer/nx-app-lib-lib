import { async, TestBed } from '@angular/core/testing';
import { CoreLibModule } from './core-lib.module';

describe('CoreLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreLibModule).toBeDefined();
  });
});
