import { ExcluirComponent } from './excluir/excluir.component';
import { CadastraAlunoComponent } from './cadastra-aluno/cadastra-aluno.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaAcervoFuncionarioComponent } from './lista-acervo-funcionario/lista-acervo-funcionario.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaAcervoAlunoComponent } from './lista-acervo-aluno/lista-acervo-aluno.component';
import { ListaAlunoFunionarioComponent } from './lista-aluno-funcionario/lista-aluno-funcionario.component';


const APP_ROUTES : Routes =[
    //Rota principal
    { path:'home', component: HomePageComponent},

    //Rotas para aluno
    { path:'login-aluno', component: LoginAlunoComponent },
    { path:'lista-acervo-aluno', component: ListaAcervoAlunoComponent },

    //Começa as rotas para funcionario
    { path: 'login-funcionario', component: LoginFuncionarioComponent},
    { path: 'login-acervo-funcionario',component: ListaAcervoFuncionarioComponent},
    { path: 'lista-aluno-funcionario', component: ListaAlunoFunionarioComponent, children:[
        { 
            path: 'cadastro', component:CadastraAlunoComponent
        },
        {
            path: 'excluir', component: ExcluirComponent
        }
    ]},
    { path: '**', component: HomePageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]

export const rotas = RouterModule.forRoot(APP_ROUTES);