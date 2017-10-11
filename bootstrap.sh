#!/usr/bin/env bash
cd ~
sudo apt-get update
sudo apt-get install -y git 
sudo apt-get install -y node 
sudo apt-get install -y nodejs-legacy
sudo apt-get install -y npm
rm -rf *
git clone https://github.com/jherbage/helloNodeJs.git
cd helloNodeJs
sudo npm install -g http-server
sudo npm install express os
mkdir -p public
nohup node hello.js $1 &

