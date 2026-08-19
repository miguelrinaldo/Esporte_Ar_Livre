import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/Corrida';
@Injectable({
    providedIn: 'root',
})

export class CorridaService {
    constructor(private http: HttpClient) {}
    
    salvarCorrida(corrida: Corrida){

        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
        
        this.http.post<Corrida>(urlApi, corrida)
        .subscribe({
          next: (respostaAPI) => {
            return respostaAPI
          },

          error: (msgErro) => {
            return msgErro
          }
        })
    }

    listarCorrida(idcorrida: Number){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idcorrida}`

        this.http.delete<Corrida[]>(urlApi)
        .subscribe({
            next: (respostaApi) => {
                return respostaApi
            },
            error: (msgErro) => {
                msgErro
            }
        })
    }

    excluirCorrida(idcorrida: Number){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idcorrida}`
        this.http.delete<Corrida>(urlApi)
        .subscribe({
            next: (respostaApi) => {
                return respostaApi
            },
            error: (msgErro) => {
                msgErro
            }
        })
    }

  alterarCorrida(corrida: Corrida){
     const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`
        this.http.delete<Corrida>(urlApi)
        .subscribe({
            next: (respostaApi) => {
                return respostaApi
            },
            error: (msgErro) => {
                msgErro
            }
        })
  }
     
}
