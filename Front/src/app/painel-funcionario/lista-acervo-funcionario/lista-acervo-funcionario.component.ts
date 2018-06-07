import { Component, OnInit } from '@angular/core';
import { AppLivroService } from '../../providers/app-livro.service';

@Component({
  selector: 'app-lista-acervo-funcionario',
  templateUrl: './lista-acervo-funcionario.component.html',
  styleUrls: ['./lista-acervo-funcionario.component.css']
})
export class ListaAcervoFuncionarioComponent implements OnInit {

  constructor(private servico: AppLivroService) {
  }

  ngOnInit() {
  }

}
