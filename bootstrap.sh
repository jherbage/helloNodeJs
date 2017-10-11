#!/usr/bin/env bash
cd ~
sudo apt-get update
sudo apt-get install -y git 
sudo apt-get install -y nodejs 
sudo apt-get install -y nodejs-legacy
sudo apt-get install -y npm
rm -rf helloNodeJs
git clone https://github.com/jherbage/helloNodeJs.git
cd helloNodeJs
sudo npm install -g http-server
sudo npm install express os
mkdir -p public
nohup node hello.js $1 `curl http://169.254.169.254/latest/meta-data/public-ipv4` &

