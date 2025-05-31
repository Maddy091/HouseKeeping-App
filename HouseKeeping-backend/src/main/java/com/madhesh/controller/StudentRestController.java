package com.madhesh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madhesh.entity.Student;
import com.madhesh.service.StudentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/student")
public class StudentRestController {

	@Autowired
	StudentService stdServ;
	
	@GetMapping("/checkStudent/{p1}/{p2}")
	public ResponseEntity<?> checkStudent( @PathVariable("p1") int rollid,@PathVariable("p2") String password) {
		if(stdServ.checkStdbyId(rollid) ){
			Student std = stdServ.checkStudent(rollid, password);
			return new ResponseEntity<Student>(std, HttpStatus.OK);
		}
		return null;
	}
	@PostMapping("/addStudent")
	public Student addStudent(@RequestBody Student s) {
		return stdServ.addStudent(s);
	}
	@GetMapping("/listAllStudents")
	public List<Student> listAllStudents(){
		return stdServ.listAllStudents();
	}
	@PutMapping("/updateStudent")
	public ResponseEntity<?> updateStudent(@RequestBody Student s) {
		if(stdServ.checkStdbyId(s.getRollId())) {
			Student std = stdServ.addStudent(s);	
			return new ResponseEntity<Student>(std, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Sorry", HttpStatus.NOT_FOUND);
	}
	@DeleteMapping("/deleteStudent/{p1}")
	public ResponseEntity<?> deleteByStudId(@PathVariable("p1") int id) {
		if(stdServ.checkStdbyId(id)) {
			Student std= stdServ.deleteByStudId(id);
			System.out.println(std);
			return new ResponseEntity<Student>(std, HttpStatus.OK);
		}
		return null;
	}
	
	@GetMapping("/studentsbyfloor/{p2}")
	public ResponseEntity<?> studentsfromeachfloor(@PathVariable("p2")int floor){
		if(stdServ.checkStdbyFloor(floor)) {
			List<Student>  std= stdServ.studentsfromeachfloor(floor);
			System.out.println(std);
			return new ResponseEntity<List<Student>>(std, HttpStatus.OK);
		}
		return null;
	}
	@GetMapping("/getByStudId/{p1}")
	public ResponseEntity<?> getByStudId(@PathVariable("p1")  int id) {
		if(stdServ.checkStdbyId(id)) {
			Student st = stdServ.getByStudId(id);
			return new ResponseEntity<Student>(st, HttpStatus.OK);
		}
		return null;
	}
	
	@GetMapping("/studentsfromeachhHostel/{p1}/{p2}")
	public List<Student> studentsfromeachhHostel(@PathVariable("p1")String hostel,@PathVariable("p2")int floor ){
		return stdServ.studentsfromeachhHostel(hostel, floor);
	}
}
