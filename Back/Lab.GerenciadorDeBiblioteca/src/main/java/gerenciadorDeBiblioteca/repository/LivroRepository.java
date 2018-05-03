package gerenciadorDeBiblioteca.repository;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import gerenciadorDeBiblioteca.models.Livro;


@Repository
public interface LivroRepository extends CrudRepository<Livro, Long>{

	
	public Optional<Livro> findById(Long id);
	
	
	
}
