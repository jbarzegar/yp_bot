#!/bin/bash

# Update
apt-get update && apt-get upgrade -qq -y && apt-get dist-upgrade -qq -y && apt-get autoremove -y && apt-get clean

apt-get install -y \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    git \
    libssl1.0.0 \
    libsslcommon2 \
    python \
    rsync \
    software-properties-common \
    wget

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" >> /etc/apt/sources.list

apt-get update && apt-get install yarn -y

curl https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

cd /opt/bot && yarn

echo "-----------------------------------------------------------------"
echo "BOT LOG STARTS BELOW"
echo "-----------------------------------------------------------------"

node /opt/bot/jen/index.js