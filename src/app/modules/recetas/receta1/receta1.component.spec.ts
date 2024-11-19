import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Receta1Component } from './receta1.component';

describe('Receta1Component', () => {
  let component: Receta1Component;
  let fixture: ComponentFixture<Receta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
