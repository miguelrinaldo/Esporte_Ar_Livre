import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InscricaoModels } from '../../models/inscricao_models';
import { InscricaoService } from '../../service/inscricaoservice/inscricao-service';
import { ActivatedRoute } from '@angular/router';
import { Atleta } from '../../models/atleta';
import { AtletaService } from '../../service/atleta/atleta-service';
import { CorridaService } from '../../service/corrida/corrida-service';
import { Corrida } from '../../models/Corrida';


@Component({
  selector: 'app-inscricao',
  imports: [FormsModule],
  templateUrl: './inscricao.html',
  styleUrl: './inscricao.css',
})
export class Inscricao {
  id = 0 
  atletaCadastrado = false
  buscarCpf = ''
  corridaEscolhida = false
  distanciaSelecionada = false
  kit = ''
  categoriaIdade = ''

  atleta?: Atleta;
  idInscricao = 0
  atletas: Atleta[] = []
  corrida: Corrida[] = []

  constructor(
    private atletaService: AtletaService,
    private corridaService: CorridaService,
    private inscricao: InscricaoService,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(){
      this.idInscricao = Number(this.activeRoute.snapshot.paramMap.get('id'))
      this.listarPessoa()
      this.listarCorridas()
}

listarPessoa(){
  this.atletaService.listarAtleta().subscribe({
    next: (dados) => {
      this.atletas = dados
      console.log('Atletas:', this.atletas)
    },
    error: (msgErro) => {
     console.error('Erro ao buscar atletas:', msgErro)
    }
  })
}

listarCorridas(){
  this.corridaService.listarCorridas().subscribe({
  next: (dados) => {
      this.corrida = dados
      console.log('Atletas:', this.corrida)
    },
    error: (msgErro) => {
     console.error('Erro ao buscar atletas:', msgErro)
    }
})
}



formInscricao(){
  const inscricaoNewObg = new InscricaoModels()
  inscricaoNewObg.atletaCadastro = this.atletaCadastrado
  inscricaoNewObg.buscarCpf = this.buscarCpf
  inscricaoNewObg.corridaEscolhida = this.corridaEscolhida
  inscricaoNewObg.distanciaSelecionada = this.distanciaSelecionada
  inscricaoNewObg.kit = this.kit
  inscricaoNewObg.categoriaIdade = this.categoriaIdade

   console.log('atleta: ', this.atletaCadastrado)
    console.log('CPF:', this.buscarCpf);
  console.log('Corrida escolhida:', this.corridaEscolhida);
  console.log('kms:', this.distanciaSelecionada);
  console.log('Kit:', this.kit);
  console.log('Categoria:', this.categoriaIdade);
}
  limparDados(){
    this.atletaCadastrado = false
    this.buscarCpf = ''
    this.corridaEscolhida = false
    this.distanciaSelecionada = false
    this.kit = ''
    this.categoriaIdade = ''
  }

   buscarAtletaPorCpf(){
    const cpf = this.buscarCpf.replace(/\D/g, '')

    if(cpf.length !== 11){
      this.atleta = undefined
      this.atletaCadastrado = false
      return
    }
   this.atletaService.listarAtleta().subscribe(lista => {
      const encontrado = lista.find(
        Pessoa => String(Pessoa.cpf).replace(/\D/g, '') === cpf
      )

      if(encontrado){
        this.atleta = encontrado
        this.atletaCadastrado = true
        console.log(this.atleta)
      }else{
        this.atleta = undefined
        this.atletaCadastrado = false
        alert('CPF não encontrado!')
      }
    })
  }

  
  preencherCpf(idSelecionado: string | number){
    const atletaSelecionado = this.atletas.find(
      atleta => String(atleta.id) === String(idSelecionado))

    if(atletaSelecionado){
      this.buscarCpf = String(atletaSelecionado.cpf)
    }
 
 
  }
}
