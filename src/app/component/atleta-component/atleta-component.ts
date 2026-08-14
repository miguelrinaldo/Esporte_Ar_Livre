import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atleta-service';
import { pessoa } from '../../models/pessoa';
@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  //DECLARAÇÃO DOS ATRIBUTOS DO COMPONENTE
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARAÇÃO DO CONSTRUTOR 
  constructor(private atletaService: AtletaService){}

  //DECLARAÇÃO DE FUNÇÕES
exibeDados(){
   console.log(this.nome, this.cpf, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
}


salvarAtleta(){
  const pessoaAtleta = new pessoa()

  pessoaAtleta.nome = this.nome
  pessoaAtleta.cpf = this.cpf
  pessoaAtleta.sexo = this.sexo
  pessoaAtleta.cep = this.cep
  pessoaAtleta.ruaLogradouro = this.ruaLogradouro
  pessoaAtleta.bairro = this.bairro
  pessoaAtleta.cidade = this.cidade
  pessoaAtleta.uf = this.uf

}
    
}


