FROM centos:7

RUN rpm -Uvh http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm && \
 rpm -Uvh https://dl.iuscommunity.org/pub/ius/stable/CentOS/7/x86_64/ius-release-1.0-14.ius.centos7.noarch.rpm && \
 rpm -Uvh http://yum.newrelic.com/pub/newrelic/el5/x86_64/newrelic-repo-5-3.noarch.rpm && \
 yum install -y \
 php56u-fpm \
 php56u-cli \
 php56u-gd \
 php56u-bcmath \
 php56u-mbstring \
 php56u-pdo \
 php56u-mysqlnd \
 php56u-pecl-imagick \
 php56u-xml \
 php56u-soap \
 php56u-pear \
 php56u-pecl-memcache \
 php56u-opcache \
 php56u-intl \
 php56u-pecl-jsonc \
 php56u-mcrypt \
 ssmtp \
 newrelic-php5 \
 vim logrotate sysstat lsof htop atop && \
 yum clean all && \
 curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && \
    echo America/New_York > /etc/timezone

COPY ssh2.so /usr/lib64/php/modules/ssh2.so
COPY xdebug.so /usr/lib64/php/modules/xdebug.so
COPY xhprof.so /usr/lib64/php/modules/xhprof.so
COPY php.ini /etc/php.ini
COPY ssh2.ini /etc/php.d/ssh2.ini
COPY ssmtp/ssmtp.conf /etc/ssmtp/ssmtp.conf
COPY xhprof_html /usr/share/pear/xhprof_html
COPY xhprof_lib /usr/share/pear/xhprof_lib

VOLUME /var/log/php-fpm
VOLUME /etc/php-fpm.d
VOLUME /etc/php.d
VOLUME /var/www
VOLUME /etc/ssmtp

EXPOSE 9000 9001
WORKDIR /var/www

CMD ["php-fpm", "--nodaemonize"]
