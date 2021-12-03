import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetItemComponent } from './get-set-item.component';

describe('GetSetItemComponent', () => {
  let component: GetSetItemComponent;
  let fixture: ComponentFixture<GetSetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSetItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
