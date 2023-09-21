node "staging.eventstore.beyond79.com" {
    # EventStore

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

    # event store
    exec { 'get_eventstore':
        command => '/usr/bin/wget -q http://download.geteventstore.com/binaries/EventStore-OSS-Ubuntu-14.04-v3.5.0.tar.gz -O /tmp/EventStore-OSS-Ubuntu-14.04-v3.5.0.tar.gz',
        creates => '/tmp/EventStore-OSS-Ubuntu-14.04-v3.5.0.tar.gz'
    }
    exec { 'extract_eventstore':
        command => '/bin/tar -zxf /tmp/EventStore-OSS-Ubuntu-14.04-v3.5.0.tar.gz -C /opt',
        creates => '/opt/EventStore-OSS-Ubuntu-14.04-v3.5.0',
        require => Exec['get_eventstore']
    }

    # this isn't gonna work -- need to daemonize it
    exec { 'run_eventstore':
        environment => ['EVENTSTORE_WORKER_THREADS=12', 'EVENTSTORE_MAX_MEM_TABLE_SIZE=100000'],
        command => '/opt/EventStore-OSS-Ubuntu-14.04-v3.5.0/run-node.sh --ext-http-prefixes=http://*:2113/ --ext-ip=0.0.0.0 --db /data/db --log /data/logs --run-projections=all',
        require => Exec['extract_eventstore']
    }
    # end event store
}