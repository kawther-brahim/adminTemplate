import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveSalleComponent } from './archive_salle.component';

describe('ArchiveSalleComponent', () => {
  let component: ArchiveSalleComponent;
  let fixture: ComponentFixture<ArchiveSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
