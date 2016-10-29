#!/bin/bash

echo "Updating packages..."

sudo apt-get update -qq > /dev/null

sudo apt-get upgrade -qq -y > /dev/null

sudo apt-get dist-upgrade -qq -y > /dev/null

sudo apt-get autoremove -y

echo "Install mongodb"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

sudo apt-get update

sudo apt-get install -qq -y \
    git \
    curl \
    mongodb \
    > /dev/null


sudo cp /vagrant/yumi/mongodb.conf  /etc/mongodb.conf

sudo service mongodb restart
