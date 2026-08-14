import { Injectable } from '@angular/core';
import { pessoa } from '../models/pessoa';

@Injectable({
    providedIn: 'root'
})

export class AtletaService {

    private atletas: pessoa[] = []


    adicionar(pessoa: pessoa){
        //ARMENGUE PARA GERAR ID
        pessoa.id = this.atletas.length + 1
        this.atletas.push(pessoa)
    }

    lista(){
        console.table(this.atletas)
       return this.atletas
    }

    private localizarAtleta(idAtleta: number){
         return this.atletas.findIndex(elem => elem.id === idAtleta)
    }

    remove(posicaoaArray: number){
        this.atletas.splice(1,posicaoaArray)
     }

       remove2(pessoa: pessoa){
        this.atletas = this.atletas.filter(elem => elem.id !== pessoa.id)
    }

    alterar(pessoa : pessoa){
        let posArray = this.localizarAtleta(pessoa.id)
        if(posArray >=0){
            this.atletas[posArray] = pessoa
        }
    }
    
}
