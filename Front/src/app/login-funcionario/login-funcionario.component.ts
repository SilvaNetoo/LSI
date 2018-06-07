import { Router } from '@angular/router';
import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  usuarios = [
    {
      nome:'funcionario',
      email:'funcionario@email.com',
      senha:'123456'
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuario.email === this.usuarios[i].email && this.usuario.senha === this.usuarios[i].senha){
        this.router.navigate(['/painel-funcionario'])
      }
    }
  }

}
