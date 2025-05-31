package com.madhesh.iService;

import java.util.List;

import com.madhesh.entity.CleanRequest;

public interface ICRequestService {
	
	public CleanRequest AddCleanRequest(CleanRequest hk);
	public CleanRequest getCleanReqById(int id);
	public List<CleanRequest> getAllCleanRequest() ;
	public List<CleanRequest> getAllCleanRequestWithoutFeedback();
	public List<CleanRequest> getAllCleanRequestForStd(int id);
	public List<CleanRequest> requestPerHostel(String hostel);

}
