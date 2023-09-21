node "staging.nfscache.beyond79.com" {

    # NFS and Memcached

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

    include '::ntp'

    class { 'snmp':
      agentaddress => [ 'udp:161', ],
      ro_community => 'U2theR1d1gitaL',
      ro_network   => '172.31.0.0/16',
    }

    # nfs
    include nfs::server

    ::nfs::server::export{ '/nfs/drupal/site-files':
        ensure  => 'mounted',
        clients => '172.31.0.0/16(rw,insecure,async,no_root_squash) localhost(rw)'
    }

    ::nfs::server::export{ '/nfs/goldexchange/resources':
        ensure  => 'mounted',
        clients => '172.31.0.0/16(rw,insecure,async,no_root_squash) localhost(rw)'
    }
    # end nfs

    # memcached
    class { 'memcached':
        max_memory => '128M'
    }
    # end memcached
}