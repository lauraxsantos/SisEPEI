package br.upe.sisepei.sisepei.core.edital.modelo;

import java.io.File;
import java.util.Date;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class EditalDTO {
	
	@NotBlank
	private String titulo;

	@NotBlank
	private String descricao;
	
	@NotBlank
	private String requisitos;
	
//	@NotNull
	private File edital;
	
	@NotNull
	private Date prazo;
	
	@NotNull
	private TipoEnum tipo;
	
	private Long coordenador;

}
