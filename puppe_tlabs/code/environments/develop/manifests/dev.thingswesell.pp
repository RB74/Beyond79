node /dev\.thingswesell\.beyond79\.com/ {

    # user management
    class { 'accounts': }
    # end user management

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
    #end php

    # composer stuff
    exec { 'magento-install':
        command => '/usr/local/bin/composer install',
        cwd => '/var/www/thingswesell.com/',
        creates => '/var/www/thingswesell.com/vendor/',
        environment => ["COMPOSER_HOME=/usr/local/bin"],
        path    => '/usr/bin:/usr/local/bin:~/.composer/vendor/bin/',
        require => Class['php']
    }
    file { '/var/www/auto_prepend_file.php':
        ensure => present,
        source => 'puppet:///files/php-files/dev-thingswesell.php',
        owner => 'nginx',
        group => 'nginx',
    }
    # end composer stuff

    # nginx
    class { 'nginx': sendfile => 'off' }

    nginx::resource::vhost { 'thingswesell.com':
        server_name => ['dev.thingswesell.com'],
        www_root => '/var/www/thingswesell.com/pub',
        access_log => '/var/log/nginx/thingswesell.com-access.log',
        error_log => '/var/log/nginx/thingswesell.com-error.log',
        try_files       => ['$uri', '$uri/', '/index.php?$query_string'],
        listen_port => 80
    }

    nginx::resource::location { "thingswesell-php":
         ensure          => present,
         vhost           => "thingswesell.com",
         www_root        => "/var/www/thingswesell.com/pub",
         location        => '~ \.php$',
         index_files     => ['index.php', 'index.html', 'index.htm'],
         fastcgi         => "unix:/var/run/php-fpm/php-fpm.sock",
         fastcgi_script  => undef
   }

    # end nginx

    # mariadb
    # magento hates me and mysql -- installed manually to MySQL CE 5.7
    #end mariadb

}