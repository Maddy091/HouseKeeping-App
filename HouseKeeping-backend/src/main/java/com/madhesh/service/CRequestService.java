package com.madhesh.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhesh.entity.CleanRequest;
import com.madhesh.iService.ICRequestService;
import com.madhesh.repository.CRequestRepo;

@Service
public class CRequestService implements ICRequestService{

	@Autowired
	CRequestRepo cr;
	
	public CleanRequest AddCleanRequest(CleanRequest hk) {
		return  cr.save(hk);
	}
	public CleanRequest getCleanReqById(int id) {
		return cr.findById(id).get();
	}
	
	public List<CleanRequest> getAllCleanRequest() {
		return cr.findAll();
	}
	
	public List<CleanRequest> getAllCleanRequestWithoutFeedback(){
		List<CleanRequest> cList=cr.findAll();
		List<CleanRequest> cList1= new ArrayList<>();
		for(CleanRequest x : cList) {
			if(x.getFeedback()==null)
				cList1.add(x);
		}
		return cList1;
	}
	
	public List<CleanRequest> getAllCleanRequestForStd(int id) {
		List<CleanRequest>cl= cr.findAll();
		List<CleanRequest>ans= new ArrayList<>();
		for(CleanRequest x :cl) {
			if(x.getStd().getRollId()==id)
				ans.add(x);
		}
		return ans;
	}
	
	public List<CleanRequest> requestPerHostel( String hostel){
		return cr.requestPerHostel(hostel);
	}
}
