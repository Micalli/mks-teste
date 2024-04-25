FROM public.ecr.aws/bitnami/node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --unsafe-perm
RUN apt-get update -qq && \
    apt-get upgrade -yqq && \
    apt-get install curl -yqq && \
    curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install  nodejs -yqq && \
    apt-get install bzip2 -yqq && \
    apt-get install build-essential chrpath libssl-dev libxft-dev libfreetype6-dev libfreetype6 libfontconfig1-dev libfontconfig1 -yqq

# PhantomJS requires  an OpenSSL config even if it's an empty one,
# else it'll complain about "libssl_conf.so: cannot open shared object file"
# which seems to be a recent bug.
ENV OPENSSL_CONF=/opt/openssl.cnf

COPY . .

RUN npm run build

CMD ["node", "dist/main"]