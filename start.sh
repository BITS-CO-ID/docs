#!/bin/sh

if [ $(ps aux | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
    export PATH=/usr/local/bin:$PATH
    export NODE_ENV=production
    NODE_ENV=production forever start --sourceDir /home/www/bits.co.id/web/apps index.js >> /var/log/nodelog.txt 2>&1
fi

