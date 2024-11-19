import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta10Component } from './receta10.component';

describe('Receta10Component', () => {
  let component: Receta10Component;
  let fixture: ComponentFixture<Receta10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
