import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta11Component } from './receta11.component';

describe('Receta11Component', () => {
  let component: Receta11Component;
  let fixture: ComponentFixture<Receta11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
