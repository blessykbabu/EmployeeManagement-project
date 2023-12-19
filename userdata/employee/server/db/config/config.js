module.export=
{
  "development": {
    "database": {
      "url": process.env.MONGO_URL,
      "options": {
        "useNewUrlParser": true,
        "dbName":process.env.dbName
      }
    }
  },
  "test": {
    "database": {
      "url": process.env.MONGO_URL,
      "options": {
        "useNewUrlParser": true,
        "dbName":process.env.dbName
      }
    }
  },
  "production": {
    "database": {
    
      "options": {
        "useNewUrlParser": true,
        "dbName":process.env.dbName
      }
    }
  }
}
