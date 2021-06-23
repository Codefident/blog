@echo off
start nodemon ./server/server.js
start npx tsc -w ./server/server.ts
cd ./client
start npm start
cd d:\xampp\apache\bin
start httpd.exe