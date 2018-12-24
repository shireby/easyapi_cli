# EasyAPI 🎩

EasyAPI is a lightweight Framework, built on express and bookshelf/Knex and written in TypeScript. EasyAPI should help you get a REST APIup and running, with a database connection, in no time.

EasyAPI comes with it's own CLI tool for Generating Controllers, Models and Services. Is also comes with some other useful utilities.
## Get Started

Create new project

```
$ ./setup
```

## Routes

To create route go to `app/routes/app-routes.ts`

Append to Routes array a `new EasyApiRoute` below is an example:

You will need to create a route with a method controller, path and optional middleware.

```
export const AppRoutes: IEasyApiRoute[] = [
    new EasyApiRoute({
        controller: new MyNewController(),
        method: 'get',
        path: '/my-route',
        middleware: [new CustomMiddleWare().execute]
    })
];
```

## CLI

#### Generators

##### Controllers

Replace [controller-name] with the name of your controller and the following command will generate a controller and place it in the controllers directory.

``` 
$ eapi -g controller=[controller-name] 
```

##### Services

``` 
$ eapi -g service=[service-name] 
```

##### Middleware

``` 
$ eapi -g middleware=[middleware-name] 
```


#### Create Env file
You will need this to run the project.

```
$ eapi --env-file
```

#### Knex CLI for migrations 
Example:
```
$ node_modules/.bin/knex migrate:latest
```