import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcervoComponent } from './lista-acervo.component';

describe('ListaAcervoComponent', () => {
  let component: ListaAcervoComponent;
  let fixture: ComponentFixture<ListaAcervoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAcervoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAcervoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
