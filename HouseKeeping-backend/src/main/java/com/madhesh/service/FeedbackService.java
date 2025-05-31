package com.madhesh.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhesh.entity.Feedback;
import com.madhesh.iService.IFeedbackService;
import com.madhesh.repository.FeedbackRepo;

@Service
public class FeedbackService implements IFeedbackService{

	@Autowired
	FeedbackRepo feedrep;
	
	public Feedback addFeed(Feedback feed) {
		return feedrep.save(feed);
	}
	
	public List<Feedback> viewAllFeedbacks (){
		return feedrep.findAll();
	}
	
	
	
	public List<Feedback> viewAllFeedbacksBySId(int id){
		 List<Feedback>fl= feedrep.findAll();
		 List<Feedback>ans=new ArrayList<>();
		 for(Feedback f : fl) {
			 if(f.getCreq().getStd().getRollId()==id)
				 ans.add(f);
		 }
		 return ans;
	}
	public List<Feedback> feedbackByHostel(String hostel) {
		return feedrep.feedbackByHostel(hostel);
	}
	
	public boolean checkFeed(int id) {
		List<Feedback>fl= feedrep.findAll();
		for(Feedback i : fl) {
			if(i.getFeedReqid()==id)
				return true;
		}
		return false;
	}
	
}
