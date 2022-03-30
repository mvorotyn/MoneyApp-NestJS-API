import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TableDataDocument = TableData & Document;

@Schema()
export class TableData {
  @Prop({ required: true })
  title: string;

  @Prop()
  tableData?: Array<Record<string, unknown>>;

  @Prop()
  updatedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const TableDataSchema = SchemaFactory.createForClass(TableData);
