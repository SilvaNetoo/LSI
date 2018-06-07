import { Component, OnInit } from '@angular/core';
import { AppAlunoService } from '../../providers/app-aluno.service';
import { Aluno } from './../../models/aluno.model';

@Component({
  selector: 'app-lista-aluno-funcionario',
  templateUrl: './lista-aluno-funcionario.component.html',
  styleUrls: ['./lista-aluno-funcionario.component.css']
})
export class ListaAlunoFunionarioComponent implements OnInit {

  constructor(private servico: AppAlunoService) {
  }

  ngOnInit() {
  }
  
}
