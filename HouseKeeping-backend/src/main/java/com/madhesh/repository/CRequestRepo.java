package com.madhesh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.madhesh.entity.CleanRequest;

@Repository
public interface CRequestRepo extends JpaRepository<CleanRequest, Integer>{

	@Query("select p from CleanRequest p where p.std.hostel =:p1")
	public List<CleanRequest> requestPerHostel(@Param("p1") String hostel);

	
	
}
