import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../models/aluno.model';
import { AppAlunoService } from '../../../providers/app-aluno.service';

@Component({
  selector: 'app-cadastra-aluno',
  templateUrl: './cadastra-aluno.component.html',
  styleUrls: ['./cadastra-aluno.component.css'],
})
export class CadastraAlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(private service: AppAlunoService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.aluno);
    this.service.post(this.aluno).subscribe(res=>{
      console.log(res);
      return res;
    }, err=>{
      console.log('bla bla');
      return err;
    });
    this.aluno = new Aluno();
  }

}
