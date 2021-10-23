Role Base Authentication System
===================================

This is a demonstration of how login and role based authentication can be done using JWT in NodeJs using minimal dependencies.

## Humble begining
This project was initilized with Yarn

`yarn init`

## Development Dependencies
Dev Dependencies were added with yarn

`yarn add -D pkgName`

## Dependencies

Dependencies were added with yarn

`yarn add pkgName`

### List of dependencies

+ express
+ jsonwebtoken
+ bcryptjs
+ dotenv

## Up and running
+ `yarn` or `npm i` to download the node_modules
+ `yarn run startDev` or `yarn run start` to start the server

## API cURLs

### Register API
```
curl --location --request POST 'http://127.0.0.1:8080/api/register' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=arnab2' \
--data-urlencode 'password=1234' \
--data-urlencode 'role=User'
```

### Login API
```
curl --location --request POST 'http://127.0.0.1:8080/api/login' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=arnab2' \
--data-urlencode 'password=1234'
```

### Get All Books API
```
curl --location --request GET 'http://127.0.0.1:8080/api/books' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM0OTkxMzMxfQ.K-dss6k3Dz8JRqXM4xH_0xemGH0agrc_tbbym3QMsw4'
```

## Version Control
For this project we are using Git for version control

### Steps: 

1. `git init`
2. `git add .`
3. `git commit -m "Initial commit"`
4. If you want to push these changes to some git complaint websites like GitHib or BitBucket, do follow the documents on their site for uploading an existing git project

## Deployment using docker
Follow the documentation as given in https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

 + Install docker application (https://www.docker.com/products/docker-desktop)
 + Create the Dockerfile and place it in the root of the project
 + `docker build . -t <your username>/node-web-app`
 + To see your images created by the previous step run `docker images`

 This will show like the following

| REPOSITORY               | TAG    | IMAGE ID      | CREATED       | SIZE  |
|:------------------------:|:------:|:-------------:|:-------------:|:-----:|
| kararnab/role_auth_1.0   | latest | e8cf6cb465c8  | 4 minutes ago | 954MB |

+ Run the docker image created using the following cmd
+ `docker run -p 49160:8080 -d <your username>/node-web-app`
+ Open the browser link http://localhost:49160

OR 
+ `docker run --publish 8080:8080 kararnab/role_auth_1.0`
+ Open the browser link http://localhost:8080

