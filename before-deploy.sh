REPOSITORY=/home/ubuntu/findclothes_deploy

if [ -d $REPOSITORY/app ]; then
    rm -rf $REPOSITORY/app
fi
mkdir -vp $REPOSITORY/app
