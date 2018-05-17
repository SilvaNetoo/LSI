import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppLivroService } from '../../../providers/app-livro.service';

@Component({
  selector: 'app-excluir-livro',
  templateUrl: './excluir-livro.component.html',
  styleUrls: ['./excluir-livro.component.css']
})
export class ExcluirLivroComponent implements OnInit {

  livroId:number;
  constructor(
    private servico: AppLivroService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (queryParams:any)=>{
        if(queryParams){
          this.livroId = queryParams['key'];
          // this.usuario = findUser(usuarioKey)
        }
      }
    ) 
  }
  
  ngOnInit() {
  }

  excluirLivro(){
    console.log('Id passado na url '+ this.livroId)
    this.servico.deletLivroByName(this.livroId);
  }

}
