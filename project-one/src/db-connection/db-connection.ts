import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

export class MongooseConnectionMongodb implements MongooseOptionsFactory {
  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    const connectionUrl = process.env.MONGODB_URL;
    return {
      uri: connectionUrl,
    };
  }
}
