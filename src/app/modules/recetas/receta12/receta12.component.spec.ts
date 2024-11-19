import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta12Component } from './receta12.component';

describe('Receta12Component', () => {
  let component: Receta12Component;
  let fixture: ComponentFixture<Receta12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
