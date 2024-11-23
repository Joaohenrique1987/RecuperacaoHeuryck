import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  yearOfPublication: number;

  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  numberOfPages: number;

  @Prop()
  synopsis: string;

  @Prop({ required: true, unique: true })
  isbn: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
