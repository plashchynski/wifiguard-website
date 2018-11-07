#!/bin/bash

npm run build && aws s3 sync --profile my build/ s3://wifiguardapp.com && aws cloudfront create-invalidation --profile my --distribution-id E1Y8VKDDM5UJZY --paths "/*"
