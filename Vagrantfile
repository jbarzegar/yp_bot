# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  # MongoDB
  config.vm.network "forwarded_port", guest: 27017, host: 27017
  config.vm.network "forwarded_port", guest: 27018, host: 27018
  config.vm.network "forwarded_port", guest: 27019, host: 27019
  config.vm.network "forwarded_port", guest: 28017, host: 28017


  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.provision "shell", path: "yumi/provision.sh", privileged: false
end
