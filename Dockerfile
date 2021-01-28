FROM node:lts

RUN apt-get update && apt-get install -y build-essential && apt-get install -y python && npm install


RUN groupadd --gid 10001 nupp && \
    useradd --gid 10001 --uid 10001 --home-dir /nupp nupp


ENV HOME=/home/nupp
WORKDIR ${HOME}/app
ENV NODE_PATH=.

COPY ["package.json", "package-lock.json*", "wait-for", "${HOME}/app/"]
COPY ["./", "${HOME}/app/"]

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64 /usr/local/bin/dumb-init


RUN chown -R nupp:nupp ${HOME}/* /usr/local/ && \
    chmod +x /usr/local/bin/dumb-init && \
    chmod +x ./wait-for && \
    npm cache verify && \
    npm install && \
    chown -R nupp:nupp ${HOME}/*

USER nupp


EXPOSE 3000

CMD ["dumb-init", "npm", "run", "start"]
