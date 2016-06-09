#!/bin/bash
# $1 = deploy file
# $2 = deploy directory (REALTIVE path from /var/www/html)


#cd $HOME"/usr/share/nginx/html"
cd $HOME

# hacer una copia de la ultima version antes de borrar

rm -rf $HOME/frontend-deploy/*

tar -xvf frontendDistricteZero-deploy.tar -C .
