import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventFirstComponent } from './user-event-first.component';

describe('UserEventFirstComponent', () => {
  let component: UserEventFirstComponent;
  let fixture: ComponentFixture<UserEventFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEventFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
