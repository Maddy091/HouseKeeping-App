package com.madhesh.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin_tbl")
public class Admin {
	@Id
	@GeneratedValue
	@Column(name = "aid")
	int admin_id;
	@Column(name = "uname", length = 40)
	String username;
	@Column(name = "pwd", length = 60)
	String password;
	@Column(length = 10)
	String hostel;
	public Admin() {
		super();
	}
	public Admin(int admin_id, String username, String pwd, String hostel) {
		super();
		this.admin_id = admin_id;
		this.username = username;
		this.password = pwd;
		this.hostel = hostel;
	}
	@Override
	public String toString() {
		return "Admin [admin_id=" + admin_id + ", username=" + username + ", pwd=" + password + ", hostel=" + hostel + "]";
	}
	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getHostel() {
		return hostel;
	}
	public void setHostel(String hostel) {
		this.hostel = hostel;
	}
	
}
