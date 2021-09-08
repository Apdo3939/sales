package com.alex.sales.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alex.sales.dtos.SaleDTO;
import com.alex.sales.entities.Sale;
import com.alex.sales.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		Page<Sale> result = saleRepository.findAll(pageable);
		return result.map(e -> new SaleDTO(e));
	}

}
