import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModal } from './login.modal';

describe('LoginModal', () => {
  let component: LoginModal;
  let fixture: ComponentFixture<LoginModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
