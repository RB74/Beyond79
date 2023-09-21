FROM urldigital.com/beyond79/fpm

RUN yum install -y logrotate sysstat lsof htop atop

ADD docker-entrypoint.sh /

VOLUME /var/www
VOLUME /var/www/wiki/data
VOLUME /var/www/wiki/lib

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["php-fpm", "--nodaemonize"]