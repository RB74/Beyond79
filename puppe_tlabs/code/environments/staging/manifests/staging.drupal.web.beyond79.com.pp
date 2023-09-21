#
# Backend Web Server (Nginx + PHP-FPM)
#
node /staging\.drupal\.web[0-9]+\.beyond79\.com/ {

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

        include '::nfs::client'

        ::nfs::client::mount { '/nfs/drupal/site-files/':
          server  => 'staging.nfscache.beyond79.com',
          share   => '/nfs/drupal/site-files/',
          options => 'rw',
          owner => 'nginx',
          perm => '0775'
        }

        ::nfs::client::mount { '/nfs/goldexchange/resources/':
          server  => 'staging.nfscache.beyond79.com',
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

        # drupal site files symlinks
        file { '/var/www/b79drupal/drupal/sites/beyond79.com/files':
            ensure => 'link',
            target => '/nfs/drupal/site-files/beyond79.com/files'
        }
        file { '/var/www/b79drupal/drupal/sites/sellyourgold.com/files':
            ensure => 'link',
            target => '/nfs/drupal/site-files/sellyourgold.com/files'
        }
        file { '/var/www/b79drupal/drupal/sites/goldkit.com/files':
            ensure => 'link',
            target => '/nfs/drupal/site-files/goldkit.com/files'
        }
        file { '/var/www/b79drupal/drupal/sites/thingswebuy.com/files':
            ensure => 'link',
            target => '/nfs/drupal/site-files/thingswebuy.com/files'
        }
        file { '/var/www/b79drupal/drupal/sites/recycleplatinum.com/files':
            ensure => 'link',
            target => '/nfs/drupal/site-files/recycleplatinum.com/files'
        }
        file { '/var/www/b79drupal/drupal/sites/outofyourlife.com/files':
            ensure => 'link',
            target => '/nfs/drupal/site-files/outofyourlife.com/files'
        }
        file { '/var/www/b79drupal/drupal/sites/elitediamondbuyers.com/files':
            ensure => 'link',
            target => '/nfs/drupal/site-files/elitediamondbuyers.com/files'
        }
        # end drupal site files symlinks

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

        # drush stuff
        staging::file { 'drush':
          source => 'http://files.drush.org/drush.phar',
          target => '/usr/local/bin/drush'
        }
        file { '/usr/local/bin/drush':
            ensure=> present,
            mode => '777',
            require => Staging::File["drush"],
        }
        # end drush stuff

        # php
        include ::php

        # include some packages that have issues defined in heira
        package { 'php-pecl-jsonc':
            ensure => 'present'
        }
        package { 'php-pecl-memcache':
            ensure => 'present'
        }

        file { '/var/www/auto_prepend_file.php':
            ensure => present,
            source => 'puppet:///files/php-files/staging-drupal-credentials.php',
            owner => 'nginx',
            group => 'nginx',
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

        file { '/etc/nginx/conf.d/drupal.include':
            ensure => present,
            source => 'puppet:///files/nginx-includes/drupal.include',
        }

        file { '/etc/nginx/conf.d/goldtrack.include':
            ensure => present,
            source => 'puppet:///files/nginx-includes/goldtrack.include',
        }

        ###
        # START B79 Brand
        ###

        nginx::resource::vhost { 'beyond79.com':
            server_name => ['www.beyond79.com'],
            www_root => '/var/www/b79drupal/drupal/',
            access_log => '/var/log/nginx/beyond79.com-access.log',
            error_log => '/var/log/nginx/beyond79.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '/index.php?$query_string'],
            index_files     => ['index.php', 'index.html', 'index.htm'],
            vhost_cfg_append => {
                'include' => [
                    '/etc/nginx/conf.d/drupal.include',
                    '/etc/nginx/conf.d/goldtrack.include'
                ],
             },
            require => [
                File['/etc/nginx/conf.d/drupal.include']
            ],
        }

        nginx::resource::location { "beyond79-php":
             ensure          => present,
             vhost           => "beyond79.com",
             www_root        => "/var/www/b79drupal/drupal/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef,
             fastcgi_param  => {
              'APP_ENV' => 'staging',
              'HTTPS' => 'On'
            },
       }

       ###
       # END B79 Brand
       ###

        ###
        # START Sell Your Gold Brand
        ###
        nginx::resource::vhost { '*.sellyourgold.com':
            server_name => ['*.sellyourgold.com'],
            www_root => '/var/www/b79drupal/drupal/',
            access_log => '/var/log/nginx/sellyourgold.com-access.log',
            error_log => '/var/log/nginx/sellyourgold.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '/index.php?$query_string'],
            index_files     => ['index.php', 'index.html', 'index.htm'],
            vhost_cfg_append => {
                'include' => [
                    '/etc/nginx/conf.d/drupal.include',
                    '/etc/nginx/conf.d/goldtrack.include'
                ],
             },
            require => [
                File['/etc/nginx/conf.d/drupal.include'],
                File['/etc/nginx/conf.d/goldtrack.include']
            ],
        }

        nginx::resource::location { "sellyourgold-php":
                 ensure          => present,
                 vhost           => "*.sellyourgold.com",
                 www_root        => "/var/www/b79drupal/drupal/",
                 location        => '~ \.php$',
                 index_files     => ['index.php', 'index.html', 'index.htm'],
                 fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
                 fastcgi_script  => undef,
                  fastcgi_param  => {
                   'APP_ENV' => 'staging',
                   'HTTPS' => 'On'
                 },
           }

        ###
        # END Sell Your Gold Brand
        ###

        ###
        # START Things We Buy Brand
        ###

        nginx::resource::vhost { '*.thingswebuy.com':
            server_name => ['*.thingswebuy.com'],
            www_root => '/var/www/b79drupal/drupal/',
            access_log => '/var/log/nginx/thingswebuy.com-access.log',
            error_log => '/var/log/nginx/thingswebuy.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '/index.php?$query_string'],
            index_files     => ['index.php', 'index.html', 'index.htm'],
            vhost_cfg_append => {
                'include' => [
                    '/etc/nginx/conf.d/drupal.include',
                    '/etc/nginx/conf.d/goldtrack.include'
                ],
            },
            require => [
                File['/etc/nginx/conf.d/drupal.include'],
                File['/etc/nginx/conf.d/goldtrack.include']
            ],
        }

        nginx::resource::location { "thingswebuy-php":
             ensure          => present,
             vhost           => "*.thingswebuy.com",
             www_root        => "/var/www/b79drupal/drupal/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef,
              fastcgi_param  => {
               'APP_ENV' => 'staging',
               'HTTPS' => 'On'
             },
       }

        ###
        # END Things We Buy Brand
        ###

       ###
       # START GoldKit Brand
       ###

       nginx::resource::vhost { '*.1800goldkit.com':
           use_default_location => false,
           index_files          => [],
           location_custom_cfg  => {},
           vhost_cfg_append     => {
               'rewrite'      => '^/(.*) https://staging.goldkit.com/$1 permanent'
           }
       }

        nginx::resource::vhost { '*.goldkit.com':
            server_name => ['*.goldkit.com'],
            www_root => '/var/www/b79drupal/drupal/',
            access_log => '/var/log/nginx/goldkit.com-access.log',
            error_log => '/var/log/nginx/goldkit.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '/index.php?$query_string'],
            index_files     => ['index.php', 'index.html', 'index.htm'],
            vhost_cfg_append => {
                'include' => [
                    '/etc/nginx/conf.d/drupal.include',
                    '/etc/nginx/conf.d/goldtrack.include'
                ],
            },
            require => [
                File['/etc/nginx/conf.d/drupal.include'],
                File['/etc/nginx/conf.d/goldtrack.include']
            ],
        }

        nginx::resource::location { "goldkit-php":
             ensure          => present,
             vhost           => "*.goldkit.com",
             www_root        => "/var/www/b79drupal/drupal/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef,
              fastcgi_param  => {
               'APP_ENV' => 'staging',
               'HTTPS' => 'On'
             },
       }

       ###
       # END GoldKit Brand
       ###

        ###
        # START Recycle Platinum Brand
        ###

        nginx::resource::vhost { '*.recycleplatinum.com':
            server_name => ['*.recycleplatinum.com'],
            www_root => '/var/www/b79drupal/drupal/',
            access_log => '/var/log/nginx/recycleplatinum.com-access.log',
            error_log => '/var/log/nginx/recycleplatinum.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '/index.php?$query_string'],
            index_files     => ['index.php', 'index.html', 'index.htm'],
            vhost_cfg_append => {
                'include' => [
                    '/etc/nginx/conf.d/drupal.include',
                    '/etc/nginx/conf.d/goldtrack.include'
                ],
            },
            require => [
                File['/etc/nginx/conf.d/drupal.include'],
                File['/etc/nginx/conf.d/goldtrack.include']
            ],
        }

        nginx::resource::location { "recycleplatinum-php":
             ensure          => present,
             vhost           => "*.recycleplatinum.com",
             www_root        => "/var/www/b79drupal/drupal/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef,
              fastcgi_param  => {
               'APP_ENV' => 'staging',
               'HTTPS' => 'On'
             },
       }

        ###
        # END Recycle Platinum Brand
        ###

       ###
       # START Out Of Your Life Brand
       ###

       nginx::resource::vhost { '*.ooyl.com':
          use_default_location => false,
          index_files          => [],
          location_custom_cfg  => {},
          vhost_cfg_append     => {
              'rewrite'      => '^/(.*) https://staging.outofyourlife.com/$1 permanent'
          }
      }

        nginx::resource::vhost { '*.outofyourlife.com':
            server_name => ['*.outofyourlife.com'],
            www_root => '/var/www/b79drupal/drupal/',
            access_log => '/var/log/nginx/outofyourlife.com-access.log',
            error_log => '/var/log/nginx/outofyourlife.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '/index.php?$query_string'],
            index_files     => ['index.php', 'index.html', 'index.htm'],
            vhost_cfg_append => {
                'include' => [
                    '/etc/nginx/conf.d/drupal.include',
                    '/etc/nginx/conf.d/goldtrack.include'
                ],
            },
            require => [
                File['/etc/nginx/conf.d/drupal.include'],
                File['/etc/nginx/conf.d/goldtrack.include']
            ],
        }

        nginx::resource::location { "outofyourlife-php":
             ensure          => present,
             vhost           => "*.outofyourlife.com",
             www_root        => "/var/www/b79drupal/drupal/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef,
              fastcgi_param  => {
               'APP_ENV' => 'staging',
               'HTTPS' => 'On'
             },
       }

       ###
       # END Out Of Your Life Brand
       ###

        ###
        # START Elite Diamond Buyers Brand
        ###

        nginx::resource::vhost { '*.elitediamondbuyers.com':
            server_name => ['*.elitediamondbuyers.com'],
            www_root => '/var/www/b79drupal/drupal/',
            access_log => '/var/log/nginx/elitediamondbuyers.com-access.log',
            error_log => '/var/log/nginx/elitediamondbuyers.com-error.log',
            listen_port => 80,
            try_files => ['$uri', '/index.php?$query_string'],
            index_files     => ['index.php', 'index.html', 'index.htm'],
            vhost_cfg_append => {
                'include' => [
                    '/etc/nginx/conf.d/drupal.include',
                    '/etc/nginx/conf.d/goldtrack.include'
                ],
            },
            require => [
                File['/etc/nginx/conf.d/drupal.include'],
                File['/etc/nginx/conf.d/goldtrack.include']
            ],
        }

        nginx::resource::location { "*.elitediamondbuyers-php":
             ensure          => present,
             vhost           => "*.elitediamondbuyers.com",
             www_root        => "/var/www/b79drupal/drupal/",
             location        => '~ \.php$',
             index_files     => ['index.php', 'index.html', 'index.htm'],
             fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
             fastcgi_script  => undef,
              fastcgi_param  => {
               'APP_ENV' => 'staging',
               'HTTPS' => 'On'
             },
       }

        ###
        # END Recycle Platinum Brand
        ###
    # end nginx

}