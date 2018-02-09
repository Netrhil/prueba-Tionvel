# prueba-Tionvel
Repositorio destinado al desarrollo de prueba de selección para Tionvel

## Descripción

El proyecto fue hecho en base a laravel 5.5 y Jquery, implementando el backend como API

### Requisitos

Dependencias necesarias :

```
php 7
Apache2
Composer
```

#### Instalación de dependencias

Para poder ejecutar correctamente laravel es necesario un par de paquetes extras de php.

##### PHP 7
```
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install php7.1 php7.1-mcrypt php7.1-xml php7.1-gd php7.1-opcache php7.1-mbstring
```

##### Apache2
Luego de ser instalado php 7 , procedemos a instalar Apache2:

```
sudo apt-get install apache2 libapache2-mod-php7.1
```

##### PHP Composer
Finalmente instalamos Composer, para ellos necesitaremos curl:
```
sudo apt-get install curl

```
Luego de instalado curl:

```
sudo curl -s https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```


## Instalación del proyecto

Dentro del directorio del proyecto ejecutamos composer para poder instalar las librerías necesarias:

```
composer install
```

Ya finalizado el proceso, se puede ejecutar el proyecto en local:

```
php artisan serve
```
