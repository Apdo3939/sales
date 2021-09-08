package com.alex.sales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alex.sales.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
