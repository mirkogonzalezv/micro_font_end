# Ejemplo Micro Front Ends

Proyecto de ejemplo para entendimiento de Native Federation + Angular 19

# Descripción
Este es un projecto semilla para comprender el funcionamiento de un proyecto en Angular implementando native-federation y micro-frontend
mediante carga de modulos perezosa

## Ejecución del proyecto.
Para poder ejecutar el proyecto es necesario realizar las siguientes configuraciones.

1.- Ingresar al proyecto shared-lib

```
 $ cd shared-lib/
```

```
 $ pnpm i && npm link
```

2.- Luego de generar el npm link, este deja la libreria de Angular de forma "global" en el ambiente, por lo que ahora debe ser instalada en los reposotiros
tanto del Host como de la app remota.
```
 $ cd host && npm i
```
Luego de instalar las dependencias, es necesario instalar la libreria que linkeamos con npm
```
 $ npm link shared-lib
```
`es importante que el nombre del link, sea el nombre del proyecto o libreria generada anteriormente`

3.- Luego realizar lo anterior para el mfe1.

4.- Ya al tener instalado y linkeado todo, ya se pueden ejecutar los proyectos de forma independiente.
```
$ cd host && ng serve
```
```
$ cd mfe1 && ng serve
```
5.- Visitar los puertos respectivo para visualizar los aplicativos.

 - 4200
 - 3000

El aplicativo envía por el clic de un botón, un token al otro aplicativo subscrito. 

# Autor:
Nombre: Mirko González Vásquez
Contacto: gonzalez.mirko91@gmail.com





