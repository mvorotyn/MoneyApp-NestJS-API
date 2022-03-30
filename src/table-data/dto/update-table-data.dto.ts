import { BaseTableDataDto } from './base-table-data.dto';

export class UpdateTableDataDto extends BaseTableDataDto {
  updatedAt: Date;
  // title: string;
  // tableData?: Array<Record<string, unknown>>;
}
