# Getting Started with My Contacts Backend

## The database used in this project is Postgres
## Postgres is running via Docker

1st step - Download the image using: docker pull postgres
Obs: we did not specify a tag which is the version, so without specifying the tag Postgres will install the latest.

2nd step - To view the images running use: docker image ls

3rd step - Run the container: docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
Obs: After executing the code above a long hash should be displayed, this means that the image is running successfully.

Obs: After the flag --name you can name the image whatever you want (named pg short for Postgres).
Obs: The flag -e stands for environment variables in the case above I passed 2 with its key and value pair.
Obs: The flag -p is the port.
Obs: The flag -d is short for detach which means that docker will keep on executing the image on the background without passing this flag if you close the  docker window the image will stop running which will result in a potential crash.

4th step: To see if the container of the image is created execute: (docker container ls) or (docker ps).
This will list the running containers and if you wish to see all the existing containers in you machine running or not just add the flag -a

5th step: In case you wish to stop the container use: docker stop (name of the container or the container id)


