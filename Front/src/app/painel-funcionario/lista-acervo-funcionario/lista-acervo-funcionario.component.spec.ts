import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcervoFuncionarioComponent } from './lista-acervo-funcionario.component';

describe('ListaAcervoFuncionarioComponent', () => {
  let component: ListaAcervoFuncionarioComponent;
  let fixture: ComponentFixture<ListaAcervoFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAcervoFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAcervoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
