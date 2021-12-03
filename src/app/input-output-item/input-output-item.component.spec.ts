import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputItemComponent } from './input-output-item.component';

describe('InputOutputItemComponent', () => {
  let component: InputOutputItemComponent;
  let fixture: ComponentFixture<InputOutputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
