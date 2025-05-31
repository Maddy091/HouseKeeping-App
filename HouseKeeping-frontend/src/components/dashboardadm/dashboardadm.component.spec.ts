import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadmComponent } from './dashboardadm.component';

describe('DashboardadmComponent', () => {
  let component: DashboardadmComponent;
  let fixture: ComponentFixture<DashboardadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
