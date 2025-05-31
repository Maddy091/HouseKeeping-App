import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterstdComponent } from './registerstd.component';

describe('RegisterstdComponent', () => {
  let component: RegisterstdComponent;
  let fixture: ComponentFixture<RegisterstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterstdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
