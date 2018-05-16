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
import gerenciadorDeBiblioteca.models.Livro;
import gerenciadorDeBiblioteca.service.LivroService;

@RestController
@RequestMapping(value ="/livros")
public class LivroController {

	
	@Autowired
	private LivroService service;
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Livro> buscar(@PathVariable Long id){
		
		
		return new ResponseEntity<Livro>(service.buscaById(id), HttpStatus.OK) ;
		
	}
	
	@PostMapping
	public ResponseEntity<Livro> adicionar(@RequestBody Livro livro){
		
		return new ResponseEntity<Livro>(service.createLivro(livro), HttpStatus.CREATED);
	}
	
	
	public ResponseEntity<Livro> editar(@RequestBody Livro livro){
		
		
		return new ResponseEntity<Livro>(service.updateLivro(livro), HttpStatus.OK);
	}
	

	@GetMapping
	public ResponseEntity<List<Livro>> getTodos(){
		
		
		return new ResponseEntity<List<Livro>>(service.buscaAll(), HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		
		service.deleteLivro(id);
		return new ResponseEntity<String>(HttpStatus.OK);
		
	} 
	
}
