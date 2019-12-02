package br.com.securityplus.securityplus.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.securityplus.securityplus.model.Categoria;

@Repository
public interface CategoriaDao extends CrudRepository<Categoria, Integer> {
	
	List<Categoria> findAllByOrderByNomeAsc();

}
