#!/bin/bash
# Wait for the database to be ready (optional, for safety)
# You can use a tool like wait-for-it or sleep for a few seconds
# sleep 10

php artisan migrate --force
php artisan db:seed

# Start Apache in the foreground
apache2-foreground