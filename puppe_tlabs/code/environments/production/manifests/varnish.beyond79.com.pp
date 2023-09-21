node "varnish.drupal.beyond79.com" {
    # Varnish and Nginx Services for caching and ELB name resolution

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

    include '::hosts'

    include '::ntp'

    class { 'snmp':
        agentaddress => [ 'udp:161' ],
        ro_community => 'U2theR1d1gitaL',
        ro_network   => '172.31.0.0/16',
    }

    # varnish
    class { 'varnish':
        addrepo => true,
        secret => '6565bd1c-b6f1-4ba3-99bc-3cfa41fad04f',
        listen_port => '80',
        storage_type => 'malloc',
        storage_size => '64M',
    }
    varnish::vcl { '/etc/varnish/default.vcl':
        content => template('varnish/production-drupal.vcl.erb'),
    }
    #end varnish

    # nginx (to proxy to production-http-lead-sites-1432164209.us-west-2.elb.amazonaws.com)
    class {
        'nginx':
            sendfile => 'off',
            worker_processes => '2',
    }
    nginx::resource::vhost { 'default_server':
        listen_port => 8080,
        proxy       => 'http://production-http-lead-sites-1432164209.us-west-2.elb.amazonaws.com:80',
    }
    # end nginx
}