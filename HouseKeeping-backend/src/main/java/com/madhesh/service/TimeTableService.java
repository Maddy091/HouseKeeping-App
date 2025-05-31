package com.madhesh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhesh.entity.TimeTable;
import com.madhesh.iService.ITimetableService;
import com.madhesh.repository.TimeTableRepo;

@Service
public class TimeTableService implements ITimetableService {

	@Autowired
	TimeTableRepo timRep;
	
	
	public TimeTable addTimeTable(TimeTable t) {
		return timRep.save(t);
	}
	
}
