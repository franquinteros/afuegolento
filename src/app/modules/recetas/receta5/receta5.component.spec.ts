import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta5Component } from './receta5.component';

describe('Receta5Component', () => {
  let component: Receta5Component;
  let fixture: ComponentFixture<Receta5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
