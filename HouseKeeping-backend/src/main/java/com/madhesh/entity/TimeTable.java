package com.madhesh.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "timetable_tbl")
public class TimeTable {

	@Id
	@GeneratedValue
	@Column(name = "tid")
	int timetableid;
	LocalDateTime starttime;
	LocalDateTime endtime;
	int floor;
	@Column(name = "wid")
	int workerid;
	@Column(length = 10)
	String hostel;
	public TimeTable(int timetableid, LocalDateTime starttime, LocalDateTime endtime, int floor, int workerid,
			String hostel) {
		super();
		this.timetableid = timetableid;
		this.starttime = starttime;
		this.endtime = endtime;
		this.floor = floor;
		this.workerid = workerid;
		this.hostel = hostel;
	}
	public TimeTable() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "TimeTable [timetableid=" + timetableid + ", starttime=" + starttime + ", endtime=" + endtime
				+ ", floor=" + floor + ", workerid=" + workerid + ", hostel=" + hostel + "]";
	}
	public int getTimetableid() {
		return timetableid;
	}
	public void setTimetableid(int timetableid) {
		this.timetableid = timetableid;
	}
	public LocalDateTime getStarttime() {
		return starttime;
	}
	public void setStarttime(LocalDateTime starttime) {
		this.starttime = starttime;
	}
	public LocalDateTime getEndtime() {
		return endtime;
	}
	public void setEndtime(LocalDateTime endtime) {
		this.endtime = endtime;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public int getWorkerid() {
		return workerid;
	}
	public void setWorkerid(int workerid) {
		this.workerid = workerid;
	}
	public String getHostel() {
		return hostel;
	}
	public void setHostel(String hostel) {
		this.hostel = hostel;
	}
		
	
}
