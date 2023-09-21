#
# Backend Web Server (Nginx + PHP-FPM)
#
node /apigx\.web[0-9]+\.beyond79\.com/ {

    include '::hosts'

    # user management
    class { 'accounts': }
    # end user management

    # aws config file
    file { '/etc/cloud/cloud.cfg':
        ensure => 'present',
        source => 'puppet:///files/cloud/cloud.cfg'
    }
    # end aws config file

    file { '/etc/profile':
        ensure => present,
        source => 'puppet:///files/environment-variables/production.goldexchange.txt',
    }

    # repos
        yumrepo { "EPEL":
          baseurl => "https://dl.fedoraproject.org/pub/epel/7/$architecture",
          descr => "EPEL repository",
          enabled => 1,
          gpgcheck => 0
       }

        yumrepo { "IUS":
          baseurl => "https://dl.iuscommunity.org/pub/ius/stable/CentOS/7/$architecture",
          descr => "IUS Community repository",
          enabled => 1,
          gpgcheck => 0
       }
       # end repos

        # dns
        class { 'resolv_conf':
            searchpath => ['.beyond79.com'],
            nameservers => ['8.8.8.8', '209.244.0.3'], # Google and Level3
        }
        # end dns

        include '::ntp'

        class { 'snmp':
          agentaddress => [ 'udp:161', ],
          ro_community => 'U2theR1d1gitaL',
          ro_network   => '172.31.0.0/16',
        }

        ::nfs::client::mount { '/nfs/goldexchange/resources/':
          server  => 'nfscache.beyond79.com',
          share   => '/nfs/goldexchange/resources/',
          options => 'rw',
          owner => 'nginx',
          perm => '0775'
        }

        # composer stuff
        exec { 'apigx-install':
            command => '/usr/local/bin/composer install',
            cwd => '/var/www/apigx/',
            creates => '/var/www/apigx/vendor/',
            environment => ["COMPOSER_HOME=/usr/local/bin"],
            path    => '/usr/bin:/usr/local/bin:~/.composer/vendor/bin/',
            require => Class['php']
        }
        # end composer stuff

        # apigx resources symlinks
        file { '/var/www/goldexchangeapi.com/resources':
            ensure => 'link',
            target => '/nfs/goldexchange/resources'
        }

        # sapphire symlinks
        file { '/var/www/sapphire':
            ensure => 'link',
            target => '/var/www/b79sapphire'
        }
        file { '/var/www/sapphire_dev':
            ensure => 'link',
            target => '/var/www/b79sapphire'
        }
        # end sapphire symlinks

        # php
        include ::php

        # include some packages that have issues defined in heira
        package { 'php-pecl-jsonc':
            ensure => 'present'
        }
        package { 'php-pecl-memcached':
            ensure => 'present'
        }
        #end php

        # mysql
        class { '::mysql::client': }
        # end mysql

        file { '/etc/nginx/conf.d/apigx.include':
            ensure => present,
            source => 'puppet:///files/nginx-includes/apigx.include',
        }

        # nginx
        class {
            'nginx':
                sendfile => 'off',
                worker_processes => '2',
        }

        nginx::resource::vhost { 'secure.apigx.com':
            server_name => ['secure.apigx.com'],
            www_root => '/var/www/goldexchangeapi.com/secure/public/',
            access_log => '/var/log/nginx/secure.apigx.com-access.log',
            error_log => '/var/log/nginx/secure.apigx.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '$uri/', '/index.php?$query_string'],
            vhost_cfg_append => {
               'include' => [
                   '/etc/nginx/conf.d/apigx.include',
               ],
            },
            require => [
                File['/etc/nginx/conf.d/apigx.include'],
            ],
        }

        nginx::resource::location { "secure-php":
             ensure          => present,
             vhost           => "secure.apigx.com",
             www_root        => "/var/www/goldexchangeapi.com/secure/public/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef
       }

    nginx::resource::vhost { 'apigx.com':
            server_name => ['apigx.com'],
            www_root => '/var/www/apigx/public/',
            access_log => '/var/log/nginx/apigx.com-access.log',
            error_log => '/var/log/nginx/apigx.com-error.log',
            try_files       => ['$uri', '$uri/', '/index.php?$query_string'],
            listen_port => 80,
            add_header => {
              'Access-Control-Allow-Headers' => 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
              'Access-Control-Allow-Methods' => 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
              'Access-Control-Allow-Origin'  => '*'
            }
        }

        nginx::resource::location { "api-php":
             ensure          => present,
             vhost           => "apigx.com",
             www_root        => "/var/www/apigx/public/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef,
       }

    # end nginx

}