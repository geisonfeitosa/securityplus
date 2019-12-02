package br.com.securityplus.securityplus.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.securityplus.securityplus.dao.ProdutoDao;
import br.com.securityplus.securityplus.model.Produto;

@RestController
@RequestMapping("/rest/produto")
public class ProdutoRest {
	
	@Autowired
	private ProdutoDao produtoDao;
	
	@GetMapping
	public List<Produto> list() {
		return produtoDao.findAllByOrderByNomeAsc();
	}
	
	@GetMapping("/{id}")
	public Produto get(@PathVariable Integer id){
		return produtoDao.findById(id).get();
	}

}
