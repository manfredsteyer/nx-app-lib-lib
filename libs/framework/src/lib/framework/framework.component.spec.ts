/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrameworkComponent } from './framework.component';

describe('FrameworkComponent', () => {
  let component: FrameworkComponent;
  let fixture: ComponentFixture<FrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
