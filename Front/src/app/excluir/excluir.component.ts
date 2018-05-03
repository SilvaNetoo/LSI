import { AppUsuarioService } from './../providers/app-usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  usuarioNome:string;
  constructor(
    private servico: AppUsuarioService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (queryParams:any)=>{
        if(queryParams){
          this.usuarioNome = queryParams['key'];
          // this.usuario = findUser(usuarioKey)
        }
      }
    ) 
  }
  
  ngOnInit() {
  }

  excluirUser(){
    console.log("chamou o excluir")
    console.log(this.usuarioNome)
    this.servico.deletUsuarioByName(this.usuarioNome);
  }

}
