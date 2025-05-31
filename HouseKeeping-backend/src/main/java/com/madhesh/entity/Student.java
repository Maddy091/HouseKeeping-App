package com.madhesh.entity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.bind.DefaultValue;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Student_tbl")
public class Student {
	@Id
	int rollId;
	@Column(name = "pwd", length = 60)
    String password;
    @Column(name = "roomnum" ,length = 10)
    String roomNumber;
    int floor;
    @Column(name="std_email")
    String email;
    @Column(length = 10)
	String hostel;
	@OneToMany(mappedBy = "std", fetch = FetchType.LAZY)
	@JsonIgnore
	List<CleanRequest> clList = new ArrayList<CleanRequest>();
	public Student() {
		super();
	}
	@Override
	public String toString() {
		return "Student [rollId=" + rollId + ", password=" + password + ", roomNumber=" + roomNumber + ", floor="
				+ floor + ", hostel=" + hostel + ", clList=" + clList + "]";
	}
	public Student(int rollId, String password, String roomNumber, int floor, String hostel,
			List<CleanRequest> clList) {
		super();
		this.rollId = rollId;
		this.password = password;
		this.roomNumber = roomNumber;
		this.floor = floor;
		this.hostel = hostel;
		this.clList = clList;
	}
	public int getRollId() {
		return rollId;
	}
	public void setRollId(int rollId) {
		this.rollId = rollId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public String getHostel() {
		return hostel;
	}
	public void setHostel(String hostel) {
		this.hostel = hostel;
	}

	public List<CleanRequest> getClList() {
		return clList;
	}
	public void setClList(List<CleanRequest> clList) {
		this.clList = clList;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
