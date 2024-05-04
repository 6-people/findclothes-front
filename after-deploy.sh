REPOSITORY=/home/ubuntu/findclothes_deploy

cd $REPOSITORY  

pm2 start npm --name findclothes_deploy -- run dev --watch
pm2 save
