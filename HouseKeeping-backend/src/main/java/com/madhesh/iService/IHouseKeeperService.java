package com.madhesh.iService;

import java.util.List;

import com.madhesh.entity.HouseKeeper;

public interface IHouseKeeperService {
	
	public List<HouseKeeper> getAllHouseKeepers();
	public HouseKeeper addHouseKeepers(HouseKeeper hk);
	public HouseKeeper updateHouseKeepers(HouseKeeper hk) ;
	public HouseKeeper findHousKbyId(int id);
	public HouseKeeper delHousKbyId(int id);
	public List<HouseKeeper> housekeeperAtParticularhostel(String hostel);

}
