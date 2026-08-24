import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../models/pessoa';
import { InscricaoService } from '../../service/inscricaoservice/inscricao-service'; 
import { Corrida } from '../../models/Corrida'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inscricao',
  imports: [FormsModule],
  templateUrl: './inscricao.html',
  styleUrl: './inscricao.css',
})
export class Inscricao {
  
}
