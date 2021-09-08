package com.alex.sales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alex.sales.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
