package com.madhesh.iService;

import java.time.LocalDateTime;
import java.util.List;

import com.madhesh.entity.Admin;
import com.madhesh.entity.CleanRequest;
import com.madhesh.entity.HouseKeeper;

public interface IAdminService {

	public List<Admin> getAllAdmins() ;
	public Admin addAdmin(Admin ad);
	public Admin check(String username, String passw);
	public List<CleanRequest>  getRequestList(String hostel);
	public List<HouseKeeper> checkWorkerAvailability(int floor, LocalDateTime dte, String hostel);
	public Admin deleteAdminById(int id) ;
	public Admin getAdminById(int id) ;
	
	
}
