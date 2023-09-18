import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPlayerComponent } from './navbar-player.component';

describe('NavbarPlayerComponent', () => {
  let component: NavbarPlayerComponent;
  let fixture: ComponentFixture<NavbarPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPlayerComponent]
    });
    fixture = TestBed.createComponent(NavbarPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
