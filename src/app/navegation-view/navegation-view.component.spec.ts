import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationViewComponent } from './navegation-view.component';

describe('NavegationViewComponent', () => {
  let component: NavegationViewComponent;
  let fixture: ComponentFixture<NavegationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavegationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
