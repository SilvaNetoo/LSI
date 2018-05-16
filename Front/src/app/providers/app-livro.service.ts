import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Livro } from './../models/livro.model';

@Injectable()
export class AppLivroService {

  contador: number = 0;
  livros: Array<Livro> = new Array<Livro>();

  //Array de livros mocado para testes
  livrosTemp = [
    {
      autor: 'Tanenbaum',
      isbn: '435435',
      nome:'Sistemas operacionais modernos'
    },
    {
      autor: 'Coulouris',
      isbn: '321321',
      nome:'Sistemas distribuídos'
    },
    {
      autor: 'Daniel Abella',
      isbn: '099843',
      nome:'Arrochado e avexado metodologia ágil'
    },
    {
      autor: 'Paolo Coelho',
      isbn: '099843',
      nome:'O Alquimista'
    },
    {
      autor: 'Jorge Amado',
      isbn: '099843',
      nome:'Mar Morto'
    }
  ]

  headers: Headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) { }

  post(livro:Livro){
    livro.id = this.contador++;
    this.livros.push(livro);

    // WEB
    // this.http.post(`${BASE_LINK}`,livro,{headers:this.headers}).map(
    //   res=>{
    //     return res.json();
    //   },
    //   err=>{
    //     return err;
    //   })
  }

  getAll(){
    // return correto abaixo
    // return this.livros;
    // return temporário
    return this.livros;
    // WEB
    // this.http.get(`${BASE_LINK}`,{headers: this.headers}).map(
    //   res=>{
    //   return res.json();
    // },err=>{
    //   return err;
    // })
  }

  deletLivroByName(id: number){
    let l;
    for (let i = 0; i < this.livros.length; i++) {
      if(id == this.livros[i].id){
        const index: number = this.livros.indexOf(this.livros[i]);
        if (index !== -1) {
          this.livros.splice(index, 1);
        }  
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
