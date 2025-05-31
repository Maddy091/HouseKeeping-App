package com.madhesh.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhesh.entity.Student;
import com.madhesh.iService.IStudentService;
import com.madhesh.repository.StudentRepo;

@Service
public class StudentService implements IStudentService {

	@Autowired
	StudentRepo sr;
	
	public List<Student> listAllStudents(){
		return sr.findAll();
	}
	public Student addStudent(Student s){
		return sr.save(s);
	}
	
	public Student checkStudent(int rollid, String password) {
		if(checkStdbyId(rollid) == false) return null;
		List<Student>allStd = sr.checkStudent(rollid, password);
		if(allStd.isEmpty())return null;
		return allStd.get(0);
	}
	
	public Student deleteByStudId(int id) {
		Optional<Student> os=sr.findById(id);
		Student s=os.get();
		sr.delete(s);
		return s;
	}
	
	public List<Student> studentsfromeachfloor( int floor){
		return sr.studentsfromeachfloor(floor);
	}
	
	
	public Student getByStudId(int id) {
		return sr.findById(id).get();
	}
	
	public List<Student> studentsfromeachhHostel(String hostel,int floor ){
		return sr.studentsfromeachhHostel(hostel, floor);
	}
	
	public boolean checkStdbyId(int id) {
		List<Student> ans = sr.findAll();
		for(Student i : ans) {
			if(i.getRollId()==id)
				return true;
		}
		return false;
	}
	
	public boolean checkStdbyFloor(int floor) {
		List<Student> ans = sr.findAll();
		for(Student i : ans) {
			if(i.getFloor()==floor)
				return true;
		}
		return false;
	}
}
