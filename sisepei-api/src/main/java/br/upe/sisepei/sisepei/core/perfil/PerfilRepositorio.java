package br.upe.sisepei.sisepei.core.perfil;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.upe.sisepei.sisepei.core.perfil.modelo.Perfil;
import br.upe.sisepei.sisepei.core.perfil.modelo.PerfilEnum;

public interface PerfilRepositorio extends JpaRepository<Perfil, Long> {
	
	Optional<Perfil> findByNome(PerfilEnum nome);

}
