package com.madhesh.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.madhesh.entity.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer>{
	
	@Query("select p from Feedback p where p.creq.std.hostel =:p1")
	public List<Feedback> feedbackByHostel(@Param("p1") String hostel) ;

}
