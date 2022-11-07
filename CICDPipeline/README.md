
# Kaiburr Assignment

## Task 1. Java REST API example
Implementd an application in java which provides a REST API with endpoints for searching,
creating and deleting “server” objects:

##### ● GET servers. Should return all the servers if no parameters are passed. When server id
is passed as a parameter - return a single server or 404 if there’s no such a server.

![Get All Server](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/backend/get-all-data.png)

![404 Error server](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/backend/404.png)

##### ● PUT a server. The server object is passed as a json-encoded message body. Here’s an
example:

![Update Server](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/backend/put-data.png)

● DELETE a server. The parameter is a server ID.

![Delete Server](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/backend/delete-data.png)

##### ● GET (find) servers by name. The parameter is a string. Must check if a server name
contains this string and return one or more servers found. Return 404 if nothing is found.
“Server” objects should be stored in MongoDB database.
Be sure that you can show how your application responds to requests using postman, curl or
any other HTTP client.

![Get server by name](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/backend/data-by-name.png)

##### ● Create new Server:

![Post Server](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/backend/post-data.png)


## Task 2. Swagger codegen.

![Swagger Home](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/swagger-home-page.png)

![Swagger ](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/list-all-api.png)

![Swagger ](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/get-all.png)

![Swagger ](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/get-by-id.png)

![Swagger ](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/get-by-name.png)

![Swagger](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/post-data.png)

![Swagger ](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/put-data.png)

![Swagger](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/swagger/delete-data.png)

## Task 3. Kubernetes

### Kubernet Project Stracture

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/kubernet/project-dir.png)

### Docker File
![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/kubernet/Dockerfile.png)

### Build Project on Docker

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/kubernet/kubernet/project-dir.png)


![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/kubernet/docker-build.png)

### Dockerhub

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/kubernet/docker-hub.png)

### Dockerhub

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/kubernet/doker-hub.png)

## Task 4. WEB UI Forms.

### Home Page

![Home](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/frontend/home.png)

### Create Server Page

![Create](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/frontend/create.png)

### Update Server Page

![Update](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/frontend/update.png)

### View Server Page

![View](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/frontend/view.png)


## Task 5. CI-CD Pipeline

#### Project Stracture


![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/cicdpiline-project-dir.png)

#### Docker File

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/Dokerfile.png)

#### Github Repo

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/repo.png)

#### Maven.yml file

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/maven.yml.png)

#### Building

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/build-cicdpipeline.png)

#### Build Success

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/success.png)

#### Docker Build
![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/docker-build.png)

#### Docker Success

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/docker-succes.png)

#### Deployed on Dockerhub

![](https://raw.githubusercontent.com/Harendra84/assignment-kaiburr/main/screenshots/cicdpipeline/docker-hubs.png)



## Authors

- [@Harendra84](https://github.com/Harendra84)


## Demo

### https://hub.docker.com/repositories

