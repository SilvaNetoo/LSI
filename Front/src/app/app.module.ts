import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaAcervoAlunoComponent } from './lista-acervo-aluno/lista-acervo-aluno.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
//COMPONENTE
import { NavbarComponent } from './navbar/navbar.component';
import { PainelFuncionarioComponent } from './painel-funcionario/painel-funcionario.component';
import { PainelFuncionarioModule } from './painel-funcionario/painel-funcionario.module';
import { AppAlunoService } from './providers/app-aluno.service';
import { AppLivroService } from './providers/app-livro.service';
//ROTAS
import { rotas } from './rotas';

@NgModule({
  declarations: [
    AppComponent,
    LoginAlunoComponent,
    LoginFuncionarioComponent,
    NavbarComponent,
    HomePageComponent,
    PainelFuncionarioComponent,
    ListaAcervoAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PainelFuncionarioModule,
    rotas,
  ],
  providers: [AppAlunoService, AppLivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
