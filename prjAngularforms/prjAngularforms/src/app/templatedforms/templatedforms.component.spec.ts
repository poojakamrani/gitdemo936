import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedformsComponent } from './templatedforms.component';

describe('TemplatedformsComponent', () => {
  let component: TemplatedformsComponent;
  let fixture: ComponentFixture<TemplatedformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
