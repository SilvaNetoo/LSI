import { Http, Headers } from '@angular/http';
import { Livro } from './../models/livro.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AppLivroService {

  livros: Array<Livro> = new Array<Livro>();

  //Array de livros mocado para testes
  livrosTemp = [
    {
      nome:'livro1'
    },
    {
      nome:'livro2'
    },
    {
      nome:'livro3'
    },
    {
      nome:'livro4'
    },
  ]

  headers: Headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) { }

  post(livro:Livro){
    this.livros.push(livro);
    // this.http.post(`${BASE_LINK}`,usuario,{headers:this.headers}).map(
    //   res=>{
    //   return res.json();
    //   },
    //   err=>{
    //     return err;
    //   })
  }

  getAll(){
    // return certo abaixo
    // return this.livros;
    //return para teste
    return this.livrosTemp;
    // this.http.get(`${BASE_LINK}`,{headers: this.headers}).map(
    //   res=>{
    //   return res.json();
    // },err=>{
    //   return err;
    // })
  }

  getLivroByName(){
    let l;
    for (let i = 0; i < this.livros.length; i++) {
      const l = this.livros[i];
    }
    return l;
  }

  deletLivroByName(nome: string){
    let l;
    for (let i = 0; i < this.livros.length; i++) {
      if(nome === this.livros[i].nome){
        l = this.livros[i].nome;
      }else{
        l = 'Livro não encontrado!'; 
      }
    }
    return l;
  }

}
