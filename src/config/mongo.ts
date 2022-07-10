// trong folder config chứ file mongo.ts
import * as mongodbUri from 'mongodb-uri';

// load từ file .env / set default
export default {
  dbName: process.env.MONGO_DATABASE || 'ehiring',
  ip: process.env.MONGO_HOST || 'localhost',
  port: process.env.MONGO_PORT || '27017',
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,

  get uri() {
    const tmp =
      process.env.MONGO_URI ||
      mongodbUri.format({
        scheme: 'mongodb',
        hosts: [
          {
            host: this.ip,
            port: this.port,
          },
        ],
        database: this.dbName,
      });
    // dùng cho db có set password
    // mongodbUri.format({
    //   username: this.username,
    //   password: this.password,
    //   hosts: [
    //     {
    //       host: this.ip,
    //       port: this.port,
    //     },
    //   ],
    //   database: this.dbName,
    // });

    return tmp;
  },
};
