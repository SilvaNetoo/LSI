import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaAcervoFuncionarioComponent } from './lista-acervo-funcionario/lista-acervo-funcionario.component';
import { ListaAcervoFuncionarioModule } from './lista-acervo-funcionario/lista-acervo-funcionario.module';
import { ListaAlunoFunionarioComponent } from './lista-aluno-funcionario/lista-aluno-funcionario.component';
import { ListaAlunoFuncionarioModule } from './lista-aluno-funcionario/lista-aluno-funcionario.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    ListaAlunoFuncionarioModule,
    ListaAcervoFuncionarioModule,
    RouterModule
  ],
  declarations: [
    ListaAlunoFunionarioComponent,
    ListaAcervoFuncionarioComponent,
    MenuComponent
  ]
})
export class PainelFuncionarioModule { }
