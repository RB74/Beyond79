node /.*dev\.beyond79\.com/ {

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
        nameservers => ['10.10.1.30', '8.8.8.8'],
    }
    # end dns

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

    # composer stuff
    exec { 'b79api-install':
        command => '/usr/local/bin/composer install',
        cwd => '/var/www/b79api/',
        creates => '/var/www/b79api/vendor/',
        environment => ["COMPOSER_HOME=/usr/local/bin"],
        path    => '/usr/bin:/usr/local/bin:~/.composer/vendor/bin/',
        require => Class['php']
    }
    # end composer stuff

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

    # memcached
    class { 'memcached':
        max_memory => '64M'
    }
    # end memcached

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

    file { '/var/www/auto_prepend_file.php':
        ensure => present,
        source => 'puppet:///files/php-files/local-drupal-credentials.php',
        owner => 'nginx',
        group => 'nginx',
    }
    #end php

    # nginx
    class { 'nginx': sendfile => 'off' }

    file { '/etc/nginx/conf.d/drupal.include':
        ensure => present,
        source => 'puppet:///files/nginx-includes/drupal.include',
    }

    file { '/etc/nginx/conf.d/goldtrack.include':
        ensure => present,
        source => 'puppet:///files/nginx-includes/goldtrack.include',
    }

    file { '/etc/nginx/conf.d/apigx.include':
        ensure => present,
        source => 'puppet:///files/nginx-includes/apigx.include',
    }

    nginx::resource::vhost { 'apigx.com':
        server_name => ['local.apigx.com'],
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
         fastcgi_script  => undef
   }

    nginx::resource::vhost { 'secure.apigx.com':
        server_name => ['local.secure.apigx.com'],
        www_root => '/var/www/goldexchangeapi.com/secure/public/',
        access_log => '/var/log/nginx/secure.apigx.com-access.log',
        error_log => '/var/log/nginx/secure.apigx.com-error.log',
        try_files => ['$uri', '$uri/', '/index.php?$query_string'],
        listen_port => 80,
        vhost_cfg_append => {
           'include' => [
               '/etc/nginx/conf.d/apigx.include',
           ],
        },
        require => [
            File['/etc/nginx/conf.d/apigx.include']
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

   nginx::resource::vhost { 'admin.apigx.com':
       server_name => ['localadmin.apigx.com'],
       www_root => '/var/www/goldexchangeapi.com/admin/public/',
       access_log => '/var/log/nginx/apigx.com-access.log',
       error_log => '/var/log/nginx/apigx.com-error.log',
       listen_port => 80,
       try_files => ['$uri', '$uri/', '/index.php?$query_string']
   }

   nginx::resource::location { "gxadmin-php":
        ensure          => present,
        vhost           => "admin.apigx.com",
        www_root        => "/var/www/goldexchangeapi.com/admin/public/",
        location        => '~ \.php$',
        index_files     => ['index.php', 'index.html', 'index.htm'],
        try_files => ['$uri', '/index.php?$query_string'],
        fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
        fastcgi_script  => undef
  }

    nginx::resource::vhost { 'beyond79.com':
        server_name => ['*.beyond79.com'],
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
         fastcgi_script  => undef
   }

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
             fastcgi_script  => undef
       }

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
         fastcgi_script  => undef
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
         fastcgi_script  => undef
   }

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
         fastcgi_script  => undef
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
         fastcgi_script  => undef
   }

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
         fastcgi_script  => undef
   }

     nginx::resource::vhost { 'urlleads.com':
           server_name => ['urlleads.com'],
           www_root => '/var/www/url_leads/public/',
           access_log => '/var/log/nginx/urlleads.com-access.log',
           error_log => '/var/log/nginx/urlleads.com-error.log',
           try_files       => ['$uri', '$uri/', '/index.php?$query_string'],
           listen_port => 80,
       }

   nginx::resource::location { "urlleads-php":
        ensure          => present,
        vhost           => "urlleads.com",
        www_root        => "/var/www/url_leads/public/",
        location        => '~ \.php$',
        index_files     => ['index.php', 'index.html', 'index.htm'],
        fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
        fastcgi_script  => undef
  }

    # end nginx

    # mariadb
    class { '::mysql::server':
        root_password => 'vagrant',
        remove_default_accounts => true,
        override_options => {
            mysqld => { bind-address => '0.0.0.0' }
        },
    }

    mysql::db { 'd7_b79':
        user => 'd7',
        password => 'drupal',
        dbname => 'd7_b79',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/d7_b79.sql',
    }

    mysql::db { 'd7_syg':
        user => 'd7',
        password => 'drupal',
        dbname => 'd7_syg',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/d7_syg.sql',
    }

    mysql::db { 'd7_gk':
        user => 'd7',
        password => 'drupal',
        dbname => 'd7_gk',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/d7_gk.sql',
    }

    mysql::db { 'd7_edb':
        user => 'd7',
        password => 'drupal',
        dbname => 'd7_edb',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/d7_edb.sql',
    }

    mysql::db { 'd7_rp':
        user => 'd7',
        password => 'drupal',
        dbname => 'd7_rp',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/d7_rp.sql',
    }

    mysql::db { 'd7_ooyl':
        user => 'd7',
        password => 'drupal',
        dbname => 'd7_ooyl',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/d7_ooyl.sql',
    }

    mysql::db { 'd7_twb':
        user => 'd7',
        password => 'drupal',
        dbname => 'd7_twb',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/d7_twb.sql',
    }

    mysql::db { 'goldexchange':
        user => 'goldexchange',
        password => 'g0ld13l0cks',
        dbname => 'goldexchange',
        host => 'localhost',
        grant => ['ALL'],
        sql => '/files/databases/goldexchange.sql',
    }
    #end mariadb

    # event store
    include packagecloud

    packagecloud::repo { "EventStore/EventStore-OSS":
        type => 'rpm',  # or "deb" or "gem"
    }
    # end event store

}