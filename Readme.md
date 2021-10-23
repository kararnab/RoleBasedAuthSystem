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

## Todo
+ Docker setup

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