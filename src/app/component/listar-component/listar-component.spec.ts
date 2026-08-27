import { TestBed } from '@angular/core/testing';
import { AtletaService } from '../../service/atleta/atleta-service';
import { provideHttpClient } from '@angular/common/http';
import { Atleta } from '../../models/atleta';
import { provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing'




describe('AtletaListarComponent', () => {

  let service: AtletaService
  let httpMock: HttpTestingController

  beforeEach(async () => {
     TestBed.configureTestingModule({
    providers: [
      AtletaService,
      provideHttpClient(),
      provideHttpClientTesting()
    ]
    }).compileComponents();

   httpMock = TestBed.inject(HttpTestingController) 


   service = TestBed.inject(AtletaService)

   

  });

  it('Resultado esperado é calcular a idade', () => {
    const resultado = service.CalcularIdade('2007-02-11')

    expect(resultado).toBe(19);
  });


 it ('Resultado esperado a lista de atletas', () =>{
  const atletas: Atleta[] = [{
    "nome": "Rute",
    "cpf": 78945612300,
    "sexo": "",
    "cep": 49001456,
    "ruaLogradouro": "Rua Capela",
    "bairro": "Centro",
    "cidade": "Aracaju",
    "uf": "SE",
    "data_nascimento": "1980-02-12",
    "id": 1
  },
{
    "nome": "Maria",
    "cpf": 78945612300,
    "sexo": "",
    "cep": 49001456,
    "ruaLogradouro": "Rua Capela",
    "bairro": "Centro",
    "cidade": "Aracaju",
    "uf": "SE",
    "data_nascimento": "1980-02-12",
    "id": 2
    }]

  service.listarAtleta().subscribe(atletas =>{
  expect(atletas.length).toEqual(atletas)
  expect(atletas[0].nome).toBe('João')
  expect(atletas[1].nome).toBe('Maria')

  const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta') 

  expect(requisicao.request.method).toBe('GET')

  requisicao.flush(atletas)
    
})


})


 it('Resultado esperado é calcular a idade', () => {
  const atleta : Atleta ={
     "nome": "Rute",
    "cpf": 78945612300,
    "sexo": "",
    "cep": 49001456,
    "ruaLogradouro": "Rua Capela",
    "bairro": "Centro",
    "cidade": "Aracaju",
    "uf": "SE",
    "data_nascimento": "1980-02-12",
    "id": 1
  }

  service.adicionarAtleta(atleta).subscribe(result => {
  expect(result).toEqual(atleta)
  })


  const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta')

  expect(requisicao.request.method).toBe('POST');
  
  expect(requisicao.request.body).toEqual(atleta);

  requisicao.flush(atleta);
 }) 
 
 // PUT
  it('deve editar um atleta', () => {

    const atleta: Atleta = {
      "nome": "João Souza",
      "cpf": 12345678910,
      "sexo": "M",
      "cep": 49123123,
      "bairro": "Centro",
      "cidade": "Aracaju",
      "uf": "Se",
      "data_nascimento": "2000-02-25",
      "id": 1,
      "ruaLogradouro": "Rua Sei lá das quantas"
    }


    service.alterarAtleta(atleta).subscribe(atletas => {

      expect(atletas).toEqual(atleta);

    });


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/1'
    );


    expect(request.request.method).toBe('PUT');

    expect(request.request.body).toEqual(atleta);


    request.flush(atleta);

  });


  // DELETE
  it('deve excluir um atleta', () => {
     const atleta : Atleta ={
     "nome": "Rute",
    "cpf": 78945612300,
    "sexo": "",
    "cep": 49001456,
    "ruaLogradouro": "Rua Capela",
    "bairro": "Centro",
    "cidade": "Aracaju",
    "uf": "SE",
    "data_nascimento": "1980-02-12",
    "id": 1
  }


    service.excluirAtleta(atleta).subscribe(atletas => {

      expect(atletas).toEqual(atletas)
    });


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/1'
    );


    expect(request.request.method).toBe('DELETE');


    request.flush(null);

  });

});
  
 
 

