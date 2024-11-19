import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta9Component } from './receta9.component';

describe('Receta9Component', () => {
  let component: Receta9Component;
  let fixture: ComponentFixture<Receta9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
