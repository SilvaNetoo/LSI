import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CadastraLivroComponent } from './cadastra-livro/cadastra-livro.component';
import { ExcluirLivroComponent } from './excluir-livro/excluir-livro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CadastraLivroComponent,
    ExcluirLivroComponent
  ]
})
export class ListaAcervoFuncionarioModule { }
