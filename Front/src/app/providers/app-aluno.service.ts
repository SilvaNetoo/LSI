import { Aluno } from './../models/aluno.model';
import { BASE_LINK } from './../const';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from './../models/usuario.model';

@Injectable()
export class AppAlunoService {

  contador:number = 0;
  alunos: Array<Aluno> = new Array<Aluno>();

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

  post(aluno:Aluno){
    aluno.id = this.contador++;
    // this.alunos.push(aluno);
    console.log(aluno)
    // WEB
    return this.http.post(`${BASE_LINK}/alunos/`,aluno,{headers:this.headers})
    .map(
      res=>{
        console.log('sucesso!')
        console.log(res)
        return res.json();
      },
      err=>{
        console.log('fracasso!')
        console.log(err)
        return err;
      })
  }

  getAll(){
    // return correto abaixo
    // return this.alunos;
    // return temporário
    // return this.alunos;
    // WEB
    return this.http.get(`${BASE_LINK}/alunos/`,{headers: this.headers}).map(
      res=>{
      return res.json();
    },err=>{
      return err;
    })
  }

  deletUsuarioByName(id: number){
    // let l;
    // for (let i = 0; i < this.alunos.length; i++) {
    //   if(id == this.alunos[i].id){
    //     const index: number = this.alunos.indexOf(this.alunos[i]);
    //     if (index !== -1) {
    //       this.alunos.splice(index, 1);
    //     }  
    //   }else{
    //     l = 'Usuário não encontrado!';
    //   }
    // }
    // return l;

    // //Web
    this.http.delete(`${BASE_LINK}/${id}/`,{ headers:this.headers })
    .map(res=>{
      return res.json();
    },
    err=>{
      return err;
    })
  }
}
