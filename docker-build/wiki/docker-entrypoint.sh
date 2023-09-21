#!/bin/bash

chown -R 999:999 /var/www/wiki/data
chown -R 999:999 /var/www/wiki/lib

exec "$@"