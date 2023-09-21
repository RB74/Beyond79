FROM urldigital.com/beyond79/fpm

RUN yum -y install cronie git mysql logrotate sysstat lsof htop atop && \
 git clone -b 7.0.0 https://github.com/drush-ops/drush.git /usr/local/src/drush && \
 ln -s /usr/local/src/drush/drush /usr/local/bin/drush && \
 composer --working-dir=/usr/local/src/drush install && \
 yum clean all

COPY scripts/* /var/scripts/

VOLUME /etc/cron.d

RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && \
    echo America/New_York > /etc/timezone

ADD docker-entrypoint.sh /

CMD ["crond", "-n"]

ENTRYPOINT ["/docker-entrypoint.sh"]
