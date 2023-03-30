import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DooComponent } from './doo.component';

describe('DooComponent', () => {
  let component: DooComponent;
  let fixture: ComponentFixture<DooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
