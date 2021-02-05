
# Taskapi Server


## Minimum requirements 📄
- Node >= 12.8
- postgre >= 10.15


## Installation and configuration 📦
- clone or download the project
- open the project from a command terminal
- run `npm install` to install all dependencies
- rename the .env.example file to .env and set the variables as needed

## file .env

Example:

```env

  HOST=localhost
  HOST_DB=localhost
  PORT=4000
  PORT_DB=5432
  USER_DB=postgres
  PASSWORD_DB=your_pass
  DATABASE=tasks_db
  JWT_SECRET=secret
```

## create the database in postgre

- you can run the following statement in a psql shell or you can also create one from an administrator like pgAdmin 4 for create the database

```sql

 CREATE DATABASE tasks_db;
```

## Execution 🚀🚀 
- Development: run in a terminal `npm run dev`
- Production: run in a terminal `npm start`


To clone or download the Frontend click on the following link 
<br>
<a href="https://github.com/eduardo-talavera/taskapi-client">Taskapi Client</a>
