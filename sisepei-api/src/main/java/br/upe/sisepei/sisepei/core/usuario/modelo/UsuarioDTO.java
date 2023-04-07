package br.upe.sisepei.sisepei.core.usuario.modelo;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UsuarioDTO {

	@NotBlank
	private String nome;

	@Email
	private String email;
	
	@NotBlank
	@Size(min = 6)
	private String senha;

}
