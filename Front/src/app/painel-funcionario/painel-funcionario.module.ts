import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListaAcervoFuncionarioComponent } from './lista-acervo-funcionario/lista-acervo-funcionario.component';
import { ListaAlunoFunionarioComponent } from './lista-aluno-funcionario/lista-aluno-funcionario.component';
import { ListaAlunoFuncionarioModule } from './lista-aluno-funcionario/lista-aluno-funcionario.module';
import { MenuComponent } from './menu/menu.component';
import { ExcluirLivroComponent } from './lista-acervo-funcionario/excluir-livro/excluir-livro.component';

@NgModule({
  imports: [
    CommonModule,
    ListaAlunoFuncionarioModule,
    RouterModule
  ],
  declarations: [
    ListaAlunoFunionarioComponent,
    ListaAcervoFuncionarioComponent,
    MenuComponent,
    ExcluirLivroComponent,
  ]
})
export class PainelFuncionarioModule { }
