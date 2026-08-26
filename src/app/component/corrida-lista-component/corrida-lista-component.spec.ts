import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorridaService } from '../../service/corrida/corrida-service';
import { CorridaListaComponent } from './corrida-lista-component';

describe('CorridaLista', () => {
  let component: CorridaListaComponent;
  let fixture: ComponentFixture<CorridaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
