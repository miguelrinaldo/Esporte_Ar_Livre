import { TestBed } from '@angular/core/testing';
import { CorridaService } from '../../service/corrida/corrida-service';
import { CorridaListaComponent } from './corrida-lista-component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { Corrida } from '../../models/Corrida';


describe('CorridaLista', () => {
  let service: CorridaService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      imports: [
        CorridaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

 httpMock = TestBed.inject(HttpTestingController)


 service = TestBed.inject(CorridaService)
  });

  it('Salvar as corridas', () => {
    const corrida: Corrida = {
      "data_corrida": "2026-09-15",
      "descricao_corrida": "São Cri Cri",
      "distancia5km": true,
      "distancia10km": true,
      "distancia25km": true,
      "id": 2
    }

    service.salvarCorrida(corrida).subscribe(result => {
      expect(result).toEqual(corrida)
    })


    it('Resultado da lista das corridas', () =>{
      const corrida: Corrida = {
      "data_corrida": "2026-09-15",
      "descricao_corrida": "São Cri Cri",
      "distancia5km": true,
      "distancia10km": true,
      "distancia25km": true,
      "id": 2
      }

      service.listarCorridas().subscribe(corrida =>{
        expect(corrida.length).toBe(1)
        expect(corrida[2].data_corrida).toBe('2026-09-15')
      })
    })
  });
});
