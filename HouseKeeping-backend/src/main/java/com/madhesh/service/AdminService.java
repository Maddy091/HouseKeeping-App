package com.madhesh.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhesh.entity.Admin;
import com.madhesh.entity.CleanRequest;
import com.madhesh.entity.HouseKeeper;
import com.madhesh.entity.TimeTable;
import com.madhesh.iService.IAdminService;
import com.madhesh.repository.AdminRepo;
import com.madhesh.repository.CRequestRepo;
import com.madhesh.repository.HouseKeeperRepo;
import com.madhesh.repository.TimeTableRepo;

@Service
public class AdminService implements IAdminService{

	@Autowired
	AdminRepo admrepo;
	@Autowired
	CRequestRepo cReqRep;
	@Autowired
	TimeTableRepo timeRep;
	@Autowired
	HouseKeeperRepo hr;
	public List<Admin> getAllAdmins() {
		return admrepo.findAll();
	}
	public Admin  addAdmin( Admin ad) {
		return admrepo.save(ad);
	}
	public Admin  check( String username, String passw) {
		List<Admin>adList= admrepo.check(username, passw);
		if(adList.isEmpty())return null;
		return adList.get(0);
	}
	
	public List<CleanRequest>  getRequestList(String hostel) {
		return  cReqRep.requestPerHostel(hostel);
	}
	
	public List<HouseKeeper> checkWorkerAvailability(int floor, LocalDateTime dte, String hostel) {
		List<HouseKeeper> allHouseKeeperFloor= hr.housekeeperAtParticularFloor(floor, hostel);
		List<TimeTable> listOfTTatTime = timeRep.listOfTTatTime(floor, hostel, dte);
		List<HouseKeeper>ans= new ArrayList<>(); // available workers
		for(HouseKeeper h : allHouseKeeperFloor) {
			boolean found= false;
			for(TimeTable t : listOfTTatTime) {
				if(h.getWorkerId()==t.getWorkerid()) {
					found = true;
					break;
				}
			}
			if(!found) {
				ans.add(h);
			}
		}
		return ans;
	}
	
	public Admin deleteAdminById(int id) {
		List<Admin>allAdmins= admrepo.findAll();
		for(Admin i : allAdmins)
			if(i.getAdmin_id()==id)
				admrepo.deleteById(id);
		return null;
	}
	
	public Admin getAdminById(int id) {
		List<Admin>allAdmins= admrepo.findAll();
		for(Admin i : allAdmins)
			if(i.getAdmin_id()==id)
				return i;
		return null;
	}
}
