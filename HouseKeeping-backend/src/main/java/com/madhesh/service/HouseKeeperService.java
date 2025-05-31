package com.madhesh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhesh.entity.HouseKeeper;
import com.madhesh.iService.IHouseKeeperService;
import com.madhesh.repository.HouseKeeperRepo;

@Service
public class HouseKeeperService implements IHouseKeeperService {
	@Autowired
	HouseKeeperRepo hr;
	
	public List<HouseKeeper> getAllHouseKeepers() {
		return  hr.findAll();
	}
	public HouseKeeper addHouseKeepers(HouseKeeper hk) {
		return  hr.save(hk);
	}
	public HouseKeeper updateHouseKeepers(HouseKeeper hk) {
		return  hr.save(hk);
	}
	public HouseKeeper findHousKbyId(int id) {
		return hr.findById(id).get();
	}
	public HouseKeeper delHousKbyId(int id) {
		HouseKeeper hk = hr.findById(id).get();
		hr.deleteById(id);
		return hk;
	}
	
	public List<HouseKeeper> housekeeperAtParticularhostel(String hostel){
		return hr.housekeeperAtParticularhostel(hostel);
	}
}
