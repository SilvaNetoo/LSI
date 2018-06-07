import { AppLivroService } from './../providers/app-livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-acervo',
  templateUrl: './lista-acervo-aluno.component.html',
  styleUrls: ['./lista-acervo-aluno.component.css'],
  providers: [AppLivroService]
})
export class ListaAcervoAlunoComponent implements OnInit {

  livros;

  constructor(private servico: AppLivroService) {
  }

  ngOnInit() {

  }

}
