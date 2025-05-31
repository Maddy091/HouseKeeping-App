package com.madhesh.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "CleanRequest_tbl")
public class CleanRequest {
	@Id
	@GeneratedValue
	@Column(name = "reqid")
	int requestId;
	LocalDateTime reqtime;
	@OneToOne(mappedBy = "creq", fetch = FetchType.EAGER)
	@JsonIgnore
	Feedback feedback;
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	Student std;
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	HouseKeeper houseKeeper;
    @Column(length = 30)
	String reqStatus;
    
    
    public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	public String getReqStatus() {
		return reqStatus;
	}

	public void setReqStatus(String reqStatus) {
		this.reqStatus = reqStatus;
	}

	public LocalDateTime getReqtime() {
		return reqtime;
	}

	public void setReqtime(LocalDateTime reqtime) {
		this.reqtime = reqtime;
	}

	public Feedback getFeedback() {
		return feedback;
	}

	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}

	public HouseKeeper getHouseKeeper() {
		return houseKeeper;
	}

	public void setHouseKeeper(HouseKeeper houseKeeper) {
		this.houseKeeper = houseKeeper;
	}

	public Student getStd() {
		return std;
	}

	public void setStd(Student std) {
		this.std = std;
	}



	


	@Override
	public String toString() {
		return "CleanRequest [requestId=" + requestId + ", reqtime=" + reqtime + ", feedback=" + feedback + ", std="
				+ std + ", houseKeeper=" + houseKeeper + ", reqStatus=" + reqStatus + "]";
	}

	public CleanRequest(int requestId, LocalDateTime reqtime, Feedback feedback, Student std, HouseKeeper houseKeeper,
			String reqStatus) {
		super();
		this.requestId = requestId;
		this.reqtime = reqtime;
		this.feedback = feedback;
		this.std = std;
		this.houseKeeper = houseKeeper;
		this.reqStatus = reqStatus;
	}

	public CleanRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

}
