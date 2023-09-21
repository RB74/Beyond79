#!/bin/bash

if [ ! -h '/var/www/sapphire' ]; then
  ln -s /var/www/b79sapphire /var/www/sapphire
fi

if [ ! -h '/var/www/sapphire_dev' ]; then
  ln -s /var/www/b79sapphire /var/www/sapphire_dev
fi

if [ ! -h '/var/www/goldtrack/resources' ]; then
  ln -s /var/www/goldexchangeapi.com/resources /var/www/goldtrack/resources
fi

chown -R 999:999 /var/www/b79drupal/drupal/includes
chown -R 999:999 /var/www/b79drupal/drupal/sites/sellyourgold.com/files
chown -R 999:999 /var/www/b79drupal/drupal/sites/recycleplatinum.com/files
chown -R 999:999 /var/www/b79drupal/drupal/sites/elitediamondbuyers.com/files
chown -R 999:999 /var/www/b79drupal/drupal/sites/goldkit.com/files
chown -R 999:999 /var/www/b79drupal/drupal/sites/outofyourlife.com/files
chown -R 999:999 /var/www/b79drupal/drupal/sites/thingswebuy.com/files
chown -R 999:999 /var/www/b79drupal/drupal/sites/d7.com/files

chown -R 999:999 /usr/share/pear/xhprof_html
chown -R 999:999 /usr/share/pear/xhprof_lib

chown -R 999:999 /var/scripts/*
chmod -R 775 /var/scripts/*

export TERM=xterm

exec "$@"