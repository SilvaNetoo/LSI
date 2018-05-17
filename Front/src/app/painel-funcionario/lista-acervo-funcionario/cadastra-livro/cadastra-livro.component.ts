import { AppLivroService } from './../../../providers/app-livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../../../models/livro.model';

@Component({
  selector: 'app-cadastra-livro',
  templateUrl: './cadastra-livro.component.html',
  styleUrls: ['./cadastra-livro.component.css']
})
export class CadastraLivroComponent implements OnInit {

  livro: Livro = new Livro();

  constructor(private service: AppLivroService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.livro);
    this.service.post(this.livro);
    this.livro = new Livro();
  }

}
