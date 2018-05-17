import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcluirComponent } from './excluir/excluir.component';
import { CadastraAlunoComponent } from './cadastra-aluno/cadastra-aluno.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CadastraAlunoComponent,
    ExcluirComponent
  ]
})
export class ListaAlunoFuncionarioModule { }
