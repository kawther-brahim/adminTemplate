import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sallesComponent } from './salles.component';

describe('sallesComponent', () => {
  let component: sallesComponent;
  let fixture: ComponentFixture<sallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
