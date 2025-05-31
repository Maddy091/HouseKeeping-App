package com.madhesh.iService;

import java.util.List;

import com.madhesh.entity.Feedback;

public interface IFeedbackService {

	public Feedback addFeed(Feedback feed);
	public List<Feedback> viewAllFeedbacks ();
	public List<Feedback> viewAllFeedbacksBySId(int id);
	public List<Feedback> feedbackByHostel(String hostel);
}
