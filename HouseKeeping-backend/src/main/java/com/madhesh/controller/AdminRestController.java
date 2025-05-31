package com.madhesh.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madhesh.entity.Admin;
import com.madhesh.entity.HouseKeeper;
import com.madhesh.service.AdminService;


@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminRestController {

	@Autowired
	AdminService admserv;
	
	@GetMapping("/checkAdmin/{p1}/{p2}")
	public Admin  check(@PathVariable("p1") String username,@PathVariable("p2") String passw) {
//		System.out.println(admserv.check(username, passw));
		return admserv.check(username, passw);
	}
	@PostMapping("/addAdmin")
	public Admin  addAdmin(@RequestBody Admin ad) {
		return admserv.addAdmin(ad);
	}
	@GetMapping("/checkHouseKeeperAvailability/{p1}/{p2}/{p3}")
	public List<HouseKeeper> checkWorkerAvailability(@PathVariable("p1")  int floor,@PathVariable("p2")  LocalDateTime dte,@PathVariable("p3")  String hostel){
		return admserv.checkWorkerAvailability(floor, dte, hostel); 
	}
	@GetMapping("/getAllAdmins")
	public List<Admin> getAllAdmins() {
		return admserv.getAllAdmins();
	}
	@DeleteMapping("/deleteAdminById/{p1}")
	public Admin deleteAdminById(@PathVariable("p1") int id) {
		return admserv.deleteAdminById(id);
	}
}
