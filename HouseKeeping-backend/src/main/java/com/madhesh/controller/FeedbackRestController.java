package com.madhesh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madhesh.entity.Feedback;
import com.madhesh.service.CRequestService;
import com.madhesh.service.FeedbackService;

@CrossOrigin("*")
@RestController
@RequestMapping("/feedback")
public class FeedbackRestController {

	@Autowired
	FeedbackService feedser;
	@Autowired
	CRequestService cserv;
	
	@PostMapping("/addFeed")
	public Feedback addFeed(@RequestBody Feedback feed) {
		cserv.AddCleanRequest(feed.getCreq());
		return feedser.addFeed(feed);
	}
	
	@PutMapping("/updateFeed")
	public ResponseEntity<?> updateFeed(@RequestBody Feedback feed) {
		
		if(feedser.checkFeed(feed.getFeedReqid())) {
			Feedback fb= feedser.addFeed(feed);
			return new ResponseEntity<Feedback>(fb, HttpStatus.OK);
		}
		return null;
	}
	@GetMapping("/viewallfeedbacks")
	public List<Feedback> viewAllFeedbacks(){
		return feedser.viewAllFeedbacks();
	}
	
	@GetMapping("/viewAllFeedbacksBySId/{p1}")
	public List<Feedback> viewAllFeedbacksBySId( @PathVariable("p1") int id){
		return feedser.viewAllFeedbacksBySId(id);
	}
//	public ResponseEntity<?> viewAllFeedbacksBySId( @PathVariable("p1") int id){
//		if(feedser.checkFeed(id)) {
//			List<Feedback>fb = feedser.viewAllFeedbacksBySId(id);
//			return new ResponseEntity<List<Feedback>>(fb, HttpStatus.OK);
//		}
//		return null;
//	}
	
	@GetMapping("/feedbackByHostel/{p1}")
	public List<Feedback> feedbackByHostel(@PathVariable("p1")String hostel){
		return feedser.feedbackByHostel(hostel);
	}
}
