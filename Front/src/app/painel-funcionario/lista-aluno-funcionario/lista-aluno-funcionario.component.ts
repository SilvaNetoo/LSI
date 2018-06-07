import { Component, OnInit } from '@angular/core';
import { AppAlunoService } from '../../providers/app-aluno.service';
import { Aluno } from './../../models/aluno.model';

@Component({
  selector: 'app-lista-aluno-funcionario',
  templateUrl: './lista-aluno-funcionario.component.html',
  styleUrls: ['./lista-aluno-funcionario.component.css']
})
export class ListaAlunoFunionarioComponent implements OnInit {

  alunos: Array<Aluno>;
  aluno: Aluno;

  constructor(private servico: AppAlunoService) {
    this.aluno = new Aluno();
    this.aluno.nome = 'Neto';
    this.aluno.email = 'neto@gmail.com';
  }

  ngOnInit() {
    this.servico.post(this.aluno)
    this.servico.getAll().subscribe(res=>{
      this.alunos = res;
    }, err=>{
      return err;
    });
  }

  ngOnChanges(){
    this.servico.getAll().subscribe(res=>{
      this.alunos = res;
    }, err=>{
      console.log('Fracasso get alunos')
      return err;
    });
  }
  
}
