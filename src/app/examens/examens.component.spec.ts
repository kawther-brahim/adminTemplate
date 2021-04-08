import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { examensComponent } from './examens.component';

describe('examensComponent', () => {
  let component: examensComponent;
  let fixture: ComponentFixture<examensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ examensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(examensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
