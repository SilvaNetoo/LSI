package gerenciadorDeBiblioteca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenciadorDeBiblioteca.models.Aluno;
import gerenciadorDeBiblioteca.repository.AlunoRepository;

@Service
public class AlunoService {

	@Autowired
	private AlunoRepository repository;
	
	
	
	public Aluno createAluno(Aluno aluno){
		return repository.save(aluno);
		
	}
	
	public Aluno updateAluno(Aluno aluno){
		return repository.save(aluno);
		
	}
	
	public void deleteAluno(Aluno aluno){
		repository.delete(aluno);
		
	}
	
	public Aluno buscaById(Long id){
		return (Aluno) repository.findById(id).get();
		
	}
	
	
	public List<Aluno> buscarAlunos(){
		return (List<Aluno>) repository.findAll();
		
	}
	
	
	
}
