#!/bin/bash

git checkout master

git pull

docker kill bot && docker rm bot

docker rmi yp_bot && docker build -t yp_bot

docker run --env-file ./build/docker.env --name bot -it -d yp_bot