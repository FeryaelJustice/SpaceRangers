import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionsService } from './missions/missions.service';
import { MissionsController } from './missions/missions.controller';
import { Mission } from './models/mission.model';
import { DataInterceptor } from './util/data.interceptor';
import { DataPipe } from './util/data.pipe';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core/constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mydbuser', // Update to your db username
      password: 'mydbpassword', // Update to your db password
      database: 'gospaceranger',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true, // put to false in production mode
    }),
    TypeOrmModule.forFeature([Mission]),
  ],
  controllers: [AppController, MissionsController],
  providers: [
    AppService,
    MissionsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: DataPipe,
    },
  ],
})
export class AppModule {}
