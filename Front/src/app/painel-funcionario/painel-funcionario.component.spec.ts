import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelFuncionarioComponent } from './painel-funcionario.component';

describe('PainelFuncionarioComponent', () => {
  let component: PainelFuncionarioComponent;
  let fixture: ComponentFixture<PainelFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
