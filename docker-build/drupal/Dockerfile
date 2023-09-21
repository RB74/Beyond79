FROM urldigital.com/beyond79/fpm

RUN yum -y install git mysql logrotate sysstat lsof htop atop && \
 git clone -b 7.0.0 https://github.com/drush-ops/drush.git /usr/local/src/drush && \
 ln -s /usr/local/src/drush/drush /usr/local/bin/drush && \
 composer --working-dir=/usr/local/src/drush install && \
 yum clean all

COPY scripts/* /var/scripts/

ADD docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["php-fpm", "--nodaemonize"]