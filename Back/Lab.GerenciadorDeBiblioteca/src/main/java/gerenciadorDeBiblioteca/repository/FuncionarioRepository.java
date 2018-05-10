package gerenciadorDeBiblioteca.repository;

import org.springframework.data.repository.CrudRepository;

import gerenciadorDeBiblioteca.models.Funcionario;

public interface FuncionarioRepository extends CrudRepository<Funcionario, Long> {

}
