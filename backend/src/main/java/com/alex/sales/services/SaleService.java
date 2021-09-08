package com.alex.sales.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alex.sales.dtos.SaleDTO;
import com.alex.sales.entities.Sale;
import com.alex.sales.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	public List<SaleDTO> findAll(){
		List<Sale> result = saleRepository.findAll();
		return result.stream().map(e -> new SaleDTO(e)).collect(Collectors.toList());
	}

}
