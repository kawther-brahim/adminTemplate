import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveMaterielComponent } from './archive-materiel.component';

describe('ArchiveMaterielComponent', () => {
  let component: ArchiveMaterielComponent;
  let fixture: ComponentFixture<ArchiveMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
