import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventSecondComponent } from './user-event-second.component';

describe('UserEventSecondComponent', () => {
  let component: UserEventSecondComponent;
  let fixture: ComponentFixture<UserEventSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEventSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
