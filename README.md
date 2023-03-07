# NestJS API
## Installation
### NestJS

```bash
$ npm i -g @nestjs/cli
$ npm install --save @nestjs/typeorm typeorm mysql2
```

### MySQL

```bash
$ npm i mysql
```

Create a dummy user account and database
```bash
$ sudo mysql
mysql> CREATE USER 'test'@'localhost';
mysql> GRANT ALL PRIVILEGES ON test.* To 'test'@'localhost' IDENTIFIED BY 'password';
mysql> CREATE DATABASE test;
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


Don't forget to start the React app in the `/frontend` folder.
