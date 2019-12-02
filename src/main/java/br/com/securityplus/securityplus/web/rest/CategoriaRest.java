package br.com.securityplus.securityplus.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.securityplus.securityplus.dao.CategoriaDao;
import br.com.securityplus.securityplus.model.Categoria;

@RestController
@RequestMapping("/rest/categoria")
public class CategoriaRest {
	
	@Autowired
	private CategoriaDao categoriaDao;
	
	@GetMapping
	public List<Categoria> list() {
		return categoriaDao.findAllByOrderByNomeAsc();
	}

}
