#!/bin/bash
cd /var/www/aws-kendra-react-app
git pull origin main
npm install
npm run build
pm2 restart aws-kendra-react-app
