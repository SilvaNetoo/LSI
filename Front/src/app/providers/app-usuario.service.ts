import { BASE_LINK } from './../const';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from './../models/usuario.model';

@Injectable()
export class AppUsuarioService {

  usuarios: Array<Usuario> = new Array<Usuario>();

    //Array de alunos mocado para testes
    alunoTemp = [
      { 
        nome: 'aluno1',
        email:'aluno1@email.com',
        senha: '123456'
      },
      { 
        nome: 'aluno2',
        email:'aluno2@email.com',
        senha: '123456'
      },
      { 
        nome: 'aluno3',
        email:'aluno3@email.com',
        senha: '123456'
      },
      {
        nome: 'aluno4',
        email:'aluno4@email.com',
        senha: '123456'
      },
    ]

  headers: Headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) { }

  post(usuario:Usuario){
    this.usuarios.push(usuario);

    // WEB
    // this.http.post(`${BASE_LINK}`,usuario,{headers:this.headers}).map(
    //   res=>{
    //     return res.json();
    //   },
    //   err=>{
    //     return err;
    //   })
  }

  getAll(){
    // return correto abaixo
    // return this.usuarios;
    // return temporário
    return this.usuarios;
    // WEB
    // this.http.get(`${BASE_LINK}`,{headers: this.headers}).map(
    //   res=>{
    //   return res.json();
    // },err=>{
    //   return err;
    // })
  }

  deletUsuarioByName(nome: string){
    let l;
    console.log('chegou no delete')
    console.log(nome)
    for (let i = 0; i < this.usuarios.length; i++) {
      if(nome === this.usuarios[i].nome){
        this.usuarios.splice(i)
      }else{
        l = 'Usuário não encontrado!';
      }
    }
    return l;

    // //Web
    // this.http.delete(`${BASE_LINK}/${email}`,{ headers:this.headers })
    // .map(res=>{
    //   return res.json();
    // },
    // err=>{
    //   return err;
    // })
  }
}
