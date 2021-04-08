import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveExamenComponent } from './archive-examen.component';

describe('ArchiveExamenComponent', () => {
  let component: ArchiveExamenComponent;
  let fixture: ComponentFixture<ArchiveExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
