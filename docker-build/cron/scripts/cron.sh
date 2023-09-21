#!/bin/bash

DRUPAL_SITES_ROOT=/var/www/b79drupal/drupal/sites

echo -n "[`date`] "
echo "Starting to run Drupal cron ..."

for site in `ls $DRUPAL_SITES_ROOT | egrep *com$`;
do
  cd $DRUPAL_SITES_ROOT/$site
  echo -n "[`date`] Running cron on $site ..."
  drush cron
  cd $DRUPAL_SITES_ROOT
done;

echo "[`date`] Done"