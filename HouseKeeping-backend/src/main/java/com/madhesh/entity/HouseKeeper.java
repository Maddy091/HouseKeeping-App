package com.madhesh.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name = "housekeeper_tbl")
public class HouseKeeper {
	@Id
	@GeneratedValue
	@Column(name = "wid")
	int workerId;
	@Column(name = "wname", length = 40)
	String wordkername;
	int floor;
	@Column(length = 10)
	String hostel;
	@OneToMany(mappedBy = "houseKeeper")
	@JsonIgnore
	List<CleanRequest> clList = new ArrayList<CleanRequest>();
	
	
	public HouseKeeper() {
		super();
	}
	public HouseKeeper(int workerId, String wordkername, int floor, String hostel, List<CleanRequest> clList) {
		super();
		this.workerId = workerId;
		this.wordkername = wordkername;
		this.floor = floor;
		this.hostel = hostel;
		this.clList = clList;
	}
	public int getWorkerId() {
		return workerId;
	}
	public void setWorkerId(int workerId) {
		this.workerId = workerId;
	}
	public String getWordkername() {
		return wordkername;
	}
	public void setWordkername(String wordkername) {
		this.wordkername = wordkername;
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
	@Override
	public String toString() {
		return "HouseKeeper [workerId=" + workerId + ", wordkername=" + wordkername + ", floor=" + floor + ", hostel="
				+ hostel + ", clList=" + clList + "]";
	}
		
}
