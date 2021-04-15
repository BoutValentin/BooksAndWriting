#!/bin/sh
set -e

if [ "$NODE_ENV" != "production" ]; then    
    echo "Installing dependencies"
    yarn install
    echo "Starting development server"
    yarn serve
else
    echo "Creation of a production build"
    yarn run build
    echo "Serving dist products"
    node dist
fi