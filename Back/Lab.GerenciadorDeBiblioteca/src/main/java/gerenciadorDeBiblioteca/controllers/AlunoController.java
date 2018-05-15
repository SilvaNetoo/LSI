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



import gerenciadorDeBiblioteca.models.Aluno;
import gerenciadorDeBiblioteca.service.AlunoService;

@RestController
@RequestMapping(value="/alunos")
public class AlunoController {

	@Autowired
	private AlunoService service;
	
	
	@GetMapping(value = "/{idArg}")
	public ResponseEntity<Aluno> buscar(@PathVariable Long id){
		
		
		return new ResponseEntity<Aluno>(service.buscaById(id), HttpStatus.OK) ;
		
	}
	
	@PostMapping
	public ResponseEntity<Aluno> adicionar(@RequestBody Aluno aluno){
		
		return new ResponseEntity<Aluno>(service.createAluno(aluno), HttpStatus.CREATED);
	}
	
	
	public ResponseEntity<Aluno> editar(@RequestBody Aluno aluno){
		
		
		return new ResponseEntity<Aluno>(service.updateAluno(aluno), HttpStatus.OK);
	}
	

	@GetMapping
	public ResponseEntity<List<Aluno>> getTodos(){
		
		
		return new ResponseEntity<List<Aluno>>(service.buscarAlunos(), HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		
		Aluno aluno = service.buscaById(id);
		service.deleteAluno(aluno);
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}
	
	
	
}
