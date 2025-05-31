package com.madhesh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madhesh.entity.TimeTable;
import com.madhesh.service.TimeTableService;

@CrossOrigin("*")
@RequestMapping("/timetable")
@RestController
public class TimeTablerestController {

	@Autowired
	TimeTableService timeServ;
	
	@PostMapping("/addTimeTable")
	public TimeTable addTimeTable(@RequestBody TimeTable t) {
		return timeServ.addTimeTable(t);
	}
	
}
