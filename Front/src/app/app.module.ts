import { AppLivroService } from './providers/app-livro.service';
import { AppUsuarioService } from './providers/app-usuario.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

//COMPONENTE
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ListaAcervoAlunoComponent } from './lista-acervo-aluno/lista-acervo-aluno.component';
import { ListaAlunoFunionarioComponent } from './lista-aluno-funcionario/lista-aluno-funcionario.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { ListaAcervoFuncionarioComponent } from './lista-acervo-funcionario/lista-acervo-funcionario.component';
import { HomePageComponent } from './home-page/home-page.component';

//ROTAS
import { rotas } from './rotas';
import { CadastraAlunoComponent } from './cadastra-aluno/cadastra-aluno.component';
import { ExcluirComponent } from './excluir/excluir.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginAlunoComponent,
    ListaAcervoAlunoComponent,
    ListaAlunoFunionarioComponent,
    LoginFuncionarioComponent,
    ListaAcervoFuncionarioComponent,
    NavbarComponent,
    HomePageComponent,
    CadastraAlunoComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rotas
  ],
  providers: [AppUsuarioService, AppLivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
