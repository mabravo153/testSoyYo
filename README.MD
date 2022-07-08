# Entregable Prueba Técnica Backend Node.js

Prueba backend desarrollada con nodejs, Typescript y docker

## Entrega

- Repositorio GIT con código fuente

- Archivos Dockerfile para crear el contenedor


## Guia de Instalacion y ejecucion

para la instalacion de este proyecto debemos tener instalado en nuestra maquina

- Nodejs
- npm
- Git
- Docker

con el comando que veremos a continuacion descargaremos el repositorio con el codigo y los archivos necesarios para correr la aplicacion y todo lo que esta necesita

```
git clone https://github.com/mabravo153/testSoyYo

cd testSoyYo
```

una vez dentro de la carpeta del proyecto debemos instalar las dependencias usando el comando 

```
npm install 
```

esto descargara las dependencias necesarias para poder correr el codigo. una vez realizado eso. debemos ejecutar el codigo 

```
npm run dev
```

para asi poder iniciar la ejecucion del codigo localmente 


para poder realizar la ejecucion de la creacion del contenedor se puede realizar con el comando 

```
npm run build
```

pero es recomendable para que se realice la ejecucion sin problemas que se ejecute el archivo docker-compose incluido en el directorio ya que este contiene informacion relevante para el mismo. este se ejecutara con el comando 

```
docker-compose up -d 
```

este realizara la creacion de la imagen y le asignara variables de entorno, ademas de ejecutarlo
