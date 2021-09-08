package com.alex.sales.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alex.sales.dtos.SaleDTO;
import com.alex.sales.dtos.SaleSuccessDTO;
import com.alex.sales.dtos.SaleSumDTO;
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
		Page<SaleDTO> page = saleService.findAll(pageable);
		return ResponseEntity.ok(page);
	}
	
	@GetMapping(value = "/sum")
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
		sellerService.findAll();
		List<SaleSumDTO> list = saleService.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/success")
	public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller(){
		sellerService.findAll();
		List<SaleSuccessDTO> list = saleService.successGroupedBySeller();
		return ResponseEntity.ok(list);
	}
}
