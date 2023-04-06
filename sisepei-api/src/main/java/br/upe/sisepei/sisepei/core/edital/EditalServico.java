package br.upe.sisepei.sisepei.core.edital;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.sisepei.sisepei.base.exception.NaoEncontradoException;
import br.upe.sisepei.sisepei.base.exception.ValidacaoException;
import br.upe.sisepei.sisepei.core.edital.modelo.Edital;
import br.upe.sisepei.sisepei.core.edital.modelo.EditalDTO;
import br.upe.sisepei.sisepei.core.usuario.UsuarioRepositorio;
import br.upe.sisepei.sisepei.core.usuario.modelo.Usuario;

@Service
public class EditalServico {

	@Autowired
	private EditalRepository repositorio;
	
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	public List<Edital> listarEditais(){
		return repositorio.findAll();
	}
	
	public Edital buscarEdital(Long id) throws NaoEncontradoException {
		Optional<Edital> edital = repositorio.findById(id);
		if(edital.isEmpty()) {
			throw new NaoEncontradoException("Não existe nenhum edital correspondente a esse id");
		}else {			
			return edital.get();
		}
	}
	
	public Edital criarEdital(EditalDTO edital) throws ValidacaoException{
		if(repositorio.existsByTitulo(edital.getTitulo())){
			throw new ValidacaoException("Título já existente");
		}
		
		Optional<Usuario> coordenador = usuarioRepositorio.findById(edital.getCoordenador());
	
		
		Edital editalSalvar = new Edital();
		editalSalvar.setTitulo(edital.getTitulo());
		editalSalvar.setDescricao(edital.getDescricao());
		editalSalvar.setEdital(edital.getEdital());
		editalSalvar.setRequisitos(edital.getRequisitos());
		editalSalvar.setTipo(edital.getTipo());
		editalSalvar.setCoordenador(coordenador.get());
		editalSalvar.setPrazo(edital.getPrazo());
		
		return repositorio.save(editalSalvar);
	}
	
	public Edital updateEdital(Long id, EditalDTO edital) throws NaoEncontradoException, ValidacaoException{
		Optional<Edital> editalExists = repositorio.findById(id);
		if(editalExists.isEmpty()) {
			throw new NaoEncontradoException("Não existe nenhum edital correspondente a esse id");
		}
		

		if(!(editalExists.get().getTitulo().equals(edital.getTitulo())) && repositorio.existsByTitulo(edital.getTitulo())){
			throw new ValidacaoException("Titulo ja existente");
		}

		Edital editalExistente = repositorio.findById(id).get();
	
		editalExistente.setTitulo(edital.getTitulo());		
		editalExistente.setDescricao(edital.getDescricao());			
		editalExistente.setEdital(edital.getEdital());		
		editalExistente.setRequisitos(edital.getRequisitos());		
		editalExistente.setTipo(edital.getTipo());
		editalExistente.setPrazo(edital.getPrazo());
					
		return repositorio.save(editalExistente);		
	}
		
	public void removerEdital(Long id) throws NaoEncontradoException{
		Optional<Edital> edital = repositorio.findById(id);
		if(edital.isEmpty()) {
			throw new NaoEncontradoException("Não existe nenhum edital correspondente a esse id");
		}
		repositorio.deleteById(id);
	}
}
			
	
