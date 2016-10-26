# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", path: "provision.sh"
  
  config.vm.synced_folder 'F:\shared_root\jake\bulk\regal\bins\cast', "/cast"
  config.vm.synced_folder 'F:\shared_root\jake\bulk\kittens', "/kittens"
  
  config.vm.network "forwarded_port", guest: 80, host: 9001
  config.vm.network "forwarded_port", guest: 8124, host: 9002
  config.vm.network "forwarded_port", guest: 3000, host: 9003
end
