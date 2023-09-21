FROM centos:7

RUN groupadd -r mysql && useradd -r -g mysql mysql

LABEL Vendor="CentOS"
LABEL License=GPLv2
LABEL Version=5.5.41

LABEL Build docker build --rm --tag centos/mariadb55 .

RUN yum -y install --setopt=tsflags=nodocs epel-release vim logrotate lsof atop htop sysstat && \
    yum -y install --setopt=tsflags=nodocs mariadb-server bind-utils pwgen psmisc hostname && \
    yum -y update && yum clean all
RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && \
    echo America/New_York > /etc/timezone

VOLUME /var/lib/mysql
VOLUME /mnt/ramdisk
VOLUME /backup
VOLUME /scripts
VOLUME /databases

COPY docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 3306

CMD ["mysqld_safe"]
