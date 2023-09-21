#!/bin/bash

chown -R 999:999 /var/www/b79api/storage
chown -R 999:999 /var/www/goldexchangeapi.com/data/cache
chown -R 999:999 /var/www/b79api/storage/logs/laravel.log
chown -R 999:999 /var/www/b79sapphire/plugins/pdfmaker/lib/fonts
chown -R 999:999 /var/www/goldexchangeapi.com/resources/kits

chmod -R 777 /var/www/b79api/storage
chmod -R 777 /var/www/b79api/bootstrap/cache

if [ ! -h '/var/www/sapphire' ]; then
  ln -s /var/www/b79sapphire /var/www/sapphire
fi

if [ ! -h '/var/www/sapphire_dev' ]; then
  ln -s /var/www/b79sapphire /var/www/sapphire_dev
fi

exec "$@"