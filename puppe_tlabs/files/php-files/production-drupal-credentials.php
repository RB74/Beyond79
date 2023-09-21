<?php

    const DRUPAL_RDS_HOST = 'production-lead-sites.cs4ybiuq7yk8.us-west-2.rds.amazonaws.com';

    const DRUPAL_CREDENTIALS = [
        'beyond79.com' => [
            'database' => ['host' => DRUPAL_RDS_HOST, 'user' => 'd7', 'password' => 'drup@l7even!', 'database' => 'd7_beyond79'],
            'memcached' => ['host' => 'nfscache.beyond79.com', 'port' => '11211'],
        ],
        'elitediamondbuyers.com' => [
            'database' => ['host' => DRUPAL_RDS_HOST, 'user' => 'd7', 'password' => 'drup@l7even!', 'database' => 'd7_edb'],
            'memcached' => ['host' => 'nfscache.beyond79.com', 'port' => '11211'],
        ],
        'goldkit.com' => [
            'database' => ['host' => DRUPAL_RDS_HOST, 'user' => 'd7', 'password' => 'drup@l7even!', 'database' => 'd7_gk'],
            'memcached' => ['host' => 'nfscache.beyond79.com', 'port' => '11211'],
        ],
        'outofyourlife.com' => [
            'database' => ['host' => DRUPAL_RDS_HOST, 'user' => 'd7', 'password' => 'drup@l7even!', 'database' => 'd7_ooyl'],
            'memcached' => ['host' => 'nfscache.beyond79.com', 'port' => '11211'],
        ],
        'recycleplatinum.com' => [
            'database' => ['host' => DRUPAL_RDS_HOST, 'user' => 'd7', 'password' => 'drup@l7even!', 'database' => 'd7_rp'],
            'memcached' => ['host' => 'nfscache.beyond79.com', 'port' => '11211'],
        ],
        'sellyourgold.com' => [
            'database' => ['host' => DRUPAL_RDS_HOST, 'user' => 'd7', 'password' => 'drup@l7even!', 'database' => 'd7_syg'],
            'memcached' => ['host' => 'nfscache.beyond79.com', 'port' => '11211'],
        ],
        'thingswebuy.com' => [
            'database' => ['host' => DRUPAL_RDS_HOST, 'user' => 'd7', 'password' => 'drup@l7even!', 'database' => 'd7_twb'],
            'memcached' => ['host' => 'nfscache.beyond79.com', 'port' => '11211'],
        ],
    ];