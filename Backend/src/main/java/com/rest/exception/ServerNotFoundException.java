package com.rest.exception;
public class ServerNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public ServerNotFoundException() {
		super();
	}

	public ServerNotFoundException(String message) {
		super(message);
	}
}
