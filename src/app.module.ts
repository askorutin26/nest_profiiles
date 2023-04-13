import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from './profiles/profiles.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'nest_profiles',
      models: [Profile],
      autoLoadModels: true,
    }),
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
