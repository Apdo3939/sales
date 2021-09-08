package com.alex.sales.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alex.sales.dtos.SellerDTO;
import com.alex.sales.entities.Seller;
import com.alex.sales.repositories.SellerRepository;



@Service
public class SellerService {
	
	@Autowired
	private SellerRepository sellerRepository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = sellerRepository.findAll();
		return result.stream().map(e -> new SellerDTO(e)).collect(Collectors.toList());
	}

}
