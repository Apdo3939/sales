package com.alex.sales.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alex.sales.dtos.SaleDTO;
import com.alex.sales.services.SaleService;


@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService saleService;
	
	@GetMapping
	public ResponseEntity<List<SaleDTO>> findAll(){
		List<SaleDTO> list = saleService.findAll();
		return ResponseEntity.ok(list);
	}
}
