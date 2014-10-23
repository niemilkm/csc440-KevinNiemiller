#!/bin/bash -x

sudo npm install -g fibers;
sudo npm install -g underscore;
sudo npm install -g source-map-support;
sudo npm install -g semver;

export ROOT_URL="http://ec2-54-68-136-133.us-west-2.compute.amazonaws.com/";
export BIND_IP="0.0.0.0";
export PORT="80";
export MONGO_URL="mongodb://localhost:27017/cinRoadActivity"; 
export NODE_PATH=/usr/lib/nodejs:/usr/lib/node_modules:/usr/share/javascript
cd /home/meteor/cinRoadActivity/code;
sudo -E forever stopall;
sudo -E forever start bundle/main.js;
