import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestserComponent } from './requestser.component';

describe('RequestserComponent', () => {
  let component: RequestserComponent;
  let fixture: ComponentFixture<RequestserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
