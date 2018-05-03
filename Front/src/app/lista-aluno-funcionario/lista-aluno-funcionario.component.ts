import { Usuario } from './../models/usuario.model';
import { AppUsuarioService } from './../providers/app-usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-aluno-funcionario',
  templateUrl: './lista-aluno-funcionario.component.html',
  styleUrls: ['./lista-aluno-funcionario.component.css']
})
export class ListaAlunoFunionarioComponent implements OnInit {

  alunos;

  constructor(private servico: AppUsuarioService) {
    
  }

  ngOnInit() {
  }

  ngDoCheck(){
    this.alunos = this.servico.getAll();
    console.log(this.alunos);
  }

  excluir(){
    // this.servic
  }
}
