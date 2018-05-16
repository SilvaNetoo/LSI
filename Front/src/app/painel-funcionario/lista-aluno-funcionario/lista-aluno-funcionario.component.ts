import { Component, OnInit } from '@angular/core';
import { AppAlunoService } from '../../providers/app-aluno.service';

@Component({
  selector: 'app-lista-aluno-funcionario',
  templateUrl: './lista-aluno-funcionario.component.html',
  styleUrls: ['./lista-aluno-funcionario.component.css']
})
export class ListaAlunoFunionarioComponent implements OnInit {

  alunos;

  constructor(private servico: AppAlunoService) {
    
  }

  ngOnInit() {
  }

  ngDoCheck(){
    this.alunos = this.servico.getAll();
  }
  
}
