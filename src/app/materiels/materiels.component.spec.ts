import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { materielsComponent } from './materiels.component';

describe('materielsComponent', () => {
  let component: materielsComponent;
  let fixture: ComponentFixture<materielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ materielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(materielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
