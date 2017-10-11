#!/usr/bin/env bash
cd ~
sudo apt-get update
sudo apt-get install -y git npm node nodejs-legacy
git clone https://github.com/jherbage/helloNodeJs.git
cd helloNodeJs
sudo npm install -g http-server
sudo npm install express os
mkdir -p public
nohup node hello.js &

