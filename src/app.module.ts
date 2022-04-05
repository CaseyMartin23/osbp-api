import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WriteUpModule } from './write-up/write-up.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_DB_URL,
      database: process.env.MONGO_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'admin-portal', 'build'),
    }),
    UserModule,
    AuthModule,
    WriteUpModule,
  ],
  
})

export class AppModule {}
