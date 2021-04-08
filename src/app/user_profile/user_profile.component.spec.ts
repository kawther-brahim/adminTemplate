import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { user_profileComponent } from './user_profile.component';

describe('user_profileComponent', () => {
  let component: user_profileComponent;
  let fixture: ComponentFixture<user_profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ user_profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(user_profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
