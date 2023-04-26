import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveGraphComponent } from './archive-graph.component';

describe('ArchiveGraphComponent', () => {
  let component: ArchiveGraphComponent;
  let fixture: ComponentFixture<ArchiveGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
