FROM centos:7

COPY nginx.repo /etc/yum.repos.d/nginx.repo

RUN rpm -Uvh http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm && \
 yum install -y nginx vim logrotate sysstat atop htop lsof && yum clean all
RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && \
    echo America/New_York > /etc/timezone

COPY nginx.conf /etc/nginx/nginx.conf
COPY fastcgi_params /etc/nginx/fastcgi_params

VOLUME /etc/nginx
VOLUME /etc/nginx/conf.d
VOLUME /var/www

WORKDIR /var/www

CMD ["nginx", "-g", "daemon off;"]
