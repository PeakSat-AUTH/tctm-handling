import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommandResponseComponent } from './telecommand-response.component';

describe('TelecommandResponseComponent', () => {
  let component: TelecommandResponseComponent;
  let fixture: ComponentFixture<TelecommandResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelecommandResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecommandResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
