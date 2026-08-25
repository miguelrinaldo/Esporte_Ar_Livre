import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AtletaService } from './atleta-service';

let service : AtletaService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      providers: [
        AtletaService,
        provideHttpClient
      ]
    }).compileComponents();
   
     service = TestBed.inject(AtletaService)
   

  it('Resultado esperado é calcular corretamente a idade', () => {
    const resultado = service.CalcularIdade('2007-02-11')
    expect(resultado).toBe(19);
  });
});