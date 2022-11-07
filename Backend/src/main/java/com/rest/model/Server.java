package com.rest.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "server")
public class Server {
	
	@Id
	@NonNull
	private String id;
	
	@NonNull
	private String name;
	
	@NonNull
	private String language;
	
	@NonNull
	private String framework;
}
