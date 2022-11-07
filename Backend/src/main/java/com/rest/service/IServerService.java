package com.rest.service;

import java.util.List;

import com.rest.model.Server;

public interface IServerService {

	public Iterable<Server> findAllServers();
	public Server findServerById(String id);
	public String createServer(Server server);
	public String updateServer(String id, Server server);
	public String deleteServerById(String id);
	public List<Server>  findServerByName(String name);
}