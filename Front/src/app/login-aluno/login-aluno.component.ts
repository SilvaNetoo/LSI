import { AppAlunoService } from './../providers/app-aluno.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.css'],
})
export class LoginAlunoComponent implements OnInit {

  usuario: Usuario = new Usuario();

  usuarios = [
    {
      nome:'aluno1',
      email:'aluno1@email.com',
      senha:'123456'
    },
    {
      nome:'aluno2',
      email:'aluno2@email.com',
      senha:'123456'
    }
  ]

  constructor(
    private servico: AppAlunoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    let l = this.servico.getAll();
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuario.email === this.usuarios[i].email && this.usuario.senha === this.usuarios[i].senha){
        this.router.navigate(['/lista-acervo-aluno'])
      }
    }
  }

}
