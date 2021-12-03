import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRouteComponent } from './one-route.component';

describe('OneRouteComponent', () => {
  let component: OneRouteComponent;
  let fixture: ComponentFixture<OneRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
