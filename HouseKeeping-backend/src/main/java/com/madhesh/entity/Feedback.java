package com.madhesh.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Feedback_tbl")
public class Feedback {
	@Id
	@GeneratedValue
	@Column(name = "feedid")
	int feedReqid;
	@Column(name = "rating")
    int feedRating;
	@Column(name = "start_time")
	String feedTimein;
	@Column(name = "end_time")
	String feedTimeout;
	@Column(name = "suggest")
	String feedSuggestion;
	@Column(name = "complaint")
	String feedComplaints;
	@OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	CleanRequest creq;
	
	public int getFeedReqid() {
		return feedReqid;
	}
	public void setFeedReqid(int feedReqid) {
		this.feedReqid = feedReqid;
	}
	public int getFeedRating() {
		return feedRating;
	}
	public void setFeedRating(int feedRating) {
		this.feedRating = feedRating;
	}
	public String getFeedTimein() {
		return feedTimein;
	}
	public void setFeedTimein(String feedTimein) {
		this.feedTimein = feedTimein;
	}
	public String getFeedTimeout() {
		return feedTimeout;
	}
	public void setFeedTimeout(String feedTimeout) {
		this.feedTimeout = feedTimeout;
	}
	public String getFeedSuggestion() {
		return feedSuggestion;
	}
	public void setFeedSuggestion(String feedSuggestion) {
		this.feedSuggestion = feedSuggestion;
	}
	public String getFeedComplaints() {
		return feedComplaints;
	}
	public void setFeedComplaints(String feedComplaints) {
		this.feedComplaints = feedComplaints;
	}
	public CleanRequest getCreq() {
		return creq;
	}
	public void setCreq(CleanRequest creq) {
		this.creq = creq;
	}
	public Feedback(int feedReqid, int feedRating, String feedTimein, String feedTimeout, String feedSuggestion,
			String feedComplaints, CleanRequest creq) {
		super();
		this.feedReqid = feedReqid;
		this.feedRating = feedRating;
		this.feedTimein = feedTimein;
		this.feedTimeout = feedTimeout;
		this.feedSuggestion = feedSuggestion;
		this.feedComplaints = feedComplaints;
		this.creq = creq;
	}
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Feedback [feedReqid=" + feedReqid + ", feedRating=" + feedRating + ", feedTimein=" + feedTimein
				+ ", feedTimeout=" + feedTimeout + ", feedSuggestion=" + feedSuggestion + ", feedComplaints="
				+ feedComplaints + ", creq=" + creq + "]";
	}
}
