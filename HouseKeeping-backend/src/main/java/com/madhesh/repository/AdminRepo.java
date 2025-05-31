package com.madhesh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.madhesh.entity.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer>{

	@Query("select p from Admin p where p.username =:p1 and p.password =:p2")
	public List<Admin> check(@Param("p1") String username,@Param("p2") String password) ;

	
	
}
