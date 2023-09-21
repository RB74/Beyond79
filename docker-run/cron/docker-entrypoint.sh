#!/bin/bash

chmod -R 0644 /etc/conf.d

export TERM=xterm

exec "$@"