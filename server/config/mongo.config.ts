import * as mongoose from 'mongoose';

export class MongoDbConnetion {

  constructor() {}

  public initialize() {
    const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    mongoose.set('debug', true);
    const mongooseInstance = mongoose.connect(uri, {}, (err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`mongodb connection is succesfully establised in port ${process.env.DB_PORT}!`);
      }
    });
  }
}
