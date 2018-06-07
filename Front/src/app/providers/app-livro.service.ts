import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Livro } from './../models/livro.model';
import { BASE_LINK } from '../const';

const LIVRO_URN = '/livros';

@Injectable()
export class AppLivroService {

  contador:number = 0;
  livros: Array<Livro> = new Array<Livro>();

  headers: Headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) {
    this.getAll();
  }

  post(livro:Livro){
    livro.id = this.contador++;
    return this.http.post(`${BASE_LINK}${LIVRO_URN}/`,livro,{headers:this.headers})
    .subscribe(
      res=>{
        this.getAll();
        return res.json();
      },
      err=>{
        console.log(err);
        return err;
      })
  }

  getAll(){
    return this.http.get(`${BASE_LINK}${LIVRO_URN}/`,{headers: this.headers}).map(res=> res.json())
    .subscribe( res => {
      this.livros = res;  
      console.log(this.livros);
    })
  }

  deletLivroByName(id: number){
    this.http.delete(`${BASE_LINK}${LIVRO_URN}/${id}`,{ headers:this.headers})
    .subscribe(res=>{
      this.getAll();
      return res;
    },
    err=>{
      return err;
    })
  }
}
