import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosLogrosComponent } from './nuestros-logros.component';

describe('NuestrosLogrosComponent', () => {
  let component: NuestrosLogrosComponent;
  let fixture: ComponentFixture<NuestrosLogrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuestrosLogrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestrosLogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
