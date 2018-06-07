import { Aluno } from './../models/aluno.model';
import { BASE_LINK } from './../const';
import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from './../models/usuario.model';

//Usar essa constante para as URN mas só após o código estar rodando certinho.
const ALUNO_URN = '/alunos';

@Injectable()
export class AppAlunoService {

  contador:number = 0;
  alunos: Array<Aluno> = new Array<Aluno>();

  headers: Headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) {
    
  }

  post(aluno:Aluno){
    aluno.id = this.contador++;
    return this.http.post(`${BASE_LINK}${ALUNO_URN}/`,aluno,{headers:this.headers})
    .subscribe(
      res=>{
        console.log(res);
        return res.json();
      },
      err=>{
        console.log(err);
        return err;
      })
  }

  getAll(){
    return this.http.get(`${BASE_LINK}${ALUNO_URN}/`,{headers: this.headers}).map(
      res=>{
      return res.json();
    },err=>{
      return err;
    })
  }

  deletUsuarioByName(id: number){
    this.http.delete(`${BASE_LINK}${ALUNO_URN}/${id}`,{ headers:this.headers})
    .subscribe(res=>{
      console.log(res);
      return res;
    },
    err=>{
      return err;
    })
  }
}
