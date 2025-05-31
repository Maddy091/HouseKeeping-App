package com.madhesh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.madhesh.entity.HouseKeeper;

@Repository
public interface HouseKeeperRepo extends JpaRepository<HouseKeeper, Integer> {

	@Query("select p from HouseKeeper p where p.floor =:p1 and p.hostel=:p2")
	public List<HouseKeeper> housekeeperAtParticularFloor(@Param("p1") int floor, @Param("p2") String hostel );
	
	@Query("select p from HouseKeeper p where p.hostel=:p2")
	public List<HouseKeeper> housekeeperAtParticularhostel(@Param("p2") String hostel );
	
}
