import { TestBed } from '@angular/core/testing';
import { AtletaService } from '../../service/atleta/atleta-service';
import { provideHttpClient } from '@angular/common/http';


describe('AtletaListarComponent', () => {
  let service: AtletaService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    providers: [
      AtletaService,
      provideHttpClient
    ]
    }).compileComponents();
  
   service = TestBed.inject(AtletaService)

  });

  it('Resultado esperado é calcular a idade', () => {
    const resultado = service.CalcularIdade('2007-02-11')
    expect(resultado).toBe(19);
  });
});
