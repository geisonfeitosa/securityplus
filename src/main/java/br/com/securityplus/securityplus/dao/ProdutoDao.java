package br.com.securityplus.securityplus.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.securityplus.securityplus.model.Produto;

@Repository
public interface ProdutoDao extends CrudRepository<Produto, Integer> {
	
	List<Produto> findAllByOrderByNomeAsc();

}
