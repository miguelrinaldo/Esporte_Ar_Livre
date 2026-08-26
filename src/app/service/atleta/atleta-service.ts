import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Atleta } from '../../models/atleta';


@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  //DECLARAÇÃO CONSTRUTOR
  constructor(private http: HttpClient) { }

  //ADICIONAR NA API
  adicionarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`

    return this.http.post<Atleta>(urlApi, atleta)
  }

  //LISTAR ATLETAS NA API
  listarAtleta(): Observable<Atleta[]> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`

    return this.http.get<Atleta[]>(urlApi)
  }

  //LISTAR ATLETA
  listarAtletas(idatleta: number):Observable<Atleta>{
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idatleta}`

    return this.http.get<Atleta>(urlApi)
  }

  //EXCLUIR NA API
  excluirAtleta(pessoa:Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${pessoa.id}`

    return this.http.delete<Atleta>(urlApi)
  }

  //ALTERAR NA API
  alterarAtleta(pessoa: Atleta):Observable<Atleta>{
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${pessoa.id}`

    return this.http.put<Atleta>(urlApi, pessoa)
  }

 CalcularIdade(data_nascimento: string): number{
    const nascimento = new Date (data_nascimento)
    const agora = new Date

    let idade = agora.getFullYear() - nascimento.getFullYear()
    const mes = agora.getMonth() - nascimento.getMonth()

    if(mes < 0 || mes === 0 && agora.getDate() < nascimento.getDate()){
      idade--
    }
    return idade
  }




}

