import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindItemComponent } from './bind-item.component';

describe('BindItemComponent', () => {
  let component: BindItemComponent;
  let fixture: ComponentFixture<BindItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
