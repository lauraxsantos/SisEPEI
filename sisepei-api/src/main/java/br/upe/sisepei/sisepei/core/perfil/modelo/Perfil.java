package br.upe.sisepei.sisepei.core.perfil.modelo;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;

import br.upe.sisepei.sisepei.core.usuario.modelo.Usuario;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Data
@Entity
public class Perfil implements GrantedAuthority {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@Column(nullable = false, unique = true)
	@Enumerated(EnumType.STRING)
	private PerfilEnum nome;
	
	@ManyToMany(mappedBy="perfis")
	private List<Usuario> usuarios;
	
	@Override
	public String getAuthority() {
		return nome.toString();
	}
	
}
