#! /bin/bash

sleep 1
read -p "Live server kurmak istiyor musunuz ?" updateResult
if [[ $updateResult == "E" ||  $updateResult == "e" ]]
then
    sudo apt-get update
    npm update
    npm update --force
    npm list -g --depth 0
    npm -v
    node -v

    npm init -y
    npm i
    # npm install paketAdi
    # npm uninstall paketAdi
    # npm search paketAdi
    npm root -g
    npm list -g

    # Live Server
    npm i -g live-server
    ls -al
    cd ecmascript_tutorials
    live-server 
else
    echo -e "Kurulum sonlandırıldı."
fi

