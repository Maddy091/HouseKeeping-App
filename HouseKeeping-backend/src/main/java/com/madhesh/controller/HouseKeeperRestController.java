package com.madhesh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madhesh.entity.HouseKeeper;
import com.madhesh.service.HouseKeeperService;

@CrossOrigin("*")
@RestController
@RequestMapping("/housekeeper")
public class HouseKeeperRestController {

	@Autowired
	HouseKeeperService houserv;
	@PostMapping("/addHouseKeepers")
	public HouseKeeper addHouseKeepers(@RequestBody HouseKeeper hk) {
		return houserv.addHouseKeepers(hk);
	}
	@PutMapping("/updateHouseKeepers")
	public HouseKeeper updateHouseKeepers( @RequestBody HouseKeeper hk) {
		return houserv.updateHouseKeepers(hk);
	}
	@GetMapping("/getHouseKeeperById/{p1}")
	public HouseKeeper getHouseKeeperById(@PathVariable("p1") int id) {
		return houserv.findHousKbyId(id);
	}
	@GetMapping("/getAllHouseKeeper")
	public List<HouseKeeper> getAllHouseKeeper() {
		return houserv.getAllHouseKeepers();
	}
	@DeleteMapping("/delHousKbyId/{p1}")
	public HouseKeeper delHousKbyId(@PathVariable("p1") int id) {
		return houserv.delHousKbyId(id);
	}
	@GetMapping("/housekeeperAtParticularhostel/{p1}")
	public List<HouseKeeper> housekeeperAtParticularhostel(@PathVariable("p1")String hostel){
		return houserv.housekeeperAtParticularhostel(hostel);
	}
}
