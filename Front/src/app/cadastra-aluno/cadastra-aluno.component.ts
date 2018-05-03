import { AppUsuarioService } from './../providers/app-usuario.service';
import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-aluno',
  templateUrl: './cadastra-aluno.component.html',
  styleUrls: ['./cadastra-aluno.component.css'],
})
export class CadastraAlunoComponent implements OnInit {

  aluno: Usuario = new Usuario();

  constructor(private service: AppUsuarioService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.aluno);
    this.service.post(this.aluno);
    this.aluno = new Usuario();
  }

}
