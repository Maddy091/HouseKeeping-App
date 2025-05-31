package com.madhesh.iService;

import java.util.List;

import com.madhesh.entity.Student;

public interface IStudentService {
	
	public List<Student> listAllStudents();
	public Student addStudent(Student s);
	public Student checkStudent(int rollid, String password);
	public Student deleteByStudId(int id);
	public List<Student> studentsfromeachfloor( int floor);
	public Student getByStudId(int id) ;
	public List<Student> studentsfromeachhHostel(String hostel,int floor );
	public boolean checkStdbyId(int id) ;
	public boolean checkStdbyFloor(int floor) ;
	

}
