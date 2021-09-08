package com.alex.sales.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alex.sales.dtos.SaleDTO;
import com.alex.sales.services.SaleService;
import com.alex.sales.services.SellerService;


@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService saleService;
	
	@Autowired
	private SellerService sellerService;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		sellerService.findAll();
		Page<SaleDTO> list = saleService.findAll(pageable);
		return ResponseEntity.ok(list);
	}
}
