#!/bin/bash

if [ ! -h '/var/www/sapphire' ]; then
  ln -s /var/www/b79sapphire /var/www/sapphire
fi

if [ ! -h '/var/www/sapphire_dev' ]; then
  ln -s /var/www/b79sapphire /var/www/sapphire_dev
fi

export TERM=xterm

chown -R 999:999 /var/scripts/*
chmod -R 775 /var/scripts/*

exec "$@"
