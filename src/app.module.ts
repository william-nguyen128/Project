import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalentModule } from './talents/talents.module';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config/**/*.{ts,js}')), //load tất cả file trong folder config
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        const uri = config.get('mongo.uri');
        Logger.log(`Connect to MongoDB at ${uri}`, 'MongooseModule');
        return {
          uri,
          useNewUrlParser: true,
        };
      },
      inject: [ConfigService],
    }),
    TalentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  static host: string;
  static port: number | string;
  static schemes: 'http' | 'https' = 'http';
  static isDev: boolean;

  constructor(private readonly config: ConfigService) {
    AppModule.host = config.get('app.host');
    AppModule.port = AppModule.normalizePort(config.get('app.port'));
    AppModule.schemes = config.get('app.schemes');
    AppModule.isDev = config.get('app.isDev');
  }

  private static normalizePort(param: number | string): number | string {
    const portNumber: number =
      typeof param === 'string' ? parseInt(param, 10) : param;

    if (isNaN(portNumber)) {
      return param;
    } else if (portNumber >= 0) {
      return portNumber;
    }
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
