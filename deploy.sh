echo 'Building...'
npm run build

echo 'Deploying to server...'
scp -r build/* root@79.174.82.88:/var/www/fatalitystudio/

echo 'Done!'

