package br.upe.sisepei.sisepei.api.representation;

import java.io.File;
import java.util.Date;

import br.upe.sisepei.sisepei.core.edital.modelo.TipoEnum;
import lombok.Data;

@Data
public class EditalRepresentation {
	
	private Long id;
	
	private String titulo;
	
	private String descricao;
	
	private String requisitos;
	
	private Date prazo;
	
	private File edital;
	
	private TipoEnum tipo;
	
	private UsuarioRepresentation coordenador;

}
