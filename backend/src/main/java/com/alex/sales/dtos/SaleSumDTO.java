package com.alex.sales.dtos;

import java.io.Serializable;

import com.alex.sales.entities.Seller;

public class SaleSumDTO implements Serializable {
	
	
	private static final long serialVersionUID = 1L;
	private String seller;
	private Double sum;
	
	public SaleSumDTO() {
		
	}
	
	
	public SaleSumDTO(Seller seller, Double sum) {
		this.setSeller(seller.getName());
		this.sum = sum;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}

	public String getSeller() {
		return seller;
	}

	public void setSeller(String seller) {
		this.seller = seller;
	}

}
