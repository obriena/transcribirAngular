# Transcribir Angular

Esto proyect fue generated con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

Extra commands used to setup this environment:
```
ng add @angular/flex-layout@7.0.0-beta.24
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Managing Environmnets

[A good Resource](https://blog.angularindepth.com/becoming-an-angular-environmentalist-45a48f7c20d8) for managing environments.

### Dev
Starting the server with development configration:
```
ng serve --configuration=dev
```  
Development Configuration is for Angular work only.  

### Integration
Starting the server with the integration configuration:
```
ng serve --configuration=integration
```

### Production
Start the server with production configuration:
```
ng serve --configuration=production
```
Production is for deploying into the prod environment.

### Add Component

### Add Service
ng generate service despierta

### Docker 
```
docker build -t flyingspheres/transcribir:0.2 ..
docker run -it -p 8080:80 -d flyingspheres/transcribir:0.2
docker run -dit --name my-running-app -p 8080:80 my-apache2
```
### Heroku
Heroku solo funciona después de instal las herramientas de línea de comando.  
```
 ng build --prod
 heroku login
 heroku container:login
 heroku container:push web -a transcribir
 heroku container:release web -a transcribir
 heroku logs --tail -a transcribir
 heroku open -a transcribir
 ```

 ### Helpful Hints
 When executing **ng serve** you get an error that looks like this:
 ```
 Could not find module "@angular-devkit/build-angular" from "/home/aaron/Desarrollo/Codigo/transcribirAngular".
 ```
 Simlpy run this command:
 ```
 npm install
 ```