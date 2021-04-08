import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { utilisateursComponent } from './utilisateurs.component';

describe('utilisateursComponent', () => {
  let component: utilisateursComponent;
  let fixture: ComponentFixture<utilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ utilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(utilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
