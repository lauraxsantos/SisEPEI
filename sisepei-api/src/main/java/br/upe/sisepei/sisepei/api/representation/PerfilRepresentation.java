package br.upe.sisepei.sisepei.api.representation;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.upe.sisepei.sisepei.core.perfil.modelo.PerfilEnum;
import lombok.Data;

@Data
public class PerfilRepresentation implements Serializable {
	
	private static final long serialVersionUID = 1L;

	
	private PerfilEnum nome;
	
	@JsonIgnore
	List<UsuarioRepresentation> usuarios;
	
}

