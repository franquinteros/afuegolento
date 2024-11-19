import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta2Component } from './receta2.component';

describe('Receta2Component', () => {
  let component: Receta2Component;
  let fixture: ComponentFixture<Receta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
