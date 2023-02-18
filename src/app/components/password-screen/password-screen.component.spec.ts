import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordScreenComponent } from './password-screen.component';

describe('PasswordScreenComponent', () => {
  let component: PasswordScreenComponent;
  let fixture: ComponentFixture<PasswordScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
