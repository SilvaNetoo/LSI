import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlunoFunionarioComponent } from './lista-aluno-funcionario.component';

describe('ListaAlunoFunionarioComponent', () => {
  let component: ListaAlunoFunionarioComponent;
  let fixture: ComponentFixture<ListaAlunoFunionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlunoFunionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlunoFunionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
