package com.madhesh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madhesh.entity.CleanRequest;
import com.madhesh.service.CRequestService;

@CrossOrigin("*")
@RestController
@RequestMapping("/CleanRequest")
public class CleanRequestRestController {

	@Autowired
	CRequestService creqSer;
	
	@PostMapping("/AddCleanRequest")
	public CleanRequest AddCleanRequest(@RequestBody CleanRequest hk) {
		return creqSer.AddCleanRequest(hk);
	}
	
	@GetMapping("/getCleanReqById/{p1}")
	public CleanRequest getCleanReqById(@PathVariable("p1") int id) {
		return creqSer.getCleanReqById(id);
	}
	@PutMapping("/updateCleanReq")
	public CleanRequest updateCleanReq(@RequestBody CleanRequest hk) {
		return creqSer.AddCleanRequest(hk);
	}
	
	@GetMapping("/cleanrequestlistwithoutfeedback")
	public List<CleanRequest> getAllCleanRequestWithoutFeedback(){
		return creqSer.getAllCleanRequestWithoutFeedback();
	}
	@GetMapping("/getAllCleanRequest")
	public List<CleanRequest> getAllCleanRequest() {
		return creqSer.getAllCleanRequest();
	}
	@GetMapping("/getAllCleanRequestForStd/{p1}")
	public List<CleanRequest> getAllCleanRequestForStd(@PathVariable("p1") int id ){
		return  creqSer.getAllCleanRequestForStd(id);
	}
	@GetMapping("/requestPerHostel/{p1}")
	public List<CleanRequest> requestPerHostel( @PathVariable("p1")String hostel){
		return creqSer.requestPerHostel(hostel);
	}
	
	
}
