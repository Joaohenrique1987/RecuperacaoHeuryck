import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './books/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:".env"}),MongooseModule.forRoot(process.env.DB_URL),BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
