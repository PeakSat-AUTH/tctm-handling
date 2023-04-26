import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommandItemComponent } from './telecommand-item.component';

describe('TelecommandItemComponent', () => {
  let component: TelecommandItemComponent;
  let fixture: ComponentFixture<TelecommandItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelecommandItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecommandItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
