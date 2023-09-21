FROM urldigital.com/beyond79/fpm

RUN yum install -y logrotate sysstat lsof htop atop

ADD docker-entrypoint.sh /

VOLUME /var/www/b79api/storage/framework
VOLUME /var/www/b79api/storage/app
VOLUME /var/www/b79api/storage/logs
VOLUME /var/www/b79api/bootstrap/cache
VOLUME /var/www/goldexchangeapi.com/resources/kits
VOLUME /var/www/goldexchangeapi.com/data/cache

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["php-fpm", "--nodaemonize"]