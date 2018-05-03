package gerenciadorDeBiblioteca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenciadorDeBiblioteca.models.Livro;
import gerenciadorDeBiblioteca.repository.LivroRepository;


@Service
public class LivroService {
	
	@Autowired
	private LivroRepository repository;

	
	public Livro createLivro(Livro livro){
		
		return repository.save(livro);
	}
	
	public Livro updateLivro(Livro livro){
		
		return repository.save(livro);
	}
	
	public void deleteLivro(Long id){
		
		repository.deleteById(id);
	}
	
	public List<Livro> buscaAll(){
		return (List<Livro>) this.repository.findAll();
	}
	
	public Livro buscaById(Long id){
		
		return (Livro) repository.findById(id).get();
	}
	
	
	
}
