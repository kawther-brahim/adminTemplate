import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { offresComponent } from './offres.component';

describe('offresComponent', () => {
  let component: offresComponent;
  let fixture: ComponentFixture<offresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ offresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(offresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
