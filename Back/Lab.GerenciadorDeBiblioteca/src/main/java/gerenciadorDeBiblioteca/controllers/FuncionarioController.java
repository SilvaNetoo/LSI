package gerenciadorDeBiblioteca.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gerenciadorDeBiblioteca.models.Funcionario;
import gerenciadorDeBiblioteca.service.FuncionarioService;

@RestController
@RequestMapping(value = "/funcionarios")
public class FuncionarioController {

	@Autowired
	private FuncionarioService service;
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Funcionario> buscar(@PathVariable Long id){
		
		
		return new ResponseEntity<Funcionario>(service.buscar(id), HttpStatus.OK) ;
		
	}
	
	@PostMapping
	public ResponseEntity<Funcionario> adicionar(@RequestBody Funcionario funcionario){
		
		return new ResponseEntity<Funcionario>(service.create(funcionario), HttpStatus.CREATED);
	}
	
	
	public ResponseEntity<Funcionario> editar(@RequestBody Funcionario funcionario){
		
		
		return new ResponseEntity<Funcionario>(service.update(funcionario), HttpStatus.OK);
	}
	

	@GetMapping
	public ResponseEntity<List<Funcionario>> getTodos(){
		
		
		return new ResponseEntity<List<Funcionario>>(service.buscaAll(), HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		service.delete(id);
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}
	
	
}
