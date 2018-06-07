package gerenciadorDeBiblioteca.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Aluno {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String nome;
	private String email;
	private String senha;
	//@OneToMany(mappedBy="aluno")
	//private List<Livro> meusLivros;
	
	
	public Aluno() {
		
	}
	
	public Aluno(String nome, String email, String senha){
		
		this.nome=nome;
		this.email=email;
		this.senha=senha;
		//this.meusLivros = new ArrayList<Livro>();
		
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/*public List<Livro> getMeusLivros() {
		return meusLivros;
	}

	public void setMeusLivros(List<Livro> meusLivros) {
		this.meusLivros = meusLivros;
	}
	
	public void locarLivro(Livro livro) {
		
		this.meusLivros.add(livro);
	}
	*/
	
	
}
