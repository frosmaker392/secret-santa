#!/bin/sh

/bin/sh -c envsubst < /env.template.js > /usr/share/nginx/html/assets/env.js
/bin/sh -c envsubst < /nginx.conf.template > /etc/nginx/nginx.conf
nginx -g 'daemon off;'
