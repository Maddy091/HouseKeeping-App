import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterkeeperComponent } from './registerkeeper.component';

describe('RegisterkeeperComponent', () => {
  let component: RegisterkeeperComponent;
  let fixture: ComponentFixture<RegisterkeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterkeeperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterkeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
