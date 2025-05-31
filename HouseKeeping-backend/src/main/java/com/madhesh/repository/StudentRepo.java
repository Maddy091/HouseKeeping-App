package com.madhesh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.madhesh.entity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer>{

	@Query("select p from Student p where p.rollId =:p1 and p.password =:p2")
	public List<Student> checkStudent(@Param("p1") int rollid,@Param("p2") String password) ;
	
	@Query("select f from Student f where f.floor=:p2")
	public List<Student> studentsfromeachfloor(@Param("p2") int floor);
	@Query("select f from Student f where f.hostel=:p2 and  f.floor=:p1")
	public List<Student> studentsfromeachhHostel(@Param("p2") String hostel , @Param("p1") int floor);
}
