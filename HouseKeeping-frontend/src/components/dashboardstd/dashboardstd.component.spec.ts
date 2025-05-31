import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardstdComponent } from './dashboardstd.component';

describe('DashboardstdComponent', () => {
  let component: DashboardstdComponent;
  let fixture: ComponentFixture<DashboardstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardstdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
