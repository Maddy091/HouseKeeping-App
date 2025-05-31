package com.madhesh.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.madhesh.entity.TimeTable;

@Repository
public interface TimeTableRepo extends JpaRepository<TimeTable, Integer>{

	
	@Query("select p from TimeTable p where p.floor =:p1 and p.hostel=:p2 and p.starttime<=:p3 and p.endtime>:p3")
	public List<TimeTable> listOfTTatTime(@Param("p1") int floor, @Param("p2") String hostel, @Param("p3") LocalDateTime dte);
}
