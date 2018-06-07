import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppAlunoService } from '../../../providers/app-aluno.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  usuarioId:number;
  constructor(
    private servico: AppAlunoService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (queryParams:any)=>{
        if(queryParams){
          this.usuarioId = queryParams['key'];
          console.log(this.usuarioId);
          // this.usuario = findUser(usuarioKey)
        }
      }
    ) 
  }
  
  ngOnInit() {
  }

  excluirUser(){
    this.servico.deletUsuarioByName(this.usuarioId);
  }

}
