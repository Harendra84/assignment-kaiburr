package com.rest.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rest.model.Server;

@Repository
public interface IServerRepository extends MongoRepository<Server, String>{
	
	public List<Server> getServerByName(String name);
}
