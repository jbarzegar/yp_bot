FROM ubuntu:latest

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.7.0

ADD . /opt/bot

ENTRYPOINT /opt/bot/build/entrypoint.sh
