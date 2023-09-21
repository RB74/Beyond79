#
# Backend Web Server (Nginx + PHP-FPM)
#
node /admin\.apigx\.web[0-9]+\.beyond79\.com/ {

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
        package { 'php-pecl-ssh2':
            ensure => 'present'
        }
        package { 'php-pecl-memcache':
            ensure => 'present'
        }
        package { 'php-pecl-memcached':
            ensure => 'present'
        }
        #end php

        # mysql
        class { '::mysql::client': }
        # end mysql

        # nginx
        class {
            'nginx':
                sendfile => 'off',
                worker_processes => '2',
        }

       nginx::resource::vhost { 'admin.apigx.com':
           server_name => ['admin.apigx.com'],
           www_root => '/var/www/goldexchangeapi.com/admin/public/',
           access_log => '/var/log/nginx/apigx.com-access.log',
           error_log => '/var/log/nginx/apigx.com-error.log',
           listen_port => 80,
           try_files => ['$uri', '$uri/', '/index.php?$query_string'],
       }

       nginx::resource::location { "admin-apigx-php":
            ensure          => present,
            vhost           => "admin.apigx.com",
            www_root        => "/var/www/goldexchangeapi.com/admin/public/",
            location        => '~ \.php$',
            index_files     => ['index.php', 'index.html', 'index.htm'],
            try_files => ['$uri', '/index.php?$query_string'],
            fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
            fastcgi_script  => undef,
            location_cfg_append => {
                'fastcgi_connect_timeout' => '5',
                  'fastcgi_send_timeout' => '300',
                  'fastcgi_read_timeout' => '300',
                  'fastcgi_buffer_size' => '128k',
                  'fastcgi_buffers' => '4 256k',
                  'fastcgi_busy_buffers_size' => '256k',
                  'fastcgi_temp_file_write_size' => '256k',
              }
      }

    # end nginx

    # cron jobs -- this cannot be on more than one machine -- maybe have a utility server do this and the drupal crons
    file { '/etc/profile':
        ensure => present,
        source => 'puppet:///files/environment-variables/production.goldexchange.txt',
    }

    file { '/etc/crontab':
        ensure => present,
        source => 'puppet:///files/cron/production.goldexchange.txt',
    }

    # end cron jobs

}