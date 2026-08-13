import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCpmponent } from './menu-component';

describe('MenuCpmponent', () => {
  let component: MenuCpmponent;
  let fixture: ComponentFixture<MenuCpmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCpmponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCpmponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
