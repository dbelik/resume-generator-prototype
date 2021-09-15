FROM php:8-fpm

ARG DEFAULT_USER_ID
ARG DEFAULT_GROUP_ID
ARG DEFAULT_USER
ARG DEFAULT_GROUP

RUN groupadd --gid ${DEFAULT_GROUP_ID} ${DEFAULT_GROUP}
RUN useradd --gid ${DEFAULT_GROUP_ID} --uid ${DEFAULT_USER_ID} ${DEFAULT_USER}

RUN apt-get update && \
    apt-get install -y --allow-remove-essential --no-install-recommends \
    libmemcached-dev \
    libz-dev \
    libpq-dev \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    libssl-dev \
    libmcrypt-dev \
    openssh-server \
    libmagickwand-dev \
    git \
    cron \
    nano \
    libxml2-dev \
    bash nano curl libzip-dev supervisor findutils \
    zip libzip-dev \
    && pecl install mcrypt-1.0.4 && docker-php-ext-enable mcrypt \
    && docker-php-ext-install zip \
    && docker-php-ext-install soap \
    && docker-php-ext-install exif \
    && docker-php-ext-install pcntl \
    && docker-php-ext-install zip \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install pdo_pgsql \
    && docker-php-ext-install bcmath \
    && docker-php-ext-install gd \
    && curl -sS https://getcomposer.org/installer -o composer-setup.php \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/resume-prototype

USER ${DEFAULT_USER}