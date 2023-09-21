#!/bin/bash

DRUPAL_SITES_ROOT=/var/www/b79drupal/drupal/sites

echo -n "[`date`] "
echo "Starting to run updatedb ..."

for site in `ls $DRUPAL_SITES_ROOT | egrep *com$`;
do
  cd $DRUPAL_SITES_ROOT/$site
  echo -n "[`date`] Running updatedb on $site ..."
  drush updatedb -y
  echo -n "[`date`] Clearing caches for $site ..."
  drush cc all
  cd $DRUPAL_SITES_ROOT
done;

echo "[`date`] Done"