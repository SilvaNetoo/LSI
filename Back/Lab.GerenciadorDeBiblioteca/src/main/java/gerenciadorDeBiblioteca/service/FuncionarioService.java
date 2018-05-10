package gerenciadorDeBiblioteca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gerenciadorDeBiblioteca.models.Funcionario;
import gerenciadorDeBiblioteca.repository.FuncionarioRepository;

@Service
public class FuncionarioService {
	
	@Autowired
	private FuncionarioRepository repository;

	
	
	public Funcionario create(Funcionario funcionario){
		
		return repository.save(funcionario);
	}
	
	public Funcionario update (Funcionario funcionario){
		
		return repository.save(funcionario);
	}
	
	
	public void delete(Long id){
		
		repository.deleteById(id);
	}
	
	
	public List<Funcionario> buscaAll(){
		
		return (List<Funcionario>) repository.findAll();
	}
	
	public Funcionario buscar(Long id){
		
		return (Funcionario) repository.findById(id).get();
	}
	
	
	
}
