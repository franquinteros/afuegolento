import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta7Component } from './receta7.component';

describe('Receta7Component', () => {
  let component: Receta7Component;
  let fixture: ComponentFixture<Receta7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
