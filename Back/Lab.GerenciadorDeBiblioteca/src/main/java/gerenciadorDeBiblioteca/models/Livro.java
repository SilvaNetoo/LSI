package gerenciadorDeBiblioteca.models;

public class Livro {
	
	
	private Long id;
	private String nome;
	private String autor;
	private String isbn;
	
	public Livro() {
		// TODO Auto-generated constructor stub
	}
	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	
	
	

}
