import { ExcluirLivroComponent } from './painel-funcionario/lista-acervo-funcionario/excluir-livro/excluir-livro.component';
import { CadastraLivroComponent } from './painel-funcionario/lista-acervo-funcionario/cadastra-livro/cadastra-livro.component';
import { MenuComponent } from './painel-funcionario/menu/menu.component';
import { PainelFuncionarioComponent } from './painel-funcionario/painel-funcionario.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaAcervoAlunoComponent } from './lista-acervo-aluno/lista-acervo-aluno.component';
import { ListaAcervoFuncionarioComponent } from './painel-funcionario/lista-acervo-funcionario/lista-acervo-funcionario.component';
import { ListaAlunoFunionarioComponent } from './painel-funcionario/lista-aluno-funcionario/lista-aluno-funcionario.component';
import { CadastraAlunoComponent } from './painel-funcionario/lista-aluno-funcionario/cadastra-aluno/cadastra-aluno.component';
import { ExcluirComponent } from './painel-funcionario/lista-aluno-funcionario/excluir/excluir.component';


const APP_ROUTES : Routes =[
    //Rota principal
    { path:'home', component: HomePageComponent},

    //Rotas para aluno
    { path:'login-aluno', component: LoginAlunoComponent },
    { path:'lista-acervo-aluno', component: ListaAcervoAlunoComponent },

    //Começa as rotas para funcionario
    { path: 'login-funcionario', component: LoginFuncionarioComponent},
    { path: 'painel-funcionario', component: PainelFuncionarioComponent, children:[
        { path: '', component: MenuComponent},
        { path: 'lista-acervo-funcionario',component: ListaAcervoFuncionarioComponent, children:[
            {
                path: 'cadastro-livro', component: CadastraLivroComponent
            },
            {
                path: 'excluir-livro', component: ExcluirLivroComponent
            }
        ]},
        { path: 'lista-aluno-funcionario', component: ListaAlunoFunionarioComponent, children:[
            { 
                path: 'cadastro', component:CadastraAlunoComponent
            },
            {
                path: 'excluir', component: ExcluirComponent
            }
        ]},
    ]},
    { path: '**', component: HomePageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]

export const rotas = RouterModule.forRoot(APP_ROUTES);