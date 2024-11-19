import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta4Component } from './receta4.component';

describe('Receta4Component', () => {
  let component: Receta4Component;
  let fixture: ComponentFixture<Receta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
